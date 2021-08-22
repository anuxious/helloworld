// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import App from './components/App';

import './index.sass';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
registerServiceWorker();



// WEBPACK FOOTER //
// ./src/index.js
