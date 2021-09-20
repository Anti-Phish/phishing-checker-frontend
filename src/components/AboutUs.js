import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Mem1 from '../assets/member-1.jpg';
import Mem2 from '../assets/member-2.jpg';
import Mem3 from '../assets/member-3.jpg';
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

function About () {

        let width =window.innerWidth
        return (
        <div className="bodyContent">
                <div className="AboutDes" >
                    <div className="blog-card__title"><b>About Us</b></div>
                    <div style={{ marginLeft:"10%",marginRight:"10%"}}>
                            <p >
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
                                five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                <br />
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley .
                            </p>
                    </div>
                </div>


                <div className="row1" style={{ marginLeft:"10%",marginRight:"10%"}}>
                    <div className="column1">

                        <img src={Mem3} alt="Member-1"  />
                        <p className="lblName" style={{fontSize:`${width>590 ? 40 : 15}px`}}>Wikum Weerakutti</p>

                        <div className="socialMediaButton" style={{fontSize:`${width>590 ? 40 : 20}px` ,marginTop:`${width>590 ? 5 : -20}%`}} >
                            <a className="gitHub" href="https://github.com/wikumChamith"><FontAwesomeIcon  icon={faGithub} /></a>
                            <a className="linkedIn" href="https://www.linkedin.com/in/wikum-weerakutti-a455261a6/"><FontAwesomeIcon  icon={faLinkedin} /></a>
                        </div>

                    </div>
                    <div className="column1">
                        <img src={Mem2} alt="Member-2" />
                        <p className="lblName" style={{fontSize:`${width>590 ? 40 : 15}px`}}>Kavishka Ganewattha</p>
                        <div className="socialMediaButton" style={{fontSize:`${width>590 ? 40 : 20}px`,marginTop:`${width>590 ? 5 : -20}%`}} >
                            <a className="gitHub" href="https://github.com/KaViShKa99"><FontAwesomeIcon  icon={faGithub} /></a>
                            <a className="linkedIn" href="https://www.linkedin.com/in/kavishka-ganewattha-1813661a6/"><FontAwesomeIcon  icon={faLinkedin} /></a>
                        </div>

                    </div>
                    <div className="column1">
                        <img src={Mem1} alt="Member-3" />
                        <p className="lblName" style={{fontSize:`${width>590 ? 40 : 15}px`} }>Shaumya Alexandra</p>

                        <div className="socialMediaButton"  style={{fontSize:`${width>590 ? 40 : 20}px`,marginTop:`${width>590 ? 5 : -20}%` }}>
                            <a className="gitHub" href="https://github.com/Shaumya-A"><FontAwesomeIcon  icon={faGithub} /></a>
                            <a className="linkedIn" href="https://www.linkedin.com/in/shaumya-alexandra-b895201a6"><FontAwesomeIcon  icon={faLinkedin} /></a>
                        </div>
                    </div>
                </div>

                <div className=" Aboutbox">
                    <div className="home">
                        <br/>
                        <h1 className="CHeading">FIND US ON</h1>
                        <p id="Clbl">Contact us via (+94) 72 xxxx 845</p>
                    </div>
                </div>

            </div>
    )
}

export default About;