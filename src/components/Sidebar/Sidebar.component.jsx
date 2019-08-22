import React, { Component } from "react";

import './Sidebar.styles.css';

import Search from "../Search";
import ItemList from "../ItemList";

import { getBaseCurrency } from "../../service/getBaseCurrency.js";

class Sidebar extends Component {

  componentDidMount() {
    getBaseCurrency().then(response => {
      if (!this.props.sidebarStore.baseCurrency[0]) this.props.setBaseCurrencyToStore(response);
      if (!this.props.sidebarStore.selectedCurrency.ID) this.props.setSelectedCurrencyToStore(response[0]);
    });
  }

  onClickSearchButton = (searchWord) => {
    this.props.setFilterWordToStore(searchWord);
  }

  onClickSelectCurrencyItem = (selectedCurrency) => {
    this.props.setSelectedCurrencyToStore(selectedCurrency)
  }

  render() {
    const { sidebarStore } = this.props;
    return (
      <div className="sidebar">
        <Search
          onClickSearchButton={this.onClickSearchButton}
        />
        <ItemList
          baseItem={sidebarStore.baseCurrency}
          filterWord={sidebarStore.filterWord}
          idSelectedCurrency={sidebarStore.selectedCurrency.ID}
          onClickSelectCurrencyItem={this.onClickSelectCurrencyItem}
        />
      </div>
    )
  }
}

export default Sidebar;