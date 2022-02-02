import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import store from './state';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App store={store}/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
