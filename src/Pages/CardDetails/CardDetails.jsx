import React from 'react';
import { Container, Image } from 'react-bootstrap';
import { useLoaderData, useParams } from 'react-router-dom';

const CardDetails = () => {
    const allData = useLoaderData()
    console.log(allData)
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


            
        </Container>
    );
};

export default CardDetails;