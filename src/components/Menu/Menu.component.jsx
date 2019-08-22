import React, { Component } from "react";
import { Link } from 'react-router-dom'

import './Menu.styles.css';

class Menu extends Component {

  render() {
    return (
      <div className={this.props.style == "center" ? "menu menu_position-center" : "menu"}>
        <ul>
          <li><Link to="/currensies">Currensies</Link></li>
          <li><Link to="/calculator">Calculator</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/favorite">Favorite</Link><span className="number-Favorite">  +{this.props.numberFavorite}</span></li>
        </ul>
      </div>
    );
  }
}

export default Menu;