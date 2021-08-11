import React, { Component } from 'react';
import Symbol from '../assets/symbol.png';
import axios from 'axios';

class Home extends Component {

    constructor(props) {
        super(props);
        this.onChangeUrl = this.onChangeUrl.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            url: '',
            title: '',
            description: '',
            threat_level: ''
        }
    }

    onChangeUrl(e) {
        this.setState({
            url: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const obj = {
            url: this.state.url
        };

        console.log(obj)

        // this.setState({
        //     url: '',
        //     title: 'Result',
        //     description: 'done 2'
        // })

        axios.post('https://anti-phishing.herokuapp.com/check', obj)
            .then(
                response => {
                    this.setState({
                        description: 'description : ' +response.data.description,
                        title: 'Result',
                        threat_level: 'threat_level : ' + response.data.threat_level
                    })
                    console.log(response);
                }
            )
            .catch(error => {
                console.log(error.response)
            });
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label className="lbl">Paste the URL to be scan</label>
                        <input type="text" className="form-control" placeholder="paste" value={this.state.url} onChange={this.onChangeUrl} />
                    </div>
                    <br />
                    <div className="form-group">
                        <center>
                        <input type="submit" value="Scan URL" className="btn btn-primary" />
                        </center>
                        
                    </div>

                </form>
                <img src={Symbol} className="App-logo" alt="solong" />
                <br></br>
                <h1 className=" lbl text-*-center"> {this.state.title} </h1>
                <p className = "para">
                    {this.state.description}
                    <br />
                    <span className="level"> {this.state.threat_level} </span>
                </p>

            </div>
        );
    }
}

export default Home;