import React from "react";
import { Route } from 'react-router-dom';

import './App.styles.css';

import Sidebar from "../Sidebar";
import Content from "../Content";

function App() {

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

export default App;