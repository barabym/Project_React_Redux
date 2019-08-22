import React from "react";

import './Tablist.styles.css';

function Tablist(props) {

  const { generalStore, favoriteChartStore } = props;
  let selectedCurrencyAbbr = favoriteChartStore.favoriteSelectedCurrency.Abbr || "";

  return (
    <div className="tablist">
      {generalStore.listFavorite.map((item) => {
        return (
          <div key={item} className={item == selectedCurrencyAbbr ? "tab tab_selected" :
            "tab"} onClick={() => { props.onClickTab(item) }}>
            <span>{item}</span>
            <button className="tab__button-del-tab" onClick={(e) => { props.onClickDelTab(e, item) }}>X</button>
          </div>
        )
      })}
    </div>)
}

export default Tablist;