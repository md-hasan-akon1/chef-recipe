import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../Sheard/Header/Header';
import Footer from '../Sheard/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <Container>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </Container>
    );
};

export default Main;