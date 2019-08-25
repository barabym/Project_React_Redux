/* eslint-disable react/jsx-max-props-per-line */
/* eslint-disable react/jsx-first-prop-new-line */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';

import './ItemList.styles.css';

import Item from '../Item';

import { getBaseAfterFilter } from '../../service/getBaseAfterFilter';

class ItemList extends Component {
  onClickItem(item) {
    const { setSelectedCurrencyToStore } = this.props;
    setSelectedCurrencyToStore(item);
  }

  render() {
    const { generalStore, searchStore } = this.props;
    const baseItem = getBaseAfterFilter(generalStore.baseCurrency, searchStore.filterWord);

    return (
      <div className="item-list">
        <div className="item-list__header">
          <div className="item-list__header-box">Abbr</div>
          <div className="item-list__header-box">Scale</div>
          <div className="item-list__header-box">Rate</div>
          <div className="item-list__header-box">Diff</div>
        </div>

        <ul className="item-list__body">
          {baseItem.map(item => {
            const flagSelectedItem = (item.ID === generalStore.selectedCurrency.ID);
            return (
              <li key={item.ID} className={flagSelectedItem ? 'item-list__item item-list__item_selected'
                : 'item-list__item'} onClick={() => this.onClickItem(item)}
              >
                <Item
                  item={item}
                  flagSelectedItem={flagSelectedItem}
                />
              </li>
            );
          })}
        </ul>

      </div>
    );
  }
}

export default ItemList;
