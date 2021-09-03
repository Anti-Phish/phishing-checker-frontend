import Logo from './assets/logo.png';
import './App.css';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './components/Home';
import Feedback from './components/Feedback';
import React from "react";
import Switch from "react-bootstrap/Switch";
import axios from "axios";



setInterval(HealthCheck, 60000)

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

function HealthCheck () {
    axios.get("https://anti-phish-frontend.herokuapp.com/").then((response) => {
        console.log("Health ok")
    })
}

export default App;
