import React, { Component } from "react";
import axios from "axios";
import {toast, ToastContainer} from "react-toastify";
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
      threat_value: 500,
      width:window.innerWidth*0.35,
      height:window.innerHeight*0.35,
      ratio:window.innerWidth/window.innerHeight

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

    // if (this.state.url === ""){
    //   toast.error("Invalid url")
    // }else {
       obj = {
        url: this.state.url,
      };
    // }



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

      <div style={{ marginLeft:`${window.innerWidth*0.4}`,marginRight:`${window.innerWidth*0.4}`}}>
        <ToastContainer />
        <form onSubmit={this.onSubmit}>
          <div className="form-group">


            <div style={{marginLeft:"10%",marginRight:"10%"}}>

              <center>
                <label className="lbl" style={{fontSize: `${this.state.width > 360 ? 40 : 25}px`}}>Paste the URL to be scan</label>
              </center>

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
          </div>
        </form>
        <center>
          <h1 className="lbl" style={{marginTop:`${this.state.width > 360 ? 30 : 50}px` }} >Threat Level </h1>


              <ReactSpeedometer

              width={this.state.width > 360 ? 500 : 300}
              height= {this.state.height > 590 ? 500 : 300}

              needleHeightRatio={0.7}
              value={this.state.threat_value}
              customSegmentStops={[0, 250, 500,750, 1000]}
              segmentColors={["#43aa8b", "#f1ba55" ,"#f69316", "#f94144"]}
              // segmentColors={["#43aa8b", "#f9c74f" ,"#f8961e", "#f94144"]}
              currentValueText="Threat Level"
              customSegmentLabels={[
                {
                  text: "Safe",
                  position: "OUTSIDE",
                  color: "#000000",

                },
                {
                  text: "OK",
                  position: "OUTSIDE",
                  color: "#000000"
                },
                {
                  text: "Unsafe",
                  position: "OUTSIDE",
                  color: "#000000",
                  // fontSize:"8px"
                },
                {
                  text: "Dangerous",
                  position: "OUTSIDE",
                  color: "#000000",
                  // fontSize:"8px"
                },
              ]}
              ringWidth={(this.state.width >360)? 90: 60}
              // ringWidth={90}
              needleTransitionDuration={1000}
              needleColor={"#000000"}
              textColor={"#000000"}
            />

        </center>
        </div>
    );
  }
}

export default Home;
