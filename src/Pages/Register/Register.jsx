import React, { useContext, useEffect, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { authContext } from '../../AuthProvider/AuthProvider';

const Register = () => {
    const { createUser } = useContext(authContext)
    const [error, setError] = useState('')
    const [passwordCheck, setPassword] = useState('')
    const handelRegister = event => {
        event.preventDefault()
        const from = event.target;
        const name = from.name.value;
        const photo = from.photo.value;
        const email = from.email.value;
        const password = from.password.value;
        const conPassword = from.confirm.value;
        console.log(name, photo, email, password, conPassword);
        if (password !== conPassword) {
            setError('password did not match')
            return
        }
        else {

            createUser(email, password)
            .then(result=>{
                console.log(result.user)
            })
            .catch(error=>{
                console.log(error)
            })
            setError('')
        }

    }

    const handelPassword = (e) => {
        const inputPassword = e.target.value;
        setPassword(inputPassword);
        if (inputPassword.length < 6) {
            setError('password must be at least 6 characters')
            return
        }
        else {
            setError('')
        }
    }

    return (
        <div>
            <Container className={`w-25 mx-auto m-4 `}>
                <Form onSubmit={handelRegister}>

                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Enter Your Name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicFile">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control type="file" name='photo' placeholder="enter photo" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            name='password'
                            value={passwordCheck}
                            onChange={handelPassword}
                            placeholder="Enter password"
                            required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            type="password"
                            name='confirm'
                            placeholder="Confirm Password"
                            required />
                        <p className='text-danger fw-bold'>{error}</p>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label={<>Accept <Link>Terms and Condition</Link></>} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Register
                    </Button>
                    <p>Have an account? <Link to='/login'>login</Link></p>
                </Form>
            </Container >
        </div>
    );
};

export default Register;