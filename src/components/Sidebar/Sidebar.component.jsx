import React, { Component } from "react";

import './Sidebar.styles.css';

import Search from "../Search";
import ItemList from "../ItemList";

class Sidebar extends Component {
  // state = {
  //   filterWord: "",
  // }

  // onClickSearchButton = (searchWord) => {
  //   this.setState({ filterWord: searchWord });
  // }

  render() {
    console.log(this.props.appStore);
    // console.log("filterword" + this.state.filterWord+"0");
    return (
      <div className="sidebar">
        <Search
          // onClickSearchButton={this.onClickSearchButton}
        />
        <ItemList
          // baseItem={this.props.appStore}
          // filterWord={this.state.filterWord}
          // idSelectedCurrency={this.props.idSelectedCurrency}
          // onClickSelectCurrency={this.props.onClickSelectCurrency}
        />
      </div>
    )
  }
}

export default Sidebar;