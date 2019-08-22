import React, { Component } from "react";
import { Route } from 'react-router-dom';

import './App.styles.css';

import Menu from "../Menu";
import Sidebar from "../Sidebar";
import Content from "../Content";
import AboutPage from "../AboutPage";
import FavoritePage from "../FavoritePage";

import { getBaseCurrency } from "../../service/getBaseCurrency.js";

class App extends Component {


  // state = {
  //   baseCurrency: [],
  //   selectedCurrency: [],
  // }

  componentDidMount() {
    // const { setBaseCurrency } = this.props.setBaseCurrency
    getBaseCurrency().then(response => {
      this.props.setBaseCurrency(response)
    });
    // getBaseCurrency().then(response => {
    //   this.setState({ baseCurrency: response })
    // });
  }

  // onClickSelectCurrency = (selectedCurrency) => {
  //   this.setState({ selectedCurrency: selectedCurrency })
  // }

  render() {
    // const { stateApp } = this.props
    return (
      // const { stateApp } = this.props
      <div className="app">
        {/* <Menu /> */}

        <Route exact path={["/", "/currensies", "/calculator"]} render={() => (
          <>
            <Sidebar
            // baseCurrency={this.state.baseCurrency}
            // idSelectedCurrency={this.state.selectedCurrency.ID}
            // onClickSelectCurrency={this.onClickSelectCurrency}
            />
            {/* <Content
              baseCurrency={this.state.baseCurrency}
              selectedCurrency={this.state.selectedCurrency}
            /> */}
          </>
        )} />
        {/* <Route exact path="/about" render={() => (<AboutPage />)} /> */}
        {/* <Route exact path="/favorite" render={() => (<FavoritePage />)} /> */}
      </div>
    );
  }
}

export default App;