import React, { Component } from "react";

import './Converter.styles.css';

import Droplist from "../Droplist";

class Converter extends Component {

  onChangeFromInputValue = (e) => {
    this.props.setValueInputFromCurrencyToStore(e.target.value);
  }

  onChangeDroplist = (e) => {
    this.props.setIdDropListCurrencyToStore(e.target.selectedIndex);
  }

  convertCurrency = () => {

    const { sidebarStore, converterStore } = this.props;
    if (sidebarStore.selectedCurrency.Rate) {
      let rateCurrencyFrom = sidebarStore.selectedCurrency.Rate ? sidebarStore.selectedCurrency.Rate : "";
      let rateCurrencyTo = sidebarStore.baseCurrency[converterStore.idDropListCurrency].Rate;
      let scaleCurrencyFrom = sidebarStore.selectedCurrency.Scale ? sidebarStore.selectedCurrency.Scale : "";
      let scaleCurrencyTo = sidebarStore.baseCurrency[converterStore.idDropListCurrency].Scale;
      let valueInputTo = (+converterStore.valueInputFromCurrency / scaleCurrencyFrom * rateCurrencyFrom / rateCurrencyTo * scaleCurrencyTo).toFixed(4);
      return valueInputTo;
    }
    else return 1;
  }

  render() {
    const { sidebarStore, converterStore } = this.props;

    let selectedCurrencyAbbr = sidebarStore.selectedCurrency.Abbr ? sidebarStore.selectedCurrency.Abbr :
      sidebarStore.baseCurrency[0] ? sidebarStore.baseCurrency[0].Abbr : "";
    let dropListAbbr = sidebarStore.baseCurrency[0] ? sidebarStore.baseCurrency[converterStore.idDropListCurrency].Abbr : "";

    return (
      <div className="converter">
        <div className="converter__warrper-for-string">
          <div className="converter__text">Value</div>
          <input className="converter__input" type="number" value={converterStore.valueInputFromCurrency} onChange={this.onChangeFromInputValue} />
          <div className="converter__text">{selectedCurrencyAbbr}
          </div>
        </div>
        <div className="converter__warrper-for-string">
          <div className="converter__text">Destination</div>
          <input className="converter__input" value={this.convertCurrency()} readOnly />
          <div className="converter__text converter__text_select">
            <Droplist
              baseCurrency={sidebarStore.baseCurrency}
              onChangeDroplist={this.onChangeDroplist}
              dropListAbbr={dropListAbbr}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Converter;