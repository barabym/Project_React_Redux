import React, { Component } from "react";

import './Item.styles.css';

class Item extends Component {

  render() {
    return (
      <>
        <div className={this.props.FlagSelectedItem ? "item-box item-box_selected" : "item-box"}>
          {this.props.item.Abbr}
        </div>
        <div className={this.props.FlagSelectedItem ? "item-box item-box_selected" : "item-box"}>
          {this.props.item.Scale + this.props.item.SymbolCur}
        </div>
        <div className={this.props.FlagSelectedItem ? "item-box item-box_selected" : "item-box"}>
          {this.props.item.Rate}
        </div>
        <div className={this.props.item.Diff == 0 ? "item-box item-box_diff-neutral" :
          this.props.item.Diff > 0 ? "item-box item-box_diff-positive" : "item-box item-box_diff-negative"}>
          {this.props.item.Diff > 0 ? "+" + this.props.item.Diff : this.props.item.Diff}
        </div>
      </>
    );
  }
}

export default Item;