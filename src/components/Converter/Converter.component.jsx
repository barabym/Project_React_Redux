import React, { Component } from "react";

import './Converter.styles.css';

import Droplist from "../Droplist";

class Converter extends Component {

  onChangeFromInputValue = (e) => {
    this.props.onChangeFromInputValue(e.target.value);
  }

  onChangeDroplist = (e) => {
    this.props.onChangeDroplist(e.target.selectedIndex);
  }

  render() {
    return (
      <div className="converter">
        <div className="converter__warrper-for-string">
          <div className="converter__text">Value</div>
          <input className="converter__input" type="number" value={this.props.valueInputFrom} onChange={this.onChangeFromInputValue} />
          <div className="converter__text">{this.props.selectedCurrencyAbbr}
          </div>
        </div>
        <div className="converter__warrper-for-string">
          <div className="converter__text">Destination</div>
          <input className="converter__input" value={this.props.valueInputTo} readOnly />
          <div className="converter__text converter__text_select">
            <Droplist
              baseCurrency={this.props.baseCurrency}
              onChangeDroplist={this.onChangeDroplist}
              dropListAbbr={this.props.dropListAbbr}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Converter;