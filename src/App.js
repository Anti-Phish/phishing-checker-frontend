import Logo from './assets/mainLogo.png';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Home from './components/Home';
import Feedback from './components/Feedback';
import Footer from './components/Footer';
import React from "react";
import AboutUs from "./components/AboutUs";
import Disclaimer from "./components/Disclaimer";

function App() {

    return (
        <Router>
            <div style={{marginBottom:"0px"}}>
                <Link to="/">
                    <img src={Logo} className="rounded mx-auto d-block" style={{ height: 150 }} alt="logo" id="img1" />
                </Link>
                <Route path="/" exact component={Home}/>
                <Route path="/feedback" component={Feedback}/>
                <Route path="/about" component={AboutUs}/>
                <Route path="/disclaimer" component={Disclaimer}/>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
