import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Rating } from '@smastrom/react-rating'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Recipes = ({ details }) => {
    console.log(details)
    const { cookingMethod, img, ingredients, rating, recipeName } = details;
    const handelAddBtn=(event)=>{
       
        toast('🦄This Card Added To Favorite!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        event.currentTarget.disabled = true;
    }
    return (
        <Col className='col-lg-4'>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title style={{ fontStyle: "italic" }} className='text-danger fw-bold'>{recipeName}</Card.Title>

                    <p><span className='fw-bolder'>Ingredients: </span>
                        {ingredients}
                    </p>
                    <ToastContainer></ToastContainer>
                    <Rating

                        style={{ maxWidth: 150 }}
                        value={Math.round(rating)}
                        readOnly
                    />
                    <Card.Text>
                        <span>CookingMethod:- </span>
                        <span className='text-secondary'>{cookingMethod}</span>
                    </Card.Text>
                    <Button onClick={handelAddBtn} className='w-100' variant="success">Add To Favorite</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Recipes;