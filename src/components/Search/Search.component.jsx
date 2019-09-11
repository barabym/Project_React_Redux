import React, { Component } from 'react';

import './Search.styles.css';

function SearchInput(props) {
  const { onChangeSearchInput } = props;
  return (
    <input
      type="search"
      className="search__input"
      onChange={onChangeSearchInput}
      placeholder=" Search currency..."
    />
  );
}

function SearchButton(props) {
  const { onClickSearchButton } = props;
  return (
    <button
      type="button"
      className="search__button"
      onClick={onClickSearchButton}
    >
      Search
    </button>
  );
}

class Search extends Component {
  state = {
    searchWord: '',
  }

  onClickSearchButton = () => {
    const { setFilterWordToStore } = this.props;
    const { searchWord } = this.state;
    setFilterWordToStore(searchWord);
  }

  onChangeSearchInput = event => {
    const { setFilterWordToStore } = this.props;
    this.setState({ searchWord: event.target.value });
    if (!event.target.value) { setFilterWordToStore(''); }
  }

  render() {
    return (
      <div className="search">
        <SearchInput
          onChangeSearchInput={this.onChangeSearchInput}
        />
        <SearchButton
          onClickSearchButton={this.onClickSearchButton}
        />
      </div>
    );
  }
}

export default Search;
