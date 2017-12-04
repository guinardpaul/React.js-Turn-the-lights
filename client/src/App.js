import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GameBoard from './components/GameBoard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Turn the lights out !</h1>

        </header>
        <p className="App-intro">
        </p>
        <GameBoard />
      </div>
    );
  }
}

App.propTypes = {

};

export default App;
