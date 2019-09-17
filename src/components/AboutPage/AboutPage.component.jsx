import React, { Component } from 'react';

import './AboutPage.styles.css';

class AboutPage extends Component {
  render() {
    return (
      <div className="wrapper-about">
        <div className="about">
          <p>This site was designed and developed by: Andrei Domkin</p>
          <p>
            GitHub URL:
            {' '}
            <a href="https://github.com/barabym/Project_React_Redux" target="_blank" rel="noopener noreferrer">
              https://github.com/barabym/Project_React_Redux
            </a>
          </p>
          <p>
            GitHub pages:
            {' '}
            <a href="https://barabym.github.io/Task_currency" target="_blank" rel="noopener noreferrer">
              https://barabym.github.io/Task_currency
            </a>
          </p>
        </div>

      </div>
    );
  }
}

export default AboutPage;
