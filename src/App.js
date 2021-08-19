import Logo from './assets/logo.png';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import Home from './components/Home';
import axios from "axios";


setInterval(HealthCheck, 60000)

function App() {
  return (
    <Router>
      <div className="container">
        <img src={Logo} className="rounded mx-auto d-block" style={{ height: 150 }} alt="logo" id="img1" />
        {/* <img src={Solong} className="rounded float-right" alt="solong" id="img2"/> */}
        <Home/>
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
