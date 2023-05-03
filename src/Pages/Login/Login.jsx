import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { authContext } from '../../AuthProvider/AuthProvider';

const Login = () => {
    const { signIn } = useContext(authContext)
    const [error, setError] = useState('')
    const handelLogin = event => {
        event.preventDefault()
        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;
        signIn(email, password)
            .then(result => {
                console.log(result.user)
                setError('')
            })
            .catch(e => {
                const errorMassage = (e.message)
                console.log(e.message)
                if (errorMassage.includes("auth")) {
                    setError('User Not Found')

                }
            })


    }

    return (
        <Container style={{ height: '500px' }} className={`w-25 mx-auto m-4 `}>
            <Form onSubmit={handelLogin} className='border p-4 rounded bg-secondary'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='fw-bold'>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='fw-bold'>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <p>{error}</p>
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