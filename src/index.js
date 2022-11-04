import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './store';
import { Provider } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCircleNotch, faCircle, faLocationDot, faShareNodes, faEuroSign, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faStar, faBookmark } from '@fortawesome/free-regular-svg-icons';

library.add(faCircleNotch, faCircle, faLocationDot, faStar, faBookmark, faShareNodes, faEuroSign, faAngleLeft)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
