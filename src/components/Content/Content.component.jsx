import React, { Component } from "react";
import { Route } from 'react-router-dom';

import './Content.styles.css';

import Converter from "../Converter";
import Chart from "../Chart";
import Button from "../Button";

class Content extends Component {

  render() {
    // let selectedCurrencyID = this.props.selectedCurrency.ID ? this.props.selectedCurrency.ID :
    //   this.props.baseCurrency[0] ? this.props.baseCurrency[0].ID : undefined;
    return (
      <div className="content">
        <Route exact path={["/", "/currensies"]} render={() => (<Button />)} />
        <Route exact path="/calculator" render={() => (<Converter />)} />
        <Route exact path={["/", "/currensies", "/calculator"]} render={() => (
          <Chart
          // selectedCurrencyID={selectedCurrencyID}
          />
        )} />
      </div>
    );
  }
}

export default Content;