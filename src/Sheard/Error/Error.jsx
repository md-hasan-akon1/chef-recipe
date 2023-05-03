import React from 'react';
import { Button, Container, Image } from 'react-bootstrap';
import { Link, useRouteError } from 'react-router-dom';

const Error = () => {
    const { error, status } = useRouteError()
    return (

        <Container>

            <section className=''>

                <Image className='w-75 mx-auto d-flex justify-content-center' src='https://i.ibb.co/Qvzq3gT/404-landing-page-free-vector.webp'></Image>
                <div className=' text-center'>
                    <h2 className='mb-4 text-danger fw-bold'>
                        <span className=''>Error</span> {status || 404}
                    </h2>
                    <p className='fw-bold'>
                        {error?.message}
                    </p>
                    <Button variant="danger">
                        <Link to='/' className=' text-decoration-none fw-bold text-black'>Back to homepage</Link>
                    </Button>
                </div>

            </section>
        </Container>
    )
};

export default Error;