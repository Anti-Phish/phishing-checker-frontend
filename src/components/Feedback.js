import React from "react";
import Footer from "./Footer";
import {Button, Form,} from "react-bootstrap";
import axios from "axios";


function Feedback() {

    const request = {
        email:"",
        name:"",
        subject:"",
        comment:""
    }

    function onSubmit(object){
        console.log(request)
        axios.post("https://anti-phishing.herokuapp.com/feedback", request).then(r => {
            console.log(r)
        })
    }

    const formBackground={
        backgroundColor:"#43aa8b",
        marginLeft:"30%",
        marginRight:"30%",
        width:"40%",
        height:"450px",
        marginBottom:"-8px",
    }
    const formContainer={
        paddingTop:"10%",
        marginLeft:"20%",
        marginRight:"20%",
        height:"500px",
        color:"white",
    }


    return(
        <div>
            <div style={formBackground}>
                    <div style={formContainer}>
                        <Form onSubmit={onSubmit}>

                            <Form.Group className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Name" onChange={event => {
                                    request.name = event.target.value;
                                }}/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" onChange={event => {
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
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>

                            <Form.Label>Comment</Form.Label>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea" rows={3} onChange={event => {
                                    request.comment = event.target.value;
                                }} />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Feedback;