import React, { Component } from "react";

import './Tablist.styles.css';

// function Tab(props) {
//   return (
//     <div className="tab" onClick={() => { props.onClickTab(props.tabName) }}>
//       <span>{props.tabName}</span>
//       <button className="button-del-tab" onClick={() => { props.onClickDelTab(props.tabName) }}>X</button>
//     </div>
//   );
// }

class Tablist extends Component {

  render() {
    // console.log(this.props.selectedCurrencyAbbr);
    
    // let aaa = ["AAA", "SSS", "DDD", "FFF", "GGG", "HHH", "JJJ", "KKK", "LLL", "ZZZ", "XXX", "CCC", "VVV", "BBB", "NNN", "MMM"];
    return (
      <div className="tablist">
        {this.props.listFavorite.map((item) => {
          return (
            <div key={item} className={item==this.props.selectedCurrencyAbbr ? "tab tab_selected" :
            "tab"} onClick={() => { this.props.onClickTab(item) }}>
              <span>{item}</span>
              <button className="tab__button-del-tab" onClick={(e) => { this.props.onClickDelTab(e, item) }}>X</button>
            </div>
          )
        })}
      </div>)
  }
}

export default Tablist;