import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { authContext } from '../../AuthProvider/AuthProvider';

const Login = () => {
    const { signIn } = useContext(authContext)
    const handelLogin = event => {
        event.preventDefault()
        

    }
    return (
        <Container style={{ height: '500px' }} className={`w-25 mx-auto m-4 `}>
            <Form onSubmit={handelLogin} className='border p-4 rounded bg-secondary'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='fw-bold'>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='fw-bold'>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                </Form.Group>
                <Button variant="primary" type="submit">
                    login
                </Button>
                <p className='fw-bold'>Don't Have An Account <Link to='/register'> Register</Link></p>
            </Form>
        </Container >
    );
};

export default Login;