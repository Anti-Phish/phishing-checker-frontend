import React from "react";
import {Button, Form,} from "react-bootstrap";
import axios from "axios";


function Feedback() {

    const width =window.innerWidth;
    const height =window.innerHeight;
    const request = {
        email:"",
        name:"",
        subject:"",
        comment:""
    }

    function onSubmit(object){
        object.preventDefault()
        console.log(request)
        axios.post("https://anti-phishing.herokuapp.com/feedback", request).then(r => {
            console.log(r)
        })
    }

    const formBackground={
        backgroundColor:"#ffffff",
        marginLeft:`${width > 770 ? 30 : 10}%`,
        marginRight:`${width > 770 ? 30 : 10}%`,
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        marginBottom:"-8px",
        // marginLeft:`${width >= 1024 ? 30 : 10}%`,
        // marginRight:`${width >= 1024 ? 30 : 10}%`,
    }
    const formContainer={
        paddingTop:"10%",
        marginLeft:"20%",
        marginRight:"20%",
        marginBottom: "20%",
        height:`${height > 600 ? height*0.79 : 550}px`,
        color:"white",
    }


    return(
        <div>
            <div style={formBackground}>
                    <div style={formContainer}>
                        <Form onSubmit={onSubmit}>
                                <center>
                                    <span className="feedbackFormName" style={{fontSize:`${width > 770 ? 40 : 30}px`}}>Contact Form</span>
                                </center>

                            <Form.Group className="mb-3">
                                <Form.Label>Name </Form.Label>
                                <Form.Control type="text" placeholder="Name" onChange={event => {
                                    request.name = event.target.value;
                                }}/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address </Form.Label>
                                <Form.Control type="email" placeholder="Email" onChange={event => {
                                    request.email = event.target.value;
                                }} />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>

                            <Form.Label>Subject</Form.Label>
                            <Form.Select aria-label="Floating label select example" onChange={event => {
                                request.subject = event.target.value;
                            }}>
                                <option>Select subject</option>
                                <option value="1">Whitelist your website</option>
                                <option value="2">Report a phishing site</option>
                                <option value="3">Feedbacks</option>
                                <option value="3">Other</option>
                            </Form.Select>

                            <Form.Label>Comment</Form.Label>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea" rows={3} onChange={event => {
                                    request.comment = event.target.value;
                                }} />
                            </Form.Group>

                                <Button variant="primary" type="submit" >
                                    Submit
                                </Button>
                        </Form>
                    </div>
            </div>
        </div>
    )
}

export default Feedback;