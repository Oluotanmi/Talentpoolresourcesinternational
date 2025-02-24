

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.css'
import App from './App'
      
const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
     <BrowserRouter>
      <App/>
     </BrowserRouter>
    )
  