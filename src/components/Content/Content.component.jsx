import React, { Component } from "react";
import { Route } from 'react-router-dom';

import './Content.styles.css';

import Converter from "../Converter/Converter.component.jsx";
import Chart from "../Chart/Chart.component.jsx";
import Button from "../Button/Button.component.jsx";

class Content extends Component {

  render() {
    let SelectedCurrencyID = this.props.SelectedCurrency.ID ? this.props.SelectedCurrency.ID :
      this.props.BaseCurrency[0] ? this.props.BaseCurrency[0].ID : undefined;
    let SelectedCurrencyAbbr = this.props.SelectedCurrency.Abbr ? this.props.SelectedCurrency.Abbr :
      this.props.BaseCurrency[0] ? this.props.BaseCurrency[0].Abbr : "";
    let SelectedCurrencyScale = this.props.SelectedCurrency.Scale ? this.props.SelectedCurrency.Scale :
      this.props.BaseCurrency[0] ? this.props.BaseCurrency[0].Scale : "";
    let SelectedCurrencyRate = this.props.SelectedCurrency.Rate ? this.props.SelectedCurrency.Rate :
      this.props.BaseCurrency[0] ? this.props.BaseCurrency[0].Rate : "";

    return (
      <div className="content">
        {/* <p className="content_big-text">Select any currency</p> */}

        <Route exact path={["/", "/currensies"]} render={() => (
          <Button />
        )} />

        <Route exact path="/calculator" render={() => (
          <Converter
            BaseCurrency={this.props.BaseCurrency}
            SelectedCurrencyID={SelectedCurrencyID}
            SelectedCurrencyAbbr={SelectedCurrencyAbbr}
            SelectedCurrencyScale={SelectedCurrencyScale}
            SelectedCurrencyRate={SelectedCurrencyRate}
          />
        )} />

        <Route exact path={["/", "/currensies", "/calculator"]} render={() => (
          <Chart
            SelectedCurrencyID={SelectedCurrencyID}
          />
        )} />

      </div>
    );
  }
}

export default Content;