import React, { Component } from "react";

import './Droplist.styles.css';

class Droplist extends Component {

  render() {
    return (
      <select className="droplist" value={this.props.dropListAbbr} onChange={this.props.onChangeDroplist}>
        {this.props.baseCurrency.map((currency) => {
          return <option className="droplist__option"
            key={currency.Abbr} value={currency.Abbr}>{currency.Abbr}
          </option>
        })}
      </select>
    )
  }
}

export default Droplist;