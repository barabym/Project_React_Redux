import React, { Component } from "react";

import './ItemList.styles.css';

import Item from "../Item";

import { getBaseAfterFilter } from "../../service/getBaseAfterFilter.js";

class ItemList extends Component {

  onClickItem(item) {
    this.props.onClickSelectCurrencyItem(item);
  }

  render() {
    let baseItem = getBaseAfterFilter(this.props.baseItem, this.props.filterWord);
    return (
      <div className="item-list">
        <div className="item-list__header">
          <div className="item-list__header-box">Abbr</div>
          <div className="item-list__header-box">Scale</div>
          <div className="item-list__header-box">Rate</div>
          <div className="item-list__header-box">Diff</div>
        </div>
        <ul className="item-list__body">
          {baseItem.map((item) => {
            let flagSelectedItem = (item.ID == this.props.idSelectedCurrency);
            return <li key={item.ID} className={flagSelectedItem ? "item-list__item item-list__item_selected" :
              "item-list__item"} onClick={() => this.onClickItem(item)}>
              <Item
                item={item}
                flagSelectedItem={flagSelectedItem}
              />
            </li>
          })}
        </ul>
      </div>
    );
  }
}

export default ItemList;