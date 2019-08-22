import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route } from 'react-router-dom';

import App from "./components/App/App.component.jsx";

ReactDOM.render((
  <HashRouter>
    <Route path="/" component={App}/>
  </HashRouter>
), document.getElementById("root"));