import React, { Component } from "react";

import './Sidebar.styles.css';

import Search from "../Search/Search.component.jsx";
import ItemList from "../ItemList/ItemList.component.jsx";

class Sidebar extends Component {
  state = {
    FilterWord: "",
  }

  render() {
    // console.log("filterword" + this.state.FilterWord+"0");
    return (
      <div className="sidebar">
        <Search
          onClickSearchButton={this.onClickSearchButton}
        />
        <ItemList
          BaseItem={this.props.BaseCurrency}
          FilterWord={this.state.FilterWord}
          IdSelectedCurrency={this.props.IdSelectedCurrency}
          onClickSelectCurrency={this.props.onClickSelectCurrency}
        />
      </div>
    );
  }

  onClickSearchButton = (SearchWord) => {
    this.setState({ FilterWord: SearchWord });
  }
}

export default Sidebar;