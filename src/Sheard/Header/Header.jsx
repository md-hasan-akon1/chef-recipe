import React, { useContext } from 'react';
import { Button, Container, Image, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { authContext } from '../../AuthProvider/AuthProvider';
const Header = () => {
  const { user, logout } = useContext(authContext);
  const name = user?.displayName;
  console.log(user)
  const handelLogout = () => {
    logout()

  }


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
              <Link className='text-decoration-none text-black m-2' to='/blog'>Blog</Link>
            </Nav>
            {user?.photoURL && <><OverlayTrigger overlay={<Tooltip   id="tooltip-disabled">{name}</Tooltip>}>
              <span className="d-inline-block">
                <div>
                  <Image style={{ height: "80px", borderRadius: '50%' }} src={user.photoURL}></Image>
                </div>
              </span>
            </OverlayTrigger></>}

            {
              user ? <> <Button onClick={handelLogout} variant="outline-success">logout</Button></> :
                <Link to='/login' className='text-decoration-none text-black m-2'><Button variant="outline-success">Login</Button></Link>
            }


            <Link to='/register' className='text-decoration-none text-black'> <Button className='m-2' variant="outline-success"> Register</Button></Link>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;