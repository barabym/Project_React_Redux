import React, { Component } from "react";
import { Route } from 'react-router-dom';

import './Content.styles.css';

import Menu from "../Menu";
import Converter from "../Converter";
import Chart from "../Chart";
import Button from "../Button";
import AboutPage from "../AboutPage";
import FavoritePage from "../FavoritePage";

class Content extends Component {

  onChangeFromInputValue = (value) => {
    this.props.setValueInputFromCurrencyToStore(value);
  }

  onChangeDroplist = (value) => {
    this.props.setIdDropListCurrencyToStore(value);
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
              style={"menu"}
            />
            <div className="content">
              <Button />
              <Chart />
            </div>
          </>
        )} />

        <Route exact path="/calculator" render={() => (
          <>
            <Menu
              style={"menu"}
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
              style={"menu menu_position-center"}
            />
            <div className="content">
              <AboutPage />
            </div>
          </>
        )} />

        <Route exact path="/favorite" render={() => (
          <>
            <Menu
              style={"menu menu_position-center"}
            />
            <div className="content">
              <FavoritePage />
            </div>
          </>
        )} />
      </>
    );
  }
}

export default Content;