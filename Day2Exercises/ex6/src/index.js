import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker'
import ImageComponent from './ImageComponent';

ReactDOM.render(<ImageComponent/>, document.getElementById('root'));
registerServiceWorker();
