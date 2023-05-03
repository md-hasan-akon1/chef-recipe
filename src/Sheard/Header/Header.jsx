import React, { useContext } from 'react';
import { Button, Container, Image } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { authContext } from '../../AuthProvider/AuthProvider';
const Header = () => {
  const { user } = useContext(authContext)

  return (
    <Container className='mt-4'>
      <h2 className='text-center ' style={{ fontFamily: 'fantasy' }}> <span className='text-center bg-light' >The Delicious Food Recipes</span></h2>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home" className='text-bold'><Image style={{ height: '50px' }} src='https://i.ibb.co/QJwmyyw/png-clipart-case-mate-logo-creamycookies-design-apple-iphone-4-cooking-ware-text-recipe-thumbnail.png'></Image> The Delicious Food Recipes</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Link className='text-decoration-none text-black m-2' to='/'>Home</Link>
              <Link className='text-decoration-none text-black m-2' to='/'>Blog</Link>
              <Link className='text-decoration-none text-black m-2' to='/'>profile</Link>
            </Nav>
            {
              user ? <> <Button variant="outline-success">logout</Button></> : <><Link to='/login' className='text-decoration-none text-black m-2'>Login</Link></>
            }
             <Button className='m-2' variant="outline-success"> <Link to='/register' className='text-decoration-none text-black'>register</Link></Button>
         

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;