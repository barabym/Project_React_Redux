import React, { Component } from "react";
import { Route } from 'react-router-dom';

import './Content.styles.css';

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
    const { generalStore, chartStore, favoriteChartStore } = this.props;

    if (generalStore.baseCurrency.length && generalStore.listFavorite.length && !favoriteChartStore.favoriteSelectedCurrency.Abbr) {

      let selectedCurrency = getBaseAfterFilter(generalStore.baseCurrency, generalStore.listFavorite[0]);
      this.props.setFavoriteSelectedCurrencyToStore(selectedCurrency[0]);
    }

    if (prevProps.generalStore.selectedCurrency.ID !== generalStore.selectedCurrency.ID || prevProps.chartStore.fromDate !== chartStore.fromDate || prevProps.chartStore.endDate !== chartStore.endDate) {

      getArrRateAndArrDateCurrencyInRange(generalStore.selectedCurrency.ID, chartStore.fromDate, chartStore.endDate)
        .then(response => {
          this.props.setBaseRangeToStore(response);
        });
    }

    if (favoriteChartStore.favoriteSelectedCurrency.ID && (prevProps.favoriteChartStore.favoriteSelectedCurrency.ID !== favoriteChartStore.favoriteSelectedCurrency.ID || prevProps.favoriteChartStore.favoriteFromDate !== favoriteChartStore.favoriteFromDate || prevProps.favoriteChartStore.favoriteEndDate !== favoriteChartStore.favoriteEndDate)) {

      getArrRateAndArrDateCurrencyInRange(favoriteChartStore.favoriteSelectedCurrency.ID, favoriteChartStore.favoriteFromDate, favoriteChartStore.favoriteEndDate)
        .then(response => {
          this.props.setFavoriteBaseRangeToStore(response);
        });
    }
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
      let rateCurrencyFrom = generalStore.selectedCurrency.Rate;
      let rateCurrencyTo = generalStore.baseCurrency[converterStore.idDropListCurrency].Rate;
      let scaleCurrencyFrom = generalStore.selectedCurrency.Scale;
      let scaleCurrencyTo = generalStore.baseCurrency[converterStore.idDropListCurrency].Scale;
      let valueInputTo = (+converterStore.valueInputFromCurrency / scaleCurrencyFrom * rateCurrencyFrom / rateCurrencyTo * scaleCurrencyTo).toFixed(4);
      return valueInputTo;
    }
    else return 1;
  }

  render() {

    return (
      <div className="content">

        <Route exact path={["/", "/currensies"]} render={() => (
          <>
            <Button
              onClickButton={this.onClickAddFavoriteCurrency}
            />
            <Chart
              flagDatePickersIsShow={true}
            />
          </>
        )} />

        <Route exact path="/calculator" render={() => (
          <>
            <Converter
              valueInputTo={this.convertCurrency()}
            />
            <Chart />
          </>
        )} />

        <Route exact path="/about" render={() => (
          <AboutPage />
        )} />

        <Route exact path="/favorite" render={() => (
          <>
            <Tablist
              onClickDelTab={this.onClickDelFavoriteCurrency}
              onClickTab={this.onClickFavoriteSelectCurrencyTab}
            />
            <div className="chart-favorite-wrapper">
              <Chart
                flagDescriptionIsShow={true}
                flagDatePickersIsShow={true}
              />
            </div>
          </>
        )} />

      </div>
    )
  }
}

export default Content;