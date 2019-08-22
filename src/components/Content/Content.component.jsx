import React, { Component } from "react";
import { Route } from 'react-router-dom';

import './Content.styles.css';

import Converter from "../Converter";
import Chart from "../Chart";
import Button from "../Button";

class Content extends Component {

  render() {
    return (
      <div className="content">
        <Route exact path={["/", "/currensies"]} render={() => (<Button />)} />
        <Route exact path="/calculator" render={() => (<Converter />)} />
        <Route exact path={["/", "/currensies", "/calculator"]} render={() => (<Chart />)} />
      </div>
    );
  }
}

export default Content;