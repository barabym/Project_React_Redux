import React, { Component } from "react";
import { Route } from 'react-router-dom';

import './App.styles.css';

import Sidebar from "../Sidebar";
import Content from "../Content";

class App extends Component {

  render() {
    return (
      <div className="app">
        <Route exact path={["/", "/currensies", "/calculator"]} render={() => (
          <>
            <Sidebar />
            <Content />
          </>
        )} />
        <Route exact path={["/about", "/favorite"]} render={() => (
          <Content />
        )} />
      </div>
    );
  }
}

export default App;