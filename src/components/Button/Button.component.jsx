/* eslint-disable react/prop-types */
import React from 'react';

import './Button.styles.css';

function Button(props) {
  const { onClickButton } = props;
  return (
    <div className="button__wrapper">
      <button type="button" className="button" onClick={onClickButton}>❤ To favorite</button>
    </div>
  );
}

export default Button;
