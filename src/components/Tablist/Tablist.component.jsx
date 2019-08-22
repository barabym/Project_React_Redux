import React, { Component } from "react";

import './Tablist.styles.css';

function Tab(props) {
  return (
    <div className="tab">
      <span>{props.tabName}</span>
      <button className="button-del-tab" onClick={()=>{props.onClick(props.tabName)}}>X</button>
    </div>
  );
}

class Tablist extends Component {

  render() {
    // let aaa = ["AAA", "SSS", "DDD", "FFF", "GGG", "HHH", "JJJ", "KKK", "LLL", "ZZZ", "XXX", "CCC", "VVV", "BBB", "NNN", "MMM"];
    return (
      <div className="tablist">
        {this.props.listFavorite.map((item) => {
          return (
            <Tab
              key={item}
              tabName={item}
              onClick={this.props.onClickDelTab}
            />)
        })}
      </div>
    );
  }
}

export default Tablist;