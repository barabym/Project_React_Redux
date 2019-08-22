import React, { Component } from "react";

import './Converter.styles.css';

import Droplist from "../Droplist/Droplist.component.jsx";

class Converter extends Component {

  state = {
    FromInputValue: 1,
    ToInputValue: 1,
    ToCurrencyIdList: 0
  }


  componentDidUpdate(prevProps, PrevState) {
    if (prevProps.SelectedCurrencyID !== this.props.SelectedCurrencyID) {
      this.convertCurrency(undefined, undefined);
    }

    // if (this.props.SelectedCurrency.ID && !prevProps.SelectedCurrency.ID) {
    //   this.convertCurrency(undefined, undefined);
    // };
    // if (this.props.SelectedCurrency.ID && prevProps.SelectedCurrency.ID) {
    //   if (prevProps.SelectedCurrency.ID !== this.props.SelectedCurrency.ID) {
    //     this.convertCurrency(undefined, undefined);
    //   };
    // }
  }

  render() {
    return (
      <div className="converter">
        <div className="converter__warrper-for-string">
          <div className="converter__text">Value</div>
          <input className="converter__input" type="number" value={this.state.FromInputValue} onChange={this.onChangeFromInputValue} />
          <div className="converter__text">{this.props.SelectedCurrencyAbbr}
          </div>
        </div>
        <div className="converter__warrper-for-string">
          <div className="converter__text">Destination</div>
          <input className="converter__input" value={this.state.ToInputValue} readOnly />
          <div className="converter__text converter__text_select">
            <Droplist
              BaseCurrency={this.props.BaseCurrency}
              onChangeDroplist={this.onChangeDroplist}
            />
          </div>
        </div>
      </div>
    )
  }

  onChangeFromInputValue = (e) => {
    this.convertCurrency(e.target.value, undefined);
  }

  onChangeDroplist = (e) => {
    this.setState({ ToCurrencyIdList: e.target.selectedIndex });
    this.convertCurrency(undefined, e.target.selectedIndex);
  }

  convertCurrency = (FromInputValue = this.state.FromInputValue, CurrencyIdList = this.state.ToCurrencyIdList) => {
    let FromCurrencyRate = this.props.SelectedCurrencyRate;
    let ToCurrencyRate = this.props.BaseCurrency[CurrencyIdList].Rate;
    let FromCurrencyScale = this.props.SelectedCurrencyScale;
    let ToCurrencyScale = this.props.BaseCurrency[CurrencyIdList].Scale;
    let ToInputValue = (+FromInputValue / FromCurrencyScale * FromCurrencyRate / ToCurrencyRate * ToCurrencyScale).toFixed(4);
    this.setState({ ToInputValue: ToInputValue, FromInputValue: FromInputValue });
  }
}

export default Converter;