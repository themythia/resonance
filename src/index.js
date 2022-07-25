import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    {/* Used Router here to be able to use useLocation on App component*/}
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
