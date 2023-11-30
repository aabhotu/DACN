import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './assets/font/BT-BeauSans-Bold.ttf'
import './assets/font/BT-BeauSans-BoldItalic.ttf'
import './assets/font/BT-BeauSans-ExtraBold.ttf'
import './assets/font/BT-BeauSans-Italic.ttf'
import './assets/font/BT-BeauSans-Light.ttf'
import './assets/font/BT-BeauSans-LightItalic.ttf'
import './assets/font/BT-BeauSans-Medium.ttf'
import './assets/font/BT-BeauSans-MediumItalic.ttf'
import './assets/font/BT-BeauSans-Regular.ttf'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
