/* eslint-disable react/jsx-max-props-per-line */
/* eslint-disable react/jsx-first-prop-new-line */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './Content.styles.css';

import Converter from '../Converter';
import Chart from '../Chart';
import Button from '../Button';
import AboutPage from '../AboutPage';
import Tablist from '../Tablist';

import { getBaseAfterFilter } from '../../service/getBaseAfterFilter';

class Content extends Component {
  componentWillMount() {
    if (!JSON.parse(localStorage.getItem('listFavorite'))) localStorage.setItem('listFavorite', JSON.stringify([]));
  }

  componentDidMount() {
    const { generalStore, setBaseCurrencyToStore, setListFavoriteToStore } = this.props;
    setListFavoriteToStore(JSON.parse(localStorage.getItem('listFavorite')));

    if (!generalStore.baseCurrency[0]) {
      setBaseCurrencyToStore();
    }
  }

  componentDidUpdate(prevProps) {
    const {
      generalStore, chartStore, favoriteChartStore, setBaseRangeToStore,
      setFavoriteSelectedCurrencyToStore, setFavoriteBaseRangeToStore,
    } = this.props;

    if (generalStore.baseCurrency.length && generalStore.listFavorite.length
      && !favoriteChartStore.favoriteSelectedCurrency.Abbr) {
      const selectedCurrency = getBaseAfterFilter(generalStore.baseCurrency,
        generalStore.listFavorite[0]);
      setFavoriteSelectedCurrencyToStore(selectedCurrency[0]);
    }

    if (prevProps.generalStore.selectedCurrency.ID !== generalStore.selectedCurrency.ID
      || prevProps.chartStore.fromDate !== chartStore.fromDate
      || prevProps.chartStore.endDate !== chartStore.endDate) {
      setBaseRangeToStore(generalStore.selectedCurrency.ID,
        chartStore.fromDate, chartStore.endDate);
    }

    if (favoriteChartStore.favoriteSelectedCurrency.ID
      && (prevProps.favoriteChartStore.favoriteSelectedCurrency.ID
        !== favoriteChartStore.favoriteSelectedCurrency.ID
        || prevProps.favoriteChartStore.favoriteFromDate !== favoriteChartStore.favoriteFromDate
        || prevProps.favoriteChartStore.favoriteEndDate !== favoriteChartStore.favoriteEndDate)) {
      setFavoriteBaseRangeToStore(favoriteChartStore.favoriteSelectedCurrency.ID,
        favoriteChartStore.favoriteFromDate, favoriteChartStore.favoriteEndDate);
    }
  }

  onClickAddFavoriteCurrency = () => {
    const { generalStore, setListFavoriteToStore } = this.props;
    const abbr = generalStore.selectedCurrency.Abbr;
    const listFavoriteCurrency = generalStore.listFavorite;

    if (listFavoriteCurrency.indexOf(abbr) < 0) {
      const newListFavorite = listFavoriteCurrency.concat(abbr);
      setListFavoriteToStore(newListFavorite);
      localStorage.setItem('listFavorite', JSON.stringify(newListFavorite));
    }
  }

  onClickDelFavoriteCurrency = (e, abbr) => {
    e.stopPropagation();

    const {
      generalStore, favoriteChartStore, setListFavoriteToStore,
      setFavoriteSelectedCurrencyToStore, setFavoriteBaseRangeToStore,
    } = this.props;

    const listFavoriteCurrency = generalStore.listFavorite;
    listFavoriteCurrency.splice(listFavoriteCurrency.indexOf(abbr), 1);
    setListFavoriteToStore(listFavoriteCurrency);
    localStorage.setItem('listFavorite', JSON.stringify(listFavoriteCurrency));

    if (abbr === favoriteChartStore.favoriteSelectedCurrency.Abbr) {
      setFavoriteSelectedCurrencyToStore({});
    }

    if (!listFavoriteCurrency.length) {
      setFavoriteBaseRangeToStore([[], []]);
    }
  }

  onClickFavoriteSelectCurrencyTab = selectedCurrencyAbbr => {
    const { generalStore, setFavoriteSelectedCurrencyToStore } = this.props;
    const selectedCurrency = getBaseAfterFilter(generalStore.baseCurrency, selectedCurrencyAbbr);
    setFavoriteSelectedCurrencyToStore(selectedCurrency[0]);
  }

  convertCurrency = () => {
    const { generalStore, converterStore } = this.props;
    if (generalStore.selectedCurrency.Rate) {
      const rateCurrencyFrom = generalStore.selectedCurrency.Rate;
      const rateCurrencyTo = generalStore.baseCurrency[converterStore.idDropListCurrency].Rate;
      const scaleCurrencyFrom = generalStore.selectedCurrency.Scale;
      const scaleCurrencyTo = generalStore.baseCurrency[converterStore.idDropListCurrency].Scale;
      const valueInputTo = (+converterStore.valueInputFromCurrency
        * (scaleCurrencyTo / scaleCurrencyFrom) * (rateCurrencyFrom / rateCurrencyTo)).toFixed(4);
      return valueInputTo;
    }
    return 1;
  }

  render() {
    return (
      <div className="content">

        <Route exact path={['/', '/currensies']} render={() => (
          <>
            <Button
              onClickButton={this.onClickAddFavoriteCurrency}
            />
            <Chart
              flagDatePickersIsShow
            />
          </>
        )}
        />

        <Route exact path="/calculator" render={() => (
          <>
            <Converter
              valueInputTo={this.convertCurrency()}
            />
            <Chart />
          </>
        )}
        />

        <Route exact path="/about" render={() => (
          <AboutPage />
        )}
        />

        <Route exact path="/favorite" render={() => (
          <>
            <Tablist
              onClickDelTab={this.onClickDelFavoriteCurrency}
              onClickTab={this.onClickFavoriteSelectCurrencyTab}
            />
            <div className="chart-favorite-wrapper">
              <Chart
                flagDescriptionIsShow
                flagDatePickersIsShow
              />
            </div>
          </>
        )}
        />
      </div>
    );
  }
}

export default Content;
