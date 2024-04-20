import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import Flower from '@mui/icons-material/LocalFlorist.js';
import "../styles/contact.css";


const Contact = () => {
  const [formStatus, setFormStatus] = React.useState('Submit')

  const [formData, setFormData] = useState({name:"",email:"",message:""});

  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('It has been Submitted!')
    setFormData({name:"",email:"",message:""});
  }

  const onChange = (e) =>{
    const {name,value} = e.target
    console.log(name,value)
    setFormData({...formData,[name]: value })
  }

  return (
    <div className="Contact">
      <div className='backgroundImage'> 
        <Container className="contact-container"> 
          <Row> 
            <Col md={6}> 
              <h1 className="contact-title">My Contact Information</h1>
              <h2 className="contact-info"> Moncton, NB </h2>
              <h2 className="contact-info" href="mailto://em-rstewart@hotmail.com"> em-rstewart@hotmail.com </h2>
              <h2 className="contact-info" href="callto://+1.506.251.2712"> +1 (506) 251-2712 </h2>
                <div className='socialMedia'>
                <Flower />
                <Flower />
                <Flower />
                <Flower />
                <Flower /> 
                <Flower />
                <Flower />
              </div>
            </Col> 

            <Col md={6}> 
              <div className="contact-me">
                <h2>Contact Me</h2>
                <Form onSubmit={onSubmit}>
                  <input type="text" name="name" placeholder="Please Enter Full Name" value = {formData.name} onChange={onChange}/>
                  <input type="email" name="email" placeholder="Please Enter Email" value = {formData.email}  onChange={onChange}/>
                  <textarea  name="message" placeholder="Please Enter Message" value = {formData.message} onChange={onChange}></textarea>
                  <button className="btn" type="submit" placeholder="Submit">
                    {formStatus}
                  </button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Contact;