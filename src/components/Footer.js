import React from "react"
import {ToastContainer} from "react-toastify";
import Logo from "../assets/logo.png";
import {Link} from 'react-router-dom'

function Footer(){

    const footerBackground={
        backgroundColor:"#001c26",
        marginBottom:"-8px",
    }
    const middleContent={
        marginLeft:"40%",
        marginRight:"40%",
    }

    return(
        <div style={footerBackground}>
            <ToastContainer />
            <div style={middleContent}>
                <center>

                    <h3 style={{color:"#ffb703",marginTop:"10%",paddingTop:"30px"}}>KNOWB4 <span style={{color:"#f94144"}}>Anti-Phishing</span></h3>
                    <h3 style={{color:"#fcfcfc",paddingBottom:"10px",fontSize:"16px"}}> <Link to='/'>Home</Link> | <Link to='/feedback'>Contact us</Link> | <Link to='/about'>About us</Link> </h3>
                    <img src={Logo} className="rounded mx-auto d-block" style={{ height: 100 ,paddingBottom:"10px"}} alt="logo" id="img1" />
                </center>

            </div>
            <div style={{backgroundColor:"#00141a"}}>
                <center>
                    <h6  style={{color:"white",paddingTop:"10px",paddingBottom:"20px",fontSize:"10px"}}>Copyright &copy;2021 KNOWB4-Anti-Phishing. All rights reserved</h6>
                </center>
            </div>
        </div>
    );
}

export default Footer;