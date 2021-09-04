import React, { Component } from "react";
import axios from "axios";
import {toast, ToastContainer} from "react-toastify";
import ReactSpeedometer from "react-d3-speedometer";
import Footer from "./Footer";


class Home extends Component {
  constructor(props) {
    super(props);
    this.onChangeUrl = this.onChangeUrl.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      url: "",
      description: "",
      threat_level: "",
      threat_value: 500,
    };
  }

  onChangeUrl(e) {
    this.setState({
      url: e.target.value,
    });
  }

  onChangeThreatValue(e) {
    this.setState({
      threat_value: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    let obj;

    if (this.state.url === ""){
      toast.error("Invalid url")
    }else {
       obj = {
        url: this.state.url,
      };
    }


    console.log(obj);

    axios
      .post("https://anti-phishing.herokuapp.com/check", obj)
      .then((response) => {
        this.setState({
          description: "description : " + response.data.description,
          threat_level: response.data.threat_level,
        });
        switch(this.state.threat_level) {
          case "1" :
            this.setState({
              threat_value: 1000
          })
            break;
          case "2" :
            this.setState({
              threat_value: 625
          })
            break;
          case "3" :
            this.setState({
              threat_value: 375
          })
            break;
          case "4" :
          this.setState({
            threat_value: 0
        })
            break;
          default:
            toast.error("Invalid URL")
            break;
        }
        console.log(this.state.threat_value);
      })
      .catch((error) => {
        console.log(error.response);
      });
    console.log(typeof(this.state.threat_level));
  }

  render() {
    return (
    <div>
      <div style={{ marginLeft:"10%",marginRight:"10%"}}>
        <ToastContainer />
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label className="lbl">Paste the URL to be scan</label>
            <input
              type="text"
              className="form-control"
              placeholder="Paste the URL to be scan"
              value={this.state.url}
              onChange={this.onChangeUrl}
              // required
            />
          </div>
          <br />
          <div className="form-group">
            <center>
              <input
                type="submit"
                value="Scan URL"
                className="btn btn-primary scan_btn"
              />
            </center>
          </div>
        </form>
        <center>
          <h1 className="lbl" >Threat Level </h1>
          <ReactSpeedometer
          width={500}
          needleHeightRatio={0.7}
          // onChange={this.onChangeThreatValue}
          value={this.state.threat_value}
          customSegmentStops={[0, 250, 500,750, 1000]}
          segmentColors={["#43aa8b", "#ffb703" ,"#f8961e", "#f94144"]}
          currentValueText="Threat Level"
          customSegmentLabels={[
            {
              text: "Safe",
              position: "OUTSIDE",
              color: "#ffffff",
            },
            {
              text: "OK",
              position: "OUTSIDE",
              color: "#ffffff"
            },
            {
              text: "Unsafe",
              position: "OUTSIDE",
              color: "#ffffff",
            },
            {
              text: "Dangerous",
              position: "OUTSIDE",
              color: "#ffffff",
            },
          ]}
          ringWidth={90}
          needleTransitionDuration={1000}
          needleColor={"#fefae0"}
          textColor={"#d8dee9"}
        />
        </center>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
