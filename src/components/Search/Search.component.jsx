import React, { Component } from "react";

import './Search.styles.css';

function Search__input(props) {
  return (
    <input type="search" className="search__input" onChange={props.onChangeSearchInput} placeholder=" Search currency..."></input>
  );
}

function Search__button(props) {
  return (
    <button className="search__button" onClick={props.onClickSearchButton}>Search</button>
  );
}

class Search extends Component {

  state = {
    searchWord: "",
  }

  onClickSearchButton = () => {
    this.props.setfilterWordToStore(this.state.searchWord);
  }

  onChangeSearchInput = (e) => {
    this.setState({ searchWord: e.target.value });
    if (!e.target.value) { this.props.setfilterWordToStore("") }
  }

  render() {
    return (
      <div className="search">
        <Search__input
          onChangeSearchInput={this.onChangeSearchInput}
        />
        <Search__button
          onClickSearchButton={this.onClickSearchButton}
        />
      </div>
    )
  }
}

export default Search;