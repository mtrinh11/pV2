import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './App';
import {BrowserRouter, HashRouter} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    <HashRouter>
      <App />      
    </HashRouter>
    {/* </BrowserRouter> */}
  </React.StrictMode>,
  document.getElementById('root')
);
