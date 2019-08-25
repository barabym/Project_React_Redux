/* eslint-disable react/jsx-max-props-per-line */
/* eslint-disable react/jsx-first-prop-new-line */
import React from 'react';
import { Route } from 'react-router-dom';

import './App.styles.css';

import Menu from '../Menu';
import Sidebar from '../Sidebar';
import Content from '../Content';

function App() {
  return (
    <div className="app">

      <Menu />

      <Route exact path={['/', '/currensies', '/calculator']} render={() => (
        <>
          <Sidebar />
          <Content />
        </>
      )}
      />

      <Route exact path={['/about', '/favorite']} render={() => (
        <Content />
      )}
      />
    </div>
  );
}

export default App;
