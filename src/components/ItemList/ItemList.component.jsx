import React, { Component } from "react";

import './ItemList.styles.css';

import Item from "../Item/Item.component.jsx";

import { getBaseAfterFilter } from "../../service/getBaseAfterFilter.js";

class ItemList extends Component {

  render() {
    let BaseItem = getBaseAfterFilter(this.props.BaseItem, this.props.FilterWord);
    return (
      <div className="item-list">
        <div className="item-list__header">
          <div className="item-list__header-box">Abbr</div>
          <div className="item-list__header-box">Scale</div>
          <div className="item-list__header-box">Rate</div>
          <div className="item-list__header-box">Diff</div>
        </div>
        <ul className="item-list__body">
          {BaseItem.map((item) => {
            let FlagSelectedItem = (item.ID == this.props.IdSelectedCurrency);
            return <li key={item.ID} className={FlagSelectedItem ? "item-list__item item-list__item_selected" :
              "item-list__item"} onClick={() => this.onClickItem(item)}>
              <Item
                item={item}
                FlagSelectedItem={FlagSelectedItem}
              />
            </li>
          })}
        </ul>
      </div>
    );
  }

  onClickItem(item) {
    this.props.onClickSelectCurrency(item);
  }
}

export default ItemList;