import React, { Component } from "react";
import { Route } from 'react-router-dom';

import './Content.styles.css';

import Menu from "../Menu";
import Converter from "../Converter";
import Chart from "../Chart";
import Button from "../Button";
import AboutPage from "../AboutPage";
import FavoritePage from "../FavoritePage";
import Tablist from "../Tablist";

class Content extends Component {

  componentDidMount() {
    if (localStorage.getItem('listFavorite')) {
      this.props.setListFavoriteToStore(JSON.parse(localStorage.getItem('listFavorite')))
    };
  }

  onChangeFromInputValue = (value) => {
    this.props.setValueInputFromCurrencyToStore(value);
  }

  onChangeDroplist = (value) => {
    this.props.setIdDropListCurrencyToStore(value);
  }

  onClickAddFavorite = () => {
    let id = this.props.generalStore.selectedCurrency.ID;
    let listFavorite = this.props.generalStore.listFavorite;
    if (listFavorite.indexOf(id) < 0) {
      let newLictFavorite = listFavorite.concat(id);
      this.props.setListFavoriteToStore(newLictFavorite);
      localStorage.setItem('listFavorite', JSON.stringify(newLictFavorite))
    }
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
                onClickAddFavorite={this.onClickAddFavorite}
              />
              <Chart />
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
              <Chart />
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
              <Tablist />
              <Chart />
            </div>

          </>
        )} />
      </>
    );
  }
}

export default Content;