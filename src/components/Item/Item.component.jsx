import React from "react";

import './Item.styles.css';

function Item(props) {

  return (
    <>
      <div className={props.flagSelectedItem ? "item-box item-box_selected" : "item-box"}>
        {props.item.Abbr}
      </div>
      <div className={props.flagSelectedItem ? "item-box item-box_selected" : "item-box"}>
        {props.item.Scale + props.item.SymbolCur}
      </div>
      <div className={props.flagSelectedItem ? "item-box item-box_selected" : "item-box"}>
        {props.item.Rate}
      </div>
      <div className={props.item.Diff == 0 ? "item-box item-box_diff-neutral" :
        props.item.Diff > 0 ? "item-box item-box_diff-positive" : "item-box item-box_diff-negative"}>
        {props.item.Diff > 0 ? "+" + props.item.Diff : props.item.Diff}
      </div>
    </>
  );
}

export default Item;