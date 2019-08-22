import React from "react";

import './Button.styles.css';

function Button() {

  return (
    <div className="button__wrapper">
      <button className="button" onClick={this.props.onClickButton}>❤ To favorite</button>
    </div>
  );
}

export default Button;