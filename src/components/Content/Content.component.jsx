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

    this.props.setListFavoriteToStore(JSON.parse(localStorage.getItem('listFavorite')));

    if (!this.props.generalStore.baseCurrency[0]) {
      getBaseCurrency()
        .then(response => {
          this.props.setBaseCurrencyToStore(response);
          this.props.setSelectedCurrencyToStore(response[0]);
        });
    }
  }

  componentDidUpdate(prevProps, PrevState) {

    if (this.props.generalStore.baseCurrency.length && this.props.generalStore.listFavorite.length && !this.props.favoriteChartStore.favoriteSelectedCurrency.Abbr) {

      let selectedCurrency = getBaseAfterFilter(this.props.generalStore.baseCurrency, this.props.generalStore.listFavorite[0]);
      this.props.setFavoriteSelectedCurrencyToStore(selectedCurrency[0]);
    }

    if (prevProps.generalStore.selectedCurrency.ID !== this.props.generalStore.selectedCurrency.ID || prevProps.chartStore.fromDate !== this.props.chartStore.fromDate || prevProps.chartStore.endDate !== this.props.chartStore.endDate) {

      getArrRateAndArrDateCurrencyInRange(this.props.generalStore.selectedCurrency.ID, this.props.chartStore.fromDate, this.props.chartStore.endDate)
        .then(response => {
          this.props.setBaseRangeToStore(response);
        });
    }

    if (this.props.favoriteChartStore.favoriteSelectedCurrency.ID && (prevProps.favoriteChartStore.favoriteSelectedCurrency.ID !== this.props.favoriteChartStore.favoriteSelectedCurrency.ID || prevProps.favoriteChartStore.favoriteFromDate !== this.props.favoriteChartStore.favoriteFromDate || prevProps.favoriteChartStore.favoriteEndDate !== this.props.favoriteChartStore.favoriteEndDate)) {

      getArrRateAndArrDateCurrencyInRange(this.props.favoriteChartStore.favoriteSelectedCurrency.ID, this.props.favoriteChartStore.favoriteFromDate, this.props.favoriteChartStore.favoriteEndDate)
        .then(response => {
          this.props.setFavoriteBaseRangeToStore(response);
        });
    }
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

    if (abbr == this.props.favoriteChartStore.favoriteSelectedCurrency.Abbr) {
      this.props.setFavoriteSelectedCurrencyToStore({});
    };
    if (!listFavorite.length) {
      this.props.setFavoriteBaseRangeToStore([[], []]);
    };
  }

  onClickFavoriteSelectCurrencyTab = (selectedCurrencyAbbr) => {

    let selectedCurrency = getBaseAfterFilter(this.props.generalStore.baseCurrency, selectedCurrencyAbbr);
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
    const { chartStore, favoriteChartStore } = this.props;

    return (
      <>
        <Route exact path={["/", "/currensies"]} render={() => (
          <>
            <Menu />
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
              />
            </div>
          </>
        )} />

        <Route exact path="/calculator" render={() => (
          <>
            <Menu />
            <div className="content">
              <Converter
                valueInputTo={this.convertCurrency()}
                onChangeFromInputValue={this.onChangeFromInputValue}
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
            <Menu style={"center"} />
            <div className="content">
              <AboutPage />
            </div>
          </>
        )} />

        <Route exact path="/favorite" render={() => (
          <>
            <Menu style={"center"} />
            <div className="content">
              <Tablist
                onClickDelTab={this.onClickDelFavoriteCurrency}
                onClickTab={this.onClickFavoriteSelectCurrencyTab}
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