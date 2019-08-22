import React, { Component } from "react";

import './Button.styles.css';

class Button extends Component {
  render() {
    return (
      <div className="button__wrapper">
        <button className="button" onClick={this.props.onClickButton}>❤ To favorite</button>
      </div>
    );
  }
}

export default Button;