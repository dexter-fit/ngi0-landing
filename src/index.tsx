import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import inputDos from "./data/dossie.json";
import inputGeo from "./data/geo.json";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

let rootElement = document.getElementById('root');
rootElement.style.setProperty('--main-disabled', process.env.REACT_APP_CONTENT_TYPE === 'dos' ? inputDos.colors['main-disabled'] : inputGeo.colors['main-disabled']);
rootElement.style.setProperty('--main-color', process.env.REACT_APP_CONTENT_TYPE === 'dos' ? inputDos.colors['main-color'] : inputGeo.colors['main-color']);
rootElement.style.setProperty('--main-highlight', process.env.REACT_APP_CONTENT_TYPE === 'dos' ? inputDos.colors['main-highlight'] : inputGeo.colors['main-highlight']);
rootElement.style.setProperty('--primary-color', process.env.REACT_APP_CONTENT_TYPE === 'dos' ? inputDos.colors['primary-color'] : inputGeo.colors['primary-color']);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
