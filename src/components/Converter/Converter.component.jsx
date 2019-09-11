import React, { Component } from 'react';

import './Converter.styles.css';

import Droplist from '../Droplist';

class Converter extends Component {
  onChangeFromInputValue = event => {
    const { setValueInputFromCurrencyToStore } = this.props;
    setValueInputFromCurrencyToStore(event.target.value);
  }

  render() {
    const { generalStore, converterStore, valueInputTo } = this.props;
    return (
      <div className="converter">
        <div className="converter__wrapper-for-string">
          <div className="converter__text">
            Value
          </div>
          <input
            className="converter__input"
            type="number"
            value={converterStore.valueInputFromCurrency}
            onChange={this.onChangeFromInputValue}
          />
          <div className="converter__text">
            {generalStore.selectedCurrency.Abbr || ''}
          </div>
        </div>
        <div className="converter__wrapper-for-string">
          <div className="converter__text">
            Destination
          </div>
          <input
            className="converter__input"
            value={valueInputTo}
            readOnly
          />
          <div className="converter__text converter__text_select">
            <Droplist />
          </div>
        </div>
      </div>
    );
  }
}

export default Converter;
