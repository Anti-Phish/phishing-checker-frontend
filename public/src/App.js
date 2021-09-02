import Logo from './assets/logo.png';
import './App.css';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import Feedback from './components/Feedback';
import {toast, ToastContainer} from "react-toastify";
import React from "react";
import Switch from "react-bootstrap/Switch";


function App() {

  return (
    <Router>
      <div style={{marginBottom:"0px"}}>
        <img src={Logo} className="rounded mx-auto d-block" style={{ height: 150 }} alt="logo" id="img1" />

        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/feedback" component={Feedback}/>
        </Switch>
        
      </div>
     </Router>
  );
}

export default App;
