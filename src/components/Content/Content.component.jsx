import React, { Component } from "react";
import { Route } from 'react-router-dom';

import './Content.styles.css';

import Menu from "../Menu";
import Converter from "../Converter";
import Chart from "../Chart";
import Button from "../Button";
import AboutPage from "../AboutPage";
import FavoritePage from "../FavoritePage";

class Content extends Component {

  render() {
    return (
      <>
        <Route exact path={["/", "/currensies"]} render={() => (
          <>
            <Menu
              style={"menu"}
            />
            <div className="content">
              <Button />
              <Chart />
            </div>
          </>
        )} />

        <Route exact path="/calculator" render={() => (
          <>
            <Menu
              style={"menu"}
            />
            <div className="content">
              <Converter />
              <Chart />
            </div>
          </>
        )} />

        <Route exact path="/about" render={() => (
          <>
            <Menu
              style={"menu menu_position-center"}
            />
            <div className="content">
              <AboutPage />
            </div>
          </>
        )} />

        <Route exact path="/favorite" render={() => (
          <>
            <Menu
              style={"menu menu_position-center"}
            />
            <div className="content">
              <FavoritePage />
            </div>
          </>
        )} />
      </>
    );
  }
}

export default Content;