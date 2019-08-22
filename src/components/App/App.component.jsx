import React, { Component } from "react";
import { Route } from 'react-router-dom';

import './App.styles.css';

import Menu from "../Menu";
import Sidebar from "../Sidebar";
import Content from "../Content";
import AboutPage from "../AboutPage";
import FavoritePage from "../FavoritePage";

class App extends Component {

  render() {
    return (
      <div className="app">
        <Menu />

        <Route exact path={["/", "/currensies", "/calculator"]} render={() => (
          <>
            <Sidebar />
            <Content
              // baseCurrency={this.state.baseCurrency}
              // selectedCurrency={this.state.selectedCurrency}
            />
          </>
        )} />
        {/* <Route exact path="/about" render={() => (<AboutPage />)} /> */}
        {/* <Route exact path="/favorite" render={() => (<FavoritePage />)} /> */}
      </div>
    );
  }
}

export default App;