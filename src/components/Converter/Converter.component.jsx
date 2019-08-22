import React, { Component } from "react";

import './Converter.styles.css';

import Droplist from "../Droplist";

class Converter extends Component {

  // state = {
  //   fromInputValue: 1, //valueInputFromCurrency
  //   toInputValue: 1,   //valueInputToCurrency
  //   toCurrencyIdList: 0 //idDropListCurrency
  // }


  componentDidUpdate(prevProps, PrevState) {
    // if (prevProps.selectedCurrencyID !== this.props.selectedCurrencyID) {
    //   this.convertCurrency(undefined, undefined);
    // }



    // if (this.props.SelectedCurrency.ID && !prevProps.SelectedCurrency.ID) {
    //   this.convertCurrency(undefined, undefined);
    // };
    // if (this.props.SelectedCurrency.ID && prevProps.SelectedCurrency.ID) {
    //   if (prevProps.SelectedCurrency.ID !== this.props.SelectedCurrency.ID) {
    //     this.convertCurrency(undefined, undefined);
    //   };
    // }
  }

  onChangeFromInputValue = (e) => {
    this.convertCurrency(e.target.value, undefined);
  }

  onChangeDroplist = (e) => {
    this.props.setIdDropListCurrencyToStore(e.target.selectedIndex);
    // this.setState({ toCurrencyIdList: e.target.selectedIndex });
    this.convertCurrency(undefined, e.target.selectedIndex);
  }

  // convertCurrency = (fromInputValue = this.state.fromInputValue, currencyIdList = this.state.toCurrencyIdList) => {
  //   let fromCurrencyRate = this.props.selectedCurrencyRate;
  //   let toCurrencyRate = this.props.baseCurrency[currencyIdList].Rate;
  //   let fromCurrencyScale = this.props.selectedCurrencyScale;
  //   let toCurrencyScale = this.props.baseCurrency[currencyIdList].Scale;
  //   let toInputValue = (+fromInputValue / fromCurrencyScale * fromCurrencyRate / toCurrencyRate * toCurrencyScale).toFixed(4);
  //   this.setState({ toInputValue: toInputValue, fromInputValue: fromInputValue });
  // }

  convertCurrency = (valueInputFrom = this.props.converterStore.valueInputFromCurrency, idDropListCurrency = this.props.converterStore.idDropListCurrency) => {
    const { sidebarStore, setValueInputFromCurrencyToStore, setValueInputToCurrencyToStore } = this.props;

    let rateCurrencyFrom = sidebarStore.selectedCurrency.Rate ? sidebarStore.selectedCurrency.Rate :
      sidebarStore.baseCurrency[0] ? sidebarStore.baseCurrency[0].Rate : "";
    let rateCurrencyTo = sidebarStore.baseCurrency[idDropListCurrency].Rate;
    let scaleCurrencyFrom = sidebarStore.selectedCurrency.Scale ? sidebarStore.selectedCurrency.Scale :
      sidebarStore.baseCurrency[0] ? sidebarStore.baseCurrency[0].Scale : "";
    let scaleCurrencyTo = sidebarStore.baseCurrency[idDropListCurrency].Scale;

    let valueInputTo = (+valueInputFrom / scaleCurrencyFrom * rateCurrencyFrom / rateCurrencyTo * scaleCurrencyTo).toFixed(4);
    
    // this.setState({ toInputValue: toInputValue, fromInputValue: fromInputValue });
    setValueInputFromCurrencyToStore(valueInputFrom); //попробуй объединить
    setValueInputToCurrencyToStore(valueInputTo);
  }

  render() {
    const { sidebarStore, converterStore } = this.props;

    let selectedCurrencyAbbr = sidebarStore.selectedCurrency.Abbr ? sidebarStore.selectedCurrency.Abbr :
      sidebarStore.baseCurrency[0] ? sidebarStore.baseCurrency[0].Abbr : "";

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
          <input className="converter__input" value={converterStore.valueInputToCurrency} readOnly />
          <div className="converter__text converter__text_select">
            <Droplist
            baseCurrency={sidebarStore.baseCurrency}
            onChangeDroplist={this.onChangeDroplist}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Converter;