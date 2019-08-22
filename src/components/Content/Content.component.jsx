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
import { getArrRateAndArrDateCurrencyInRange } from "../../service/getArrRateAndArrDateCurrencyInRange.js";
import { getBaseAfterFilter } from "../../service/getBaseAfterFilter.js";

class Content extends Component {

  componentWillMount() {
    if (!JSON.parse(localStorage.getItem('listFavorite'))) localStorage.setItem('listFavorite', JSON.stringify([]));
  }

  componentDidMount() {
    // alert("Создание");
    // alert (!this.props.generalStore.baseCurrency[0]);
    this.props.setListFavoriteToStore(JSON.parse(localStorage.getItem('listFavorite')));
    // alert(JSON.parse(localStorage.getItem('listFavorite')).length);
    // if (!JSON.parse(localStorage.getItem('listFavorite')).length) {

    // console.log(this.props.favoriteChartStore.favoriteSelectedCurrency.Abbr);
    // if (!this.props.favoriteChartStore.favoriteSelectedCurrency.Abbr) {
    // alert("Пустота");
    // } else console.log(this.props.favoriteChartStore.favoriteSelectedCurrency.Abbr);
    // };
    if (!this.props.generalStore.baseCurrency[0]) {
      getBaseCurrency()
        .then(response => {
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
    // alert("Апдейт");
    // const { setBaseRangeToStore } = this.props;
    // alert ("asdasd");
    // alert(JSON.parse(localStorage.getItem('listFavorite'))[0]);
    // alert(this.props.favoriteChartStore.favoriteSelectedCurrency.Abbr);
    // console.log(this.props.generalStore.listFavorite);
    // console.log(this.props.generalStore.baseCurrency.length);
    // console.log(this.props.favoriteChartStore.favoriteSelectedCurrency.Abbr);

    if (this.props.generalStore.baseCurrency.length && this.props.generalStore.listFavorite.length && !this.props.favoriteChartStore.favoriteSelectedCurrency.Abbr) {
      // console.log("Стор неравен нулю");
      // console.log(this.props.generalStore.baseCurrency);

      // console.log("Нука: " + this.props.generalStore.listFavorite[0]);

      let selectedCurrency = getBaseAfterFilter(this.props.generalStore.baseCurrency, this.props.generalStore.listFavorite[0]);
      // console.log(selectedCurrency);
      // console.log(selectedCurrency[0]);
      this.props.setFavoriteSelectedCurrencyToStore(selectedCurrency[0]);
      // this.onClickFavoriteSelectCurrencyTab(JSON.parse(localStorage.getItem('listFavorite'))[0].Abbr);
    }
    //  else alert(this.props.favoriteChartStore.favoriteSelectedCurrency.Abbr);

    if (prevProps.generalStore.selectedCurrency.ID !== this.props.generalStore.selectedCurrency.ID || prevProps.chartStore.fromDate !== this.props.chartStore.fromDate || prevProps.chartStore.endDate !== this.props.chartStore.endDate) {
      // alert (this.props.generalStore.selectedCurrency.ID);
      getArrRateAndArrDateCurrencyInRange(this.props.generalStore.selectedCurrency.ID, this.props.chartStore.fromDate, this.props.chartStore.endDate)
        .then(response => {
          // alert(response+"!!!!!!!!!!!!");
          this.props.setBaseRangeToStore(response);
        });
    }

    if (this.props.favoriteChartStore.favoriteSelectedCurrency.ID && (prevProps.favoriteChartStore.favoriteSelectedCurrency.ID !== this.props.favoriteChartStore.favoriteSelectedCurrency.ID || prevProps.favoriteChartStore.favoriteFromDate !== this.props.favoriteChartStore.favoriteFromDate || prevProps.favoriteChartStore.favoriteEndDate !== this.props.favoriteChartStore.favoriteEndDate)) {
      // alert (this.props.generalStore.selectedCurrency.ID);
      getArrRateAndArrDateCurrencyInRange(this.props.favoriteChartStore.favoriteSelectedCurrency.ID, this.props.favoriteChartStore.favoriteFromDate, this.props.favoriteChartStore.favoriteEndDate)
        .then(response => {
          // alert(response+"!!!!!!!!!!!!");
          this.props.setFavoriteBaseRangeToStore(response);
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

  onChangeFavoriteFromDate = (date) => {
    this.props.setFavoriteFromDateToStore(date)
  }

  onChangeFavoriteEndDate = (date) => {
    this.props.setFavoriteEndDateToStore(date)
  }

  onClickAddFavoriteCurrency = () => {
    let abbr = this.props.generalStore.selectedCurrency.Abbr;
    let listFavorite = this.props.generalStore.listFavorite;
    if (listFavorite.indexOf(abbr) < 0) {
      let newListFavorite = listFavorite.concat(abbr);
      this.props.setListFavoriteToStore(newListFavorite);
      localStorage.setItem('listFavorite', JSON.stringify(newListFavorite))
    }
  }

  onClickDelFavoriteCurrency = (e, abbr) => {
    e.stopPropagation();
    let listFavorite = this.props.generalStore.listFavorite;
    listFavorite.splice(listFavorite.indexOf(abbr), 1);
    this.props.setListFavoriteToStore(listFavorite);
    localStorage.setItem('listFavorite', JSON.stringify(listFavorite));
    // console.log(this.props.favoriteChartStore.favoriteSelectedCurrency);
    if (abbr == this.props.favoriteChartStore.favoriteSelectedCurrency.Abbr) {
      this.props.setFavoriteSelectedCurrencyToStore({});
    };
    if (!listFavorite.length) {
      this.props.setFavoriteBaseRangeToStore([[], []]);
    };
    // console.log(this.props.favoriteChartStore.favoriteSelectedCurrency);
  }

  onClickFavoriteSelectCurrencyTab = (selectedCurrencyAbbr) => {
    // console.log(selectedCurrencyAbbr);

    let selectedCurrency = getBaseAfterFilter(this.props.generalStore.baseCurrency, selectedCurrencyAbbr);
    // console.log(selectedCurrency);
    this.props.setFavoriteSelectedCurrencyToStore(selectedCurrency[0])

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
    const { generalStore, converterStore, chartStore, favoriteChartStore } = this.props;

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
                onClickButton={this.onClickAddFavoriteCurrency}
              />
              <Chart
                flagDatePickersIsShow={true}
                onChangeFromDate={this.onChangeFromDate}
                onChangeEndDate={this.onChangeEndDate}
                fromDate={chartStore.fromDate}
                endDate={chartStore.endDate}
                rangeDate={chartStore.baseRangeDate}
                rangeRate={chartStore.baseRangeRate}
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
                fromDate={chartStore.fromDate}
                endDate={chartStore.endDate}
                rangeDate={chartStore.baseRangeDate}
                rangeRate={chartStore.baseRangeRate}
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
                onClickDelTab={this.onClickDelFavoriteCurrency}
                onClickTab={this.onClickFavoriteSelectCurrencyTab}
                selectedCurrencyAbbr={favoriteChartStore.favoriteSelectedCurrency.Abbr ? favoriteChartStore.favoriteSelectedCurrency.Abbr : ""}
              />
              <div className="chart-favorite-wrapper">
                <Chart
                  flagDescriptionIsShow={true}
                  flagDatePickersIsShow={true}
                  currencyName={favoriteChartStore.favoriteSelectedCurrency.EngName ? favoriteChartStore.favoriteSelectedCurrency.EngName : ""}
                  currencyAbbreviation={favoriteChartStore.favoriteSelectedCurrency.Abbr ? favoriteChartStore.favoriteSelectedCurrency.Abbr : ""}
                  onChangeFromDate={this.onChangeFavoriteFromDate}
                  onChangeEndDate={this.onChangeFavoriteEndDate}
                  fromDate={favoriteChartStore.favoriteFromDate}
                  endDate={favoriteChartStore.favoriteEndDate}
                  rangeDate={favoriteChartStore.favoriteBaseRangeDate}
                  rangeRate={favoriteChartStore.favoriteBaseRangeRate}
                />
              </div>
            </div>

          </>
        )} />
      </>
    );
  }
}

export default Content;