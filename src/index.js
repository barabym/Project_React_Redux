import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from "./components/App";
import { store } from "./store/configureStore";

ReactDOM.render((
  <Provider store={store}>
    <HashRouter>
      <Route path="/" component={App} />
    </HashRouter>
  </Provider>
), document.getElementById("root"));