import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import TwoHooks from './TwoHooks';
import UseEffect from './UseEffect';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <TwoHooks/>
    <UseEffect/>
  </React.StrictMode>
);

