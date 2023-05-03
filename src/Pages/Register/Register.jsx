import React, { useContext, useEffect, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { authContext } from '../../AuthProvider/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const { createUser } = useContext(authContext)
    const [error, setError] = useState('')
    const [passwordCheck, setPassword] = useState('')
    const handelRegister = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const conPassword = form.confirm.value;
        if (password !== conPassword) {
            setError('password did not match')
            return
        }
        else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            setError("Invalid  email")
            return
        }
        else {

            createUser(email, password)
                .then(result => {
                    upDateUser(result.user, name, photo)
                    console.log(result.user)
                    form.reset()
                    setPassword('')
                })
                .catch(e => {
                    const errorMassage = (e.message)
                    console.log(e.message)
                    if (errorMassage.includes("auth")) {
                        setError('User already exists')
    
                    }
                    return
                })
            setError('')
        }}
        const upDateUser=(user,name,photo,)=>{
            updateProfile(user,{
            displayName:name,
            photoURL:photo
        })
        .then(()=>{})
        .catch(error=>console.log(error))
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
            <Container style={{ width: '400px' }} className={` mx-auto m-4 `}>
                <h1 className='text-center '>Create Your Account </h1>
                <Form style={{ backgroundColor: 'rgb(221, 240, 226)' }} className='border p-4 rounded ' onSubmit={handelRegister}>

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