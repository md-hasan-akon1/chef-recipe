import React from 'react';
import { Container, Image } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/png-clipart-case-mate-logo-creamycookies-design-apple-iphone-4-cooking-ware-text-recipe-thumbnail.png'
const Header = () => {
    return (
        <div className='mt-4'>
            <h2 className='text-center ' style={{fontFamily:'fantasy'}}> <span className='text-center bg-light' >The Bengali Chef Foods</span></h2>
            <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className='text-bold'><Image style={{height:'50px'}} src='https://i.ibb.co/QJwmyyw/png-clipart-case-mate-logo-creamycookies-design-apple-iphone-4-cooking-ware-text-recipe-thumbnail.png'></Image> The Bengali Chef Foods</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Blog</Nav.Link>
            <Nav.Link href="#link">profile</Nav.Link>
          </Nav>
        <Nav.Link href="#link">login</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;