import React from 'react';
import { Button } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className='bg-black text-white mt-4 p-5'>
            <div style={{ fontStyle: 'italic' }} className='row'>

                <h1 className='col-lg-4 '>Delicious food</h1>
                <h1 className='col-lg-4 '> Feel Hunger! Order Your <span className='text-danger'>Like Food.</span></h1>
                <Button className='col-lg-4  ' style={{ width: '300px' }} variant="danger">Order Now</Button>
            </div>

            <div className='row  mt-4'>
                <div className='col-lg-4' >
                    <h1> Address </h1>
                    <p>gulsan road , Dhaka Bangladesh</p>
                </div >
                <div className='col-lg-4'>
                    <h1>Contact Us</h1>
                    <p>email:akon@gmail.com</p>
                    <p>phone: 01744551122</p>
                </div>
                <div className='col-lg-4'>
                    <h1>Help</h1>
                    <p>our teams</p>
                </div>
            </div>
<p className='text-center mt-4'>Copyright © 2023  All Rights Reserved</p>
        </div>
    );
};

export default Footer;