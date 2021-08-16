import React, { Component } from "react";
import axios from "axios";

import ReactSpeedometer from "react-d3-speedometer";

class Home extends Component {
  constructor(props) {
    super(props);
    this.onChangeUrl = this.onChangeUrl.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      url: "",
      description: "",
      threat_level: "",
      threat_value: 1000,
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

    const obj = {
      url: this.state.url,
    };

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
        }
        console.log(this.state.threat_level);
      })
      .catch((error) => {
        console.log(error.response);
      });
    console.log(typeof(this.state.threat_level));
  }

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label className="lbl">Paste the URL to be scan</label>
            <input
              type="text"
              className="form-control"
              placeholder="Paste the URL to be scan"
              value={this.state.url}
              onChange={this.onChangeUrl}
              required
            />
          </div>
          <br />
          <div className="form-group">
            <center>
              <input
                type="submit"
                value="Scan URL"
                className="btn btn-primary"
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
          ringWidth={47}
          needleTransitionDuration={3333}
          needleTransition="easeElastic"
          needleColor={"#fefae0"}
          textColor={"#d8dee9"}
        />
        </center>
        
      </div>
    );
  }
}

export default Home;
