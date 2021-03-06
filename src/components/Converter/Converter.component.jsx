import React, { Component } from "react";

import './Converter.styles.css';

import Droplist from "../Droplist";

class Converter extends Component {

  onChangeFromInputValue = (e) => {
    this.props.setValueInputFromCurrencyToStore(e.target.value);
  }

  render() {
    const { generalStore, converterStore } = this.props;
    return (
      <div className="converter">
        <div className="converter__warrper-for-string">
          <div className="converter__text">Value</div>
          <input className="converter__input" type="number" value={converterStore.valueInputFromCurrency} onChange={this.onChangeFromInputValue} />
          <div className="converter__text">{generalStore.selectedCurrency.Abbr || ""}
          </div>
        </div>
        <div className="converter__warrper-for-string">
          <div className="converter__text">Destination</div>
          <input className="converter__input" value={this.props.valueInputTo} readOnly />
          <div className="converter__text converter__text_select">
            <Droplist />
          </div>
        </div>
      </div>
    )
  }
}

export default Converter;