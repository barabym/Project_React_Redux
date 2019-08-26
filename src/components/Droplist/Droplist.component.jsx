import React, { Component } from 'react';

import './Droplist.styles.css';

class Droplist extends Component {
  onChangeDroplist = event => {
    const { setIdDropListCurrencyToStore } = this.props;
    setIdDropListCurrencyToStore(event.target.selectedIndex);
  }

  render() {
    const { generalStore, converterStore } = this.props;
    return (
      <select
        className="droplist"
        value={generalStore.baseCurrency[0] ? generalStore.baseCurrency[converterStore.idDropListCurrency].Abbr : ''}
        onChange={this.onChangeDroplist}
      >
        {generalStore.baseCurrency.map(currency => (
          <option
            className="droplist__option"
            key={currency.Abbr}
            value={currency.Abbr}
          >
            {currency.Abbr}
          </option>
        ))}
      </select>
    );
  }
}

export default Droplist;
