import React, { Component } from 'react';

import FeatureToggleContainer from './containers/FeatureToggleContainer';

import reset from 'reset-css';
import './assets/base.scss';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feature Toggler</h1>
        </header>
        <section className="App-body">
          <FeatureToggleContainer />
        </section>
      </div>
    );
  }
}

export default App;
