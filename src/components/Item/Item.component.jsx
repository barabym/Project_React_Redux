import React from 'react';

import './Item.styles.css';

function Item(props) {
  const { flagSelectedItem, item } = props;
  let style = 'item-box_diff-neutral';
  if (item.Diff > 0) style = 'item-box_diff-positive';
  if (item.Diff < 0) style = 'item-box_diff-negative';
  return (
    <>
      <div className={flagSelectedItem ? 'item-box item-box_selected' : 'item-box'}>
        {item.Abbr}
      </div>
      <div className={flagSelectedItem ? 'item-box item-box_selected' : 'item-box'}>
        {item.Scale + item.SymbolCur}
      </div>
      <div className={flagSelectedItem ? 'item-box item-box_selected' : 'item-box'}>
        {item.Rate}
      </div>
      <div className={`item-box ${style}`}>
        {item.Diff > 0 ? `+${item.Diff}` : item.Diff}
      </div>
    </>
  );
}

export default Item;
