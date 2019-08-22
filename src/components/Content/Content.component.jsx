import React, { Component } from "react";
import { Route } from 'react-router-dom';

import './Content.styles.css';

import Menu from "../Menu";
import Converter from "../Converter";
import Chart from "../Chart";
import Button from "../Button";
import AboutPage from "../AboutPage";
import Tablist from "../Tablist";

import { getBaseCurrency } from "../../service/getBaseCurrency.js";
import { getArrRateArrDateCurrencyInRange } from "../../service/getArrRateArrDateCurrencyInRange.js";

class Content extends Component {

  componentDidMount() {
    // alert (!this.props.generalStore.baseCurrency[0]);
    if (localStorage.getItem('listFavorite')) {
      this.props.setListFavoriteToStore(JSON.parse(localStorage.getItem('listFavorite')))
    };
    if (!this.props.generalStore.baseCurrency[0]) {
      getBaseCurrency().then(response => {
        this.props.setBaseCurrencyToStore(response);
        this.props.setSelectedCurrencyToStore(response[0]);
      });
    }
    // getBaseCurrency().then(response => {
    //   if (!this.props.generalStore.baseCurrency[0]) this.props.setBaseCurrencyToStore(response);
    //   if (!this.props.generalStore.selectedCurrency.ID) this.props.setSelectedCurrencyToStore(response[0]);
    // });
  }

  componentDidUpdate(prevProps, PrevState) {
    // const { setBaseRangeToStore } = this.props;
    // alert ("asdasd");
    if (prevProps.generalStore.selectedCurrency.ID !== this.props.generalStore.selectedCurrency.ID || prevProps.chartStore.fromDate !== this.props.chartStore.fromDate || prevProps.chartStore.endDate !== this.props.chartStore.endDate) {
      // alert (this.props.generalStore.selectedCurrency.ID);
      getArrRateArrDateCurrencyInRange(this.props.generalStore.selectedCurrency.ID, this.props.chartStore.fromDate, this.props.chartStore.endDate)
        .then(response => {
          // alert(response+"!!!!!!!!!!!!");
          this.props.setBaseRangeToStore(response);
        });
    }
  }

  onChangeFromInputValue = (value) => {
    this.props.setValueInputFromCurrencyToStore(value);
  }

  onChangeDroplist = (value) => {
    this.props.setIdDropListCurrencyToStore(value);
  }

  onChangeFromDate = (date) => {
    this.props.setFromDateToStore(date)
  }

  onChangeEndDate = (date) => {
    this.props.setEndDateToStore(date)
  }

  onClickAddFavorite = () => {
    let abbr = this.props.generalStore.selectedCurrency.Abbr;
    let listFavorite = this.props.generalStore.listFavorite;
    if (listFavorite.indexOf(abbr) < 0) {
      let newListFavorite = listFavorite.concat(abbr);
      this.props.setListFavoriteToStore(newListFavorite);
      localStorage.setItem('listFavorite', JSON.stringify(newListFavorite))
    }
  }

  onClickDelFavorite = (abbr) => {
    let listFavorite = this.props.generalStore.listFavorite;
    listFavorite.splice(listFavorite.indexOf(abbr), 1);
    this.props.setListFavoriteToStore(listFavorite);
    localStorage.setItem('listFavorite', JSON.stringify(listFavorite))
  }

  convertCurrency = () => {
    const { generalStore, converterStore } = this.props;
    if (generalStore.selectedCurrency.Rate) {
      let rateCurrencyFrom = generalStore.selectedCurrency.Rate ? generalStore.selectedCurrency.Rate : "";
      let rateCurrencyTo = generalStore.baseCurrency[converterStore.idDropListCurrency].Rate;
      let scaleCurrencyFrom = generalStore.selectedCurrency.Scale ? generalStore.selectedCurrency.Scale : "";
      let scaleCurrencyTo = generalStore.baseCurrency[converterStore.idDropListCurrency].Scale;
      let valueInputTo = (+converterStore.valueInputFromCurrency / scaleCurrencyFrom * rateCurrencyFrom / rateCurrencyTo * scaleCurrencyTo).toFixed(4);
      return valueInputTo;
    }
    else return 1;
  }

  render() {
    const { generalStore, converterStore } = this.props;

    let valueInputTo = this.convertCurrency();

    let selectedCurrencyAbbr = generalStore.selectedCurrency.Abbr ? generalStore.selectedCurrency.Abbr :
      generalStore.baseCurrency[0] ? generalStore.baseCurrency[0].Abbr : "";

    let dropListAbbr = generalStore.baseCurrency[0] ? generalStore.baseCurrency[converterStore.idDropListCurrency].Abbr : "";

    return (
      <>
        <Route exact path={["/", "/currensies"]} render={() => (
          <>
            <Menu
              numberFavorite={generalStore.listFavorite.length}
            />
            <div className="content">
              <Button
                onClickButton={this.onClickAddFavorite}
              />
              <Chart
                flagDatePickersIsShow={true}
                onChangeFromDate={this.onChangeFromDate}
                onChangeEndDate={this.onChangeEndDate}
                fromDate={this.props.chartStore.fromDate}
                endDate={this.props.chartStore.endDate}
                rangeDate={this.props.chartStore.baseRangeDate}
                rangeRate={this.props.chartStore.baseRangeRate}
                // aaa={this.props.generalStore.selectedCurrency.ID}
              />
            </div>
          </>
        )} />

        <Route exact path="/calculator" render={() => (
          <>
            <Menu
              numberFavorite={generalStore.listFavorite.length}
            />
            <div className="content">
              <Converter
                valueInputFrom={converterStore.valueInputFromCurrency}
                valueInputTo={valueInputTo}
                selectedCurrencyAbbr={selectedCurrencyAbbr}
                baseCurrency={generalStore.baseCurrency}
                dropListAbbr={dropListAbbr}
                onChangeFromInputValue={this.onChangeFromInputValue}
                onChangeDroplist={this.onChangeDroplist}
              />
              <Chart
              onChangeFromDate={this.onChangeFromDate}
              onChangeEndDate={this.onChangeEndDate}
              fromDate={this.props.chartStore.fromDate}
              endDate={this.props.chartStore.endDate}
              rangeDate={this.props.chartStore.baseRangeDate}
              rangeRate={this.props.chartStore.baseRangeRate}
              />
            </div>
          </>
        )} />

        <Route exact path="/about" render={() => (
          <>
            <Menu
              style={"center"}
              numberFavorite={generalStore.listFavorite.length}
            />
            <div className="content">
              <AboutPage />
            </div>
          </>
        )} />

        <Route exact path="/favorite" render={() => (
          <>
            <Menu
              style={"center"}
              numberFavorite={generalStore.listFavorite.length}
            />
            <div className="content">
              {/* <FavoritePage /> */}
              <Tablist
                listFavorite={this.props.generalStore.listFavorite}
                onClickDelTab={this.onClickDelFavorite}
              />
              <div className="chart-favorite-wrapper">
                {/* <Chart
                  flagDescriptionIsShow={true}
                  flagDatePickersIsShow={true}
                /> */}
              </div>
            </div>

          </>
        )} />
      </>
    );
  }
}

export default Content;