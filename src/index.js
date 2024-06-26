import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/about.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css'

ReactDOM.render(
  <React.StrictMode>
     <App />
  </React.StrictMode>
    ,
  document.getElementById('root')
);

reportWebVitals();
