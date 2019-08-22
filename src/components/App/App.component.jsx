import React, { Component } from "react";
import { Route } from 'react-router-dom';

import './App.styles.css';

import Menu from "../Menu/Menu.component.jsx";
import Sidebar from "../Sidebar/Sidebar.component.jsx";
import Content from "../Content/Content.component.jsx";
import About from "../About/About.component.jsx";
import Favorite from "../Favorite/Favorite.component.jsx";

import { getBaseCurrency } from "../../service/getBaseCurrency.js";

class App extends Component {

  state = {
    BaseCurrency: [],
    SelectedCurrency: [],
  }

  componentDidMount() {
    getBaseCurrency().then(response => {
      this.setState({ BaseCurrency: response })
    });
  }

  render() {
    return (
      <div className="app">
        <Menu />
        
          <Route exact path={["/", "/currensies", "/calculator"]} render={() => (
            <>
              <Sidebar
                BaseCurrency={this.state.BaseCurrency}
                IdSelectedCurrency={this.state.SelectedCurrency.ID}
                onClickSelectCurrency={this.onClickSelectCurrency}
              />
              <Content
                BaseCurrency={this.state.BaseCurrency}
                SelectedCurrency={this.state.SelectedCurrency}
              />
            </>
          )} />
          <Route exact path="/about" render={() => (<About />)} />
          <Route exact path="/favorite" render={() => (<Favorite />)} />
        
      </div>
    );
  }

  onClickSelectCurrency = (SelectedCurrency) => {
    this.setState({ SelectedCurrency: SelectedCurrency })
  }
}

export default App;