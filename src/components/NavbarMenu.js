import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Container, Navbar } from "react-bootstrap";
import "../styles/navbar.css";
import logo from '../images/emilia.png';


const NavbarMenu = () => {
	const [expandNavbarMenu] = useState(false);

	return (
		<Navbar id={expandNavbarMenu ? "open" : "close"}>
			<Container>
				<Navbar.Brand> 
					<img src={logo} alt="logo" className='logo'></img> 
					<span id="title">Emilia Stewart</span>
				</Navbar.Brand>
			
				<div className='links'>
					<Link to="/">Home</Link>
					<Link to="about">About</Link>
					<Link to="projects">Projects</Link>
					<Link to="contact">Contact</Link>
				</div>
			</Container>
		</Navbar>
	);
}

export default NavbarMenu;