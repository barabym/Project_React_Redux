import React from 'react';
import { Link } from 'react-router-dom';

import './Menu.styles.css';

function Menu(props) {
  const { amountFavorite } = props;
  return (
    <div className="menu">
      <ul>
        <li>
          <Link to="/currensies">
            Currensies
          </Link>
        </li>
        <li>
          <Link to="/calculator">
            Calculator
          </Link>
        </li>
        <li>
          <Link to="/about">
            About
          </Link>
        </li>
        <li>
          <Link to="/favorite">
            Favorite
          </Link>
          <span className="number-Favorite">
            {' '}
            +
            {amountFavorite}
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
