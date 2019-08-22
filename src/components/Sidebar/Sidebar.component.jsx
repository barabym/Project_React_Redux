import React, { Component } from "react";

import './Sidebar.styles.css';

import Search from "../Search";
import ItemList from "../ItemList";

import { getBaseCurrency } from "../../service/getBaseCurrency.js";

class Sidebar extends Component {
  state = {
    filterWord: "",
  }

  componentDidMount() {
    getBaseCurrency().then(response => {
      if (!this.props.generalStore.baseCurrency[0]) this.props.setBaseCurrencyToStore(response);
      if (!this.props.generalStore.selectedCurrency.ID) this.props.setSelectedCurrencyToStore(response[0]);
    });
  }

  onClickSearchButton = (filterWord) => {
    this.setState({ filterWord: filterWord });
  }

  onClickSelectCurrencyItem = (selectedCurrency) => {
    this.props.setSelectedCurrencyToStore(selectedCurrency)
  }

  render() {
    const { generalStore } = this.props;
    return (
      <div className="sidebar">
        <Search
          onClickSearchButton={this.onClickSearchButton}
        />
        <ItemList
          baseItem={generalStore.baseCurrency}
          filterWord={this.state.filterWord}
          idSelectedCurrency={generalStore.selectedCurrency.ID}
          onClickSelectCurrencyItem={this.onClickSelectCurrencyItem}
        />
      </div>
    )
  }
}

export default Sidebar;