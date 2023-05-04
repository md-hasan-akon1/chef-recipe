import React from 'react';
import { Button, Container, Image, Row } from 'react-bootstrap';
import { useLoaderData, useParams } from 'react-router-dom';
import Recipes from '../../Sheard/Recipes/Recipes';

const CardDetails = () => {
    const allData = useLoaderData()
    const { id, chefName, chefPicture, likes, numberOfRecipes, yearsOfExperience, cardDetails, description } = allData;
    return (
        <Container>
            <div className='mt-4 row  text-center ' style={{ backgroundColor: "rgb(224, 224, 235)", fontStyle: 'italic' }}>
                <Image className='col-lg-6 ms-auto ' src={chefPicture}></Image>
                <div className=' col-lg-6'>
                    <h1>Name: {chefName}</h1>
                    <h4>Number Of Experience: {yearsOfExperience}</h4>
                    <div className='fw-bolder '> <p className='flex-grow-1' >Number of Recipes:      {numberOfRecipes}</p>
                        <p>Likes: {likes}</p>
                    </div>
                    <h5>Description</h5>
                    <p>{description}</p>

                </div>
            </div>

            <Row xs={1} md={2} lg={3} className='mt-4'>
                {
                    cardDetails.map(details => <Recipes
                        key={details.id}
                        details={details}
                    ></Recipes>)
                }
            </Row>

        </Container>
    );
};

export default CardDetails;