import React from "react"
import Logo from "../assets/footerLogo.png";
import {Link} from 'react-router-dom'

function Footer(){

    let width =window.innerWidth

    const footerBackground={
        backgroundColor:"#001c26",
        marginBottom:"-9px",
    }

    const middleContent={
        marginLeft:`${width*0.4}`,
        marginRight:`${width*0.4}`,
    }

    return(
        <div style={footerBackground}>
            <div style={middleContent}>
                <center>


                    <h3 style={{color:"#ffffff",marginTop:"10%",paddingTop:"10px"}}><span style={{color:"#43aa8b"}}>Mr.   Detective</span> - <span style={{color:"#f69316"}}>   Know Before Getting </span> <span style={{color:"#f94144"}}>  PHISHED</span></h3>
                    <h3 style={{color:"#fcfcfc",paddingBottom:"10px",fontSize:"16px"}}> <Link to='/'>Home</Link> | <Link to='/feedback'>Contact us</Link> | <Link to='/about'>About us</Link> | <Link to='/disclaimer'>Disclaimer</Link> </h3>
                    <img src={Logo} className="rounded mx-auto d-block" style={{ height: 100 ,paddingBottom:"10px"}} alt="logo" id="img1" />
                </center>

            </div>
            <div style={{backgroundColor:"#00141a"}}>
                <center>
                    <h6  style={{color:"white",paddingTop:"10px",paddingBottom:"20px",fontSize:"10px"}}>Copyright &copy;2021 Mr.Detective - All rights reserved</h6>
                </center>
            </div>
        </div>
    );
}

export default Footer;