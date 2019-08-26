import React from 'react';

import './Tablist.styles.css';

function Tablist(props) {
  const { generalStore, favoriteChartStore } = props;
  const selectedCurrencyAbbr = favoriteChartStore.favoriteSelectedCurrency.Abbr || '';

  return (
    <div className="tablist">
      {generalStore.listFavorite.map(item => (
        <div
          key={item}
          className={item === selectedCurrencyAbbr ? 'tab tab_selected' : 'tab'}
          onClick={() => { props.onClickTab(item); }}
        >
          <span>
            {item}
          </span>
          <button
            type="button"
            className="tab__button-del-tab"
            onClick={event => { props.onClickDelTab(event, item); }}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
}

export default Tablist;
