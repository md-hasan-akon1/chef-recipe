import React from 'react';
import { Button, Card, Col, Image, Row } from 'react-bootstrap';
import LazyLoad from 'react-lazy-load';

const ChefCard = ({ card }) => {
  const { chefName, chefPicture, likes, rating, recipeName, yearsOfExperience, id, numberOfRecipes } = card
  return (
    <div data-aos="zoom-in-up" > <Col>
      <Card className='shadow'>
        <LazyLoad height={300}>
          <Card.Img variant="top" style={{ height: '300px' }} src={chefPicture} />
        </LazyLoad>
        <Card.Body>
          <Card.Title> <h4 className='fw-bold'>Name: {chefName}</h4></Card.Title>

          <h3>years of Experience: {yearsOfExperience}</h3>

          <div className='d-flex'>
            <p className='flex-grow-1'><span className='fw-bolder '>number of Recipes:</span> {numberOfRecipes}</p>
            <p><Image style={{ height: '40px' }} src='https://i.ibb.co/r20HfN8/download.png'></Image> {likes} </p>
          </div>
          <Button className='w-100' variant="primary">View Recipes Details</Button>
        </Card.Body>
      </Card>
    </Col>
    </div>




  );
};

export default ChefCard;