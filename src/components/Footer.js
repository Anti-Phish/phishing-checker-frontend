import React from "react"
import {ToastContainer} from "react-toastify";
import Logo from "../assets/logo.png";
import {Link} from 'react-router-dom'

function Footer(){

    let width =window.innerWidth
    let height =window.innerHeight
    const footerBackground={
        backgroundColor:"#001c26",
        marginBottom:"-9px",
    }
    const middleContent={
        // marginLeft:"40%",
        // marginRight:"40%",
        marginLeft:`${width*0.4}`,
        marginRight:`${width*0.4}`,
    }

    return(
        <div style={footerBackground}>
            <div style={middleContent}>
                <center>
                    <h3 style={{color:"#ffb703",marginTop:"10%",paddingTop:"10px"}}>KNOWB4 <span style={{color:"#f94144"}}>Anti-Phishing</span></h3>
                    <h3 style={{color:"#fcfcfc",paddingBottom:"10px",fontSize:"16px"}}>
                        <Link to='/'>Home</Link> |
                        <Link to='/feedback'>Contact us</Link>
                        {/*|*/}
                        {/*<Link to='/about'>About us</Link> */}
                    </h3>
                    <Link to='/'>
                        <img src={Logo} className="rounded mx-auto d-block" style={{ height: 100 ,paddingBottom:"10px"}} alt="logo" id="img1" />
                    </Link>
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