import React from 'react';
import { Carousel } from 'react-bootstrap';

const Home = () => {
    return (
        <div >
            <Carousel className='mt-4'>
                <Carousel.Item>
                    <img
                        className="d-block w-100 vh-100"
                        src="https://i.ibb.co/8xgxLDc/download-2.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className="fw-bold text-white">Burger Fast Food</h3>
                        <p className='fw-bolder'>A hamburger, or simply burger, is a sandwich consisting of fillings—usually a patty of ground meat, typically beef—placed inside a sliced bun or bread roll.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 vh-100"
                        src="https://i.ibb.co/rMqL0Df/439410.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Chicken Fast Food</h3>
                        <p className='fw-bolder'>Chickens are omnivores  meaning that, in addition to a commercial feed, they can eat meat grubs, worms, the occasional mouse and vegetation grass, weeds and other plants. A small bit of saliva and digestive enzymes are added as the food moves from the mouth into the esophagus.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 vh-100"
                        src="https://i.ibb.co/R9gDJc3/images.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Fish Fry</h3>
                        <p className='fw-bolder'>
                        A fish fry is a meal containing battered or breaded fried fish. It usually also includes french fries, coleslaw, macaroni salad, lemon slices, tartar sauce, hot sauce, malt vinegar and dessert. Some Native American versions are cooked by coating fish with semolina and egg yolk.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Home;