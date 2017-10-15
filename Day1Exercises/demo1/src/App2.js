import React, { Component } from 'react';

import './App.css';
import person from './dataStore2';
const {firstName, lastName} = person;

class App2 extends Component {
  render() {
    return (
      <div className="App">
        <header>
        
          <h1> Exercise 2</h1>
        </header>
        <div className="App-intro">
       <p>{firstName}</p>
       <p>{lastName}</p>x
        </div>
      </div>
    );
  }
}

export default App2;
