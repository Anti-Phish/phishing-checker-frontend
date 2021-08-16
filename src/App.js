import Logo from './assets/logo.png';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Solong from './assets/solo.png';

import Home from './components/Home';
import { right } from '@popperjs/core';


function App() {
  return (
    <Router>
      <div className="container">
        <img src={Logo} className="rounded mx-auto d-block" style={{ height: 150 }} alt="logo" id="img1" />
        {/* <img src={Solong} className="rounded float-right" alt="solong" id="img2"/> */}

        <Home></Home>

        
      </div>
    </Router>
  );
}

export default App;
