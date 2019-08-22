import React from "react";

import './Button.styles.css';

function Button(props) {

  return (
    <div className="button__wrapper">
      <button className="button" onClick={props.onClickButton}>❤ To favorite</button>
    </div>
  );
}

export default Button;