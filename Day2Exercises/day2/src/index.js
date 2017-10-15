import React from 'react';
import ReactDOM from 'react-dom';
import Toggle from './Toggle';
import './index.css';
//import App from './App';
//import App2 from './App2';
//import Clock from './Clock';
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<Clock txt="A big black Clock" sleepTime={3000}/>, document.getElementById('root'));
//registerServiceWorker();
ReactDOM.render(<Toggle txt="A big black Clock" sleepTime={3000}/>, document.getElementById('root'));
registerServiceWorker();