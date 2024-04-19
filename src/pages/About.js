import React from 'react';
import "../styles/about.css"
import { Container} from "react-bootstrap";
import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap";

// Images
import logo from '../images/emilia.png';


const About = () => {
  return (
    <div className='aboutme'>
      <div className='background'>
        <h1 className='aboutme-title'>About Me</h1>
        <Container className='info'> 
          <div className="row align-items-center" id="pannel">
            <div className="col-lg-5 order-lg-2">
              <div className="p-5">
                <img className='img-fluid' src={logo} alt="computer"/>
              </div>
            </div>
            <div className="col-lg-7 order-lg-1">
              <div className="p-5">
                <h3 className="emilia">About Me, Myself and I</h3>
                <p> Hello, my name is Emilia Stewart, and I am an aspiring Front End Web Developer and Web Designer.</p> 
                <p> I am a student/graduate of the UNB Coding Bootcamp course, and I am an Accounting and Payroll Administration alumni of NBCC. </p>
                <p> Also, I chose to do this course because I have a passion for learning new skills and I enjoy developing new experiences.</p>
                <a className='resume' href="https://drive.google.com/file/d/1HLYrS8vMcRvmC4kn_-h9lU-QmTNlxKQE/view">
                  <p>Resume</p>
                </a>
              </div>
            </div>
          </div>
        </Container>

        <h2 className='skills-title'> What I Learned </h2>
   
        <Row className="card-containers"> 
          <Col size="lg-4"> 
            <div className="myCard">
                <div className="innerCard">
                    <div className="frontSide">
                        <p className="title">Performance</p>
                    </div>
                    <div className="backSide">
                      <li>Progressive Web Applications</li>
                      <li>Mongoose</li>
                      <li>MongoDB</li>
                      <li>GraphQL</li>
                      <li>NoSQL</li>
                      <li>MERN</li>
                      <li>React</li>
                    </div>
                </div>
            </div>
          </Col>

          <Col size="lg-4"> 
            <div className="myCard">
                <div className="innerCard">
                    <div className="frontSide">
                        <p className="title">Front End</p>
                    </div>
                    <div className="backSide">
                      <li>JavaScript</li>
                      <li>Bootstrap</li>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>API</li>
                    </div>
                </div>
            </div>
          </Col>

          <Col size="lg-4"> 
            <div className="myCard">
                <div className="innerCard">
                    <div className="frontSide">
                        <p className="title">Back End</p>
                    </div>
                    <div className="backSide">
                      <li>Object-Relational Mapping(ORM)</li>
                      <li>Model-View-Controller (MVC)</li>
                      <li>Sequelize</li>
                      <li>Express.js</li>
                      <li>Node.Js</li>
                      <li>MySQL</li>
                    </div>
                </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default About;