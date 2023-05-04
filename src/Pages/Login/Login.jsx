import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../../AuthProvider/AuthProvider';
import { FaBeer, FaGithub, FaGoogle } from 'react-icons/fa'
const Login = () => {
    const { signIn, googleLogin, githubLogin } = useContext(authContext)
    const navigate=useNavigate()
    const location=useLocation()
    const [error, setError] = useState('')
    const from=location?.state?.pathname ||"/"
    
    const handelLogin = event => {
        event.preventDefault()
        setError('')
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                console.log(result.user)
                navigate(from)
                setError('')
                console.log(from)
                form.reset()
            })
            .catch(e => {
                const errorMassage = (e.message)
                console.log(e.message)
                if (errorMassage.includes("auth/wrong-password")) {
                    setError('Wrong Password')

                }
                else if(errorMassage.includes("auth/")){
                    setError('User Not Found')
                }
            })
    }
    const handelGithubLogin = () => {
        githubLogin()
            .then(result => { 
                navigate(from)
                console.log(result.user) })
            .catch(error => console.log(error))

    }

    const handelGoogleLogin = () => {
        googleLogin()
            .then(result =>{
                navigate(from)
                console.log(result.user)})
            .catch(error => console.log(error))
    }
    return (
        <div style={{ height: '500px', width: '400px' }} className={`mx-auto m-4 `}>

            <h1 className='text-center'>Login Please !</h1>
            <Form onSubmit={handelLogin} style={{ backgroundColor: 'rgb(221, 240, 226)' }} className='border p-4 rounded '>
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
                <Button className='w-50 mb-4' variant="primary" type="submit">
                    login
                </Button>
                <p className='fw-bold text-center'>Don't Have An Account <Link to='/register'> Register</Link></p>
                <div className='d-flex justify-content-center align-items-center gap-2'>
                    <span style={{ height: '4px', width: '100px' }} className='bg-dark '></span>
                    <h6 className='text-center'>OR</h6>
                    <span style={{ height: '4px', width: '100px' }} className='bg-dark '></span>

                </div>

                <Button onClick={handelGoogleLogin} className='fw-bold text-dark w-100 mb-2' variant="outline-secondary"> <FaGoogle /> Continue With Google</Button>
                <Button onClick={handelGithubLogin} className='fw-bold text-dark w-100' variant="outline-secondary"> <FaGithub /> Continue With GitHub</Button>


            </Form>
        </div >
    );
};

export default Login;