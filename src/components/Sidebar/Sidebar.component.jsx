import React, { Component } from "react";

import './Sidebar.styles.css';

import Search from "../Search";
import ItemList from "../ItemList";

class Sidebar extends Component {
  
  state = {
    filterWord: "",
  }

  onClickSearchButton = (filterWord) => {
    this.setState({ filterWord: filterWord });
  }

  onClickSelectCurrencyItem = (selectedCurrency) => {
    this.props.setSelectedCurrencyToStore(selectedCurrency)
    // console.log(selectedCurrency);
    
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