import React, { Component } from 'react';

import './App.css';
import upperCase, {text1, text2, text3} from './dataStore1';
import uCase from './dataStore1';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
        
          <h1>Exercise 1</h1>
        </header>
        <div className="App-intro">
        <p>{text1}</p>
        <p>{text2}</p>
        <p>{upperCase("to Upper case all")}</p>
        

        </div>
      </div>
    );
  }
}

export default App;
