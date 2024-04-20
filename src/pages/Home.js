import React from 'react';
import "../styles/home.css";
import { Container } from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import photo from "../images/emilia_logo.png"
import Flower from '@mui/icons-material/LocalFlorist.js'


const Home = () => {
  return (
    <div className = "home">
		<div className='jumbotron'> 
			<Container className='home-container'> 
				<Row>
					<Col md={6}> 
						<img src={photo} alt="profile" className='profile' />
					</Col>

					<Col md={6}> 
						<div className='socialMedia'>
							<Flower />
							<Flower />
							<Flower />
							<Flower />
							<Flower /> <br />
							<Flower />
							<Flower />
							<Flower />
							<Flower />
							<Flower />
							<Flower /> <br />
							<Flower />
							<Flower />
							<Flower />
							<Flower />
							<Flower />
							<Flower />
							<Flower />
						</div>
						<br />
						<h1>Emilia Stewart</h1>
						<br />
						<div className="socialMedia"> 
							<Flower />
							<Flower />
							<Flower />
							<Flower />
							<Flower />
							<Flower />
							<Flower /> <br />
							<Flower />
							<Flower />
							<Flower />
							<Flower />
							<Flower />
							<Flower /> <br />
							<Flower />
							<Flower />
							<Flower />
							<Flower />
							<Flower />
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	</div>
  );
}

export default Home;