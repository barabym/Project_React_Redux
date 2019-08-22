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
    // let selectedCurrencyAbbr = this.props.selectedCurrency.Abbr ? this.props.selectedCurrency.Abbr :
    //   this.props.baseCurrency[0] ? this.props.baseCurrency[0].Abbr : "";
    // let selectedCurrencyScale = this.props.selectedCurrency.Scale ? this.props.selectedCurrency.Scale :
    //   this.props.baseCurrency[0] ? this.props.baseCurrency[0].Scale : "";
    // let selectedCurrencyRate = this.props.selectedCurrency.Rate ? this.props.selectedCurrency.Rate :
    //   this.props.baseCurrency[0] ? this.props.baseCurrency[0].Rate : "";

    return (
      <div className="content">
        {/* <p className="content_big-text">Select any currency</p> */}

        <Route exact path={["/", "/currensies"]} render={() => (
          <Button />
        )} />

        <Route exact path="/calculator" render={() => (
          <Converter
            // baseCurrency={this.props.baseCurrency}
            // selectedCurrencyID={selectedCurrencyID}
            // selectedCurrencyAbbr={selectedCurrencyAbbr}
            // selectedCurrencyScale={selectedCurrencyScale}
            // selectedCurrencyRate={selectedCurrencyRate}
          />
        )} />

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