import React, { useEffect, useState } from 'react';
import { Button, Card, CardGroup, Carousel, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import ChefCard from '../ChefCard/ChefCard';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

import AOS from 'aos';
import 'aos/dist/aos.css';
import LazyLoad from 'react-lazy-load';
const Home = () => {
    const cardData = useLoaderData()
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <Container style={{ backgroundColor: 'rgb(225, 234, 234)' }} >
            {/* carousel section */}
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

            {/* chef card */}
            <section>
                <h2 className='text-center mt-5 fw-bold'>Our Chef</h2>
                <LazyLoad threshold={0.95}>

                    <Row xs={1} md={2} lg={3} className="g-4 mt-3">
                        {
                            cardData.map(card => <ChefCard
                                key={card.id}
                                card={card}
                            ></ChefCard>)
                        }
                    </Row>
                </LazyLoad>
            </section>

            {/* extra section 1 */}

            <section className='bg-warning-subtle'>
                <h1 className='text-center mt-4'>Most Favorite Foods</h1>
                <CardGroup className=''>
                    <Card data-aos="fade-down-right" data-aos-duration="3000" className='mx-4 '>
                        <Card.Img variant="top" style={{ height: '300px' }} src="https://i.ibb.co/vXt517Y/Chicken-Picatta-8.jpg" />
                        <Card.Body>
                            <p className='fw-bolder text-danger'>MAIN DISHES</p>
                            <Card.Title>Quick Chicken Piccata</Card.Title>
                            <Rating

                                style={{ maxWidth: 150 }}
                                value={3.5}
                                readOnly
                            />
                            <Card.Text>
                                Habitant accumsan suscipit sodales phasellus nulla elit placerat sapien quisque gravida tincidunt
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Available now this special food</small>
                        </Card.Footer>
                    </Card>
                    <Card data-aos="flip-down" data-aos-duration="3000" className='border shadow'>
                        <Card.Img variant="top" style={{ height: '300px' }} src="https://i.ibb.co/wgyzZJM/Kung-Pao-Chicken-Horizontal.jpg" />
                        <Card.Body>
                            <p className='fw-bolder text-danger'>MAIN DISHES</p>
                            <Card.Title>Kung Pao Chicken</Card.Title>
                            <Rating
                                style={{ maxWidth: 150 }}
                                value={4}
                                readOnly
                            />
                            <Card.Text>
                                Habitant accumsan suscipit sodales phasellus nulla elit placerat sapien quisque gravida tincidunt
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Available now this special food</small>
                        </Card.Footer>
                    </Card>
                    <Card data-aos="fade-down-left" data-aos-duration="3000" className='mx-4 border '>
                        <Card.Img variant="top" style={{ height: '300px' }} src="https://i.ibb.co/cJSm9yD/Slow-Cooker-Honey-Garlic-Chicken-Thighs-and-Potatoes-Recipe-10x7-684x480.jpg" />
                        <Card.Body>
                            <p className='fw-bolder text-danger'>MAIN DISHES</p>
                            <Card.Title>Honey-Garlic Slow Cooker Chicken Thighs</Card.Title>
                            <Rating
                                style={{ maxWidth: 150 }}
                                value={4.5}
                                readOnly
                            />
                            <Card.Text>
                                Habitant accumsan suscipit sodales phasellus nulla elit placerat sapien quisque gravida tincidunt
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Available now this special food</small>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </section>
            {/* extra section 2 */}
            <section>
                <h1 className='text-center my-4'>Fitness Tips</h1>
                <div className=' row '>
                    <Card className='col-lg-4 '>
                        <LazyLoad threshold={0.95} offset={300} height={280}>
                            <Card.Img variant="top" src="https://i.ibb.co/DD2PVG2/top-view-of-cropped-hands-holding-bowl-with-vegeta-2022-11-17-12-45-27-utc-1024x683.jpg" />
                        </LazyLoad>
                        <Card.Body>
                            <div className='bg-success rounded rounded-circle' style={{ height: '60px', width: '60px', marginTop: '-50px' }}>
                                <p className='text-white text-center fw-bold pt-2 '>10 <br /> mar</p>
                            </div>
                            <Card.Title className='fw-bold'>Healthy eating habits</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Learn more...</Button>
                        </Card.Body>
                    </Card>

                    <Card className='col-lg-4  ' >
                        <LazyLoad height={280} threshold={0.95}>
                            <Card.Img variant="top" src="https://i.ibb.co/k1bz1RS/young-woman-nutritionist-in-white-shirt-working-at-2021-09-04-15-03-27-utc-1024x682.jpg" />
                        </LazyLoad>
                        <Card.Body>
                            <div className='bg-success rounded rounded-circle' style={{ height: '60px', width: '60px', marginTop: '-50px' }}>
                                <p className='text-white text-center fw-bold pt-2 '>10 <br /> mar</p>
                            </div>
                            <Card.Title className='fw-bold'>Delicious diet food</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Learn more...</Button>
                        </Card.Body>
                    </Card>

                    <Card className='col-lg-4 '>
                        <LazyLoad height={280} threshold={0.95}>
                            <Card.Img variant="top" src="https://i.ibb.co/0Z1fNgS/nutritionist-with-female-patient-2021-08-26-16-53-46-utc-1024x684.jpg" />
                        </LazyLoad>
                        <Card.Body>
                            <div className='bg-success rounded rounded-circle' style={{ height: '60px', width: '60px', marginTop: '-50px' }}>
                                <p className='text-white text-center fw-bold pt-2 '>10 <br /> mar</p>
                            </div>
                            <Card.Title className='fw-bold'>Healthy diet to stay fit</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Learn more...</Button>
                        </Card.Body>
                    </Card>
                </div>
            </section>
           

        </Container>
    );
};

export default Home;