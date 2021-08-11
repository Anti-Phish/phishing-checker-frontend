import Logo from './logo.png';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Solong from './assets/solo.png';

import Home from './components/Home';
import { right } from '@popperjs/core';

function App() {
  return (
    <Router>
      <div className="container">
        <img src={Logo} className="rounded mx-auto d-block" style={{ height: 160 }} alt="logo" />
        <img src={Solong} className="rounded mx-auto d-block" alt="solong" />
        <br />

        <Home></Home>
      </div>
    </Router>
  );
}

export default App;
