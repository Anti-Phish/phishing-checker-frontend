import React from "react";
import Styles from "../styls/feedback.module.css"
import Footer from "./Footer";

function Feedback() {
    const formBackground={
        // backgroundColor:"#1d3542",
        backgroundColor:"#43aa8b",
        marginLeft:"30%",
        marginRight:"30%",
        width:"40%",
        height:"450px",
        marginBottom:"-8px",
        // border:"solid 2px white"
    }
    const formContainer={
        paddingTop:"10%",
        marginLeft:"20%",
        marginRight:"20%",
        height:"500px",
        color:"white",

        // backgroundColor:"#ededee",
    }
    const fromNameField={
        float:"left",
        paddingLeft:"50px",
        marginBottom:"10px"
    }
    const inputTextField ={
        paddingLeft:"50px",
        // float:"right"
    }
    return(
        <div>
            <div style={formBackground}>
                <center>
                    <div style={formContainer}>
                        <h3>Feedback us</h3>
                        <form style={{paddingTop:"40px",paddingBottom:"40px"}}>
                               <span style={fromNameField }>Name    <span style={{paddingLeft:"55px"}}><input   type="text"/> </span></span> <br/>
                                <span style={fromNameField}>Email   <span style={{paddingLeft:"60px"}}><input  type="text"/> </span></span><br/>
                                <span style={fromNameField}>Comment </span><span style={{paddingLeft:"-50px"}}><textarea style={{minHeight:"150px",maxHeight:"150px",minWidth:"120px",maxWidth:"200px"}}  /></span><br/><br/>
                                <button  className="btn btn-primary scan_btn"  type="submit" >Submitted </button>
                        </form>
                    </div>
                </center>

            </div>
                <div>
                    <Footer />
                </div>
        </div>
    )
}

export default Feedback;