import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/home.tsx';
import './components/i18n.js';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);

reportWebVitals();
