import React, { useContext } from 'react';
import { Button, Container, Image, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; 
import { Link, NavLink } from 'react-router-dom';
import { authContext } from '../../AuthProvider/AuthProvider';
const ref = React.createRef();
const Header = () => {
  const { user, logout } = useContext(authContext);
  const name = user?.displayName;
  const handelLogout = () => {
    logout()

  }
  return (
    <Container className='mt-4'>
      <h2 className='text-center ' style={{ fontFamily: 'fantasy' }}> <span className='text-center bg-light' >The Bengali Delicious Food Recipes</span></h2>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home" className='text-bold d-flex justify-content-center align-item-center'><Image style={{ height: '50px' }} src='https://i.ibb.co/QJwmyyw/png-clipart-case-mate-logo-creamycookies-design-apple-iphone-4-cooking-ware-text-recipe-thumbnail.png'></Image> <h4 style={{ fontStyle: 'italic' }}>The Bengali Delicious Food Recipes</h4></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
            
              <NavLink   className={({ isActive, }) =>
                      isActive ? "text-decoration-none text-primary m-2": "text-decoration-none text-dark  m-2"
                    } to='/'>Home</NavLink>
              <NavLink   className={({ isActive, }) =>
                      isActive ? "text-decoration-none text-primary m-2": "text-decoration-none text-dark  m-2"
                    } to='/blog'>Blog</NavLink>
              
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