import React, { Component } from "react";

import './Tablist.styles.css';

class Tablist extends Component {

  render() {
    
    return (
      <div className="tablist">
        {this.props.listFavorite.map((item) => {
          return (
            <div key={item} className={item==this.props.selectedCurrencyAbbr ? "tab tab_selected" :
            "tab"} onClick={() => { this.props.onClickTab(item) }}>
              <span>{item}</span>
              <button className="tab__button-del-tab" onClick={(e) => { this.props.onClickDelTab(e, item) }}>X</button>
            </div>
          )
        })}
      </div>)
  }
}

export default Tablist;