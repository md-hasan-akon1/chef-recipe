import React from 'react';
import { Accordion, Container, Image } from 'react-bootstrap';


const Blog = () => {



    return (
        <div style={{ height: "600px" }}>
            <Container className='p-4 mt-5  position-relative'>



                <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header> <h3>Question-1:- What us the differences between uncontrolled and controlled components?</h3>
                        </Accordion.Header>
                        <Accordion.Body ><p className='fw-bold'>A component in react is referred to as controlled when we let react control the component for us. It means that the component controls the input form, and all of its changes are completely driven by event handlers like setState(). Also, the component controls the render and keeps the data of form in the component state.</p>
                            <p>
                                <span className='fw-bold'>1. controlled components:-</span>   the value attribute set as the components state ‘text’. This is very important so that the input component’s value will always be in sync with the components state ‘text’ s value.
                                the change event emitted by the input element whenever a user tries to update the input element's value. Inside the handler function, we are mutating the ‘text ’state with the updated input value.
                            </p>
                            <p> <span className='fw-bold'>1. uncontrolled components:-</span>  Uncontrolled components react and act more like traditional HTML form elements. The data from the input fields are not stored in the react state, but the data is stored in the DOM itself. Instead of using any event handler setState() to update the value according to the changes by the user, we are provided with a ref to retrieve values from the DOM.

                                Refs in react environment work like a pointer that provides us access to the DOM nodes. </p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header> <h3>Question-2:- How to validate React props using PropTypes ?</h3></Accordion.Header>
                        <Accordion.Body>
                            <li>PropTypes.bool: The prop should be a Boolean,</li>
                            <li>PropTypes.number: The prop should be a number,</li>
                            <li>PropTypes.string: The prop should be a string,</li>
                            <li>PropTypes.func: The prop should be a function,</li>
                            <li>PropTypes.any: The prop can be of any data type,</li>
                            <li>PropTypes.array: The prop should be an array,</li>
                            <li>PropTypes.object: The prop should be an object,</li>
                            <li>PropTypes.symbol: The prop should be a symbol,</li>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header><h3>Question-3:-What is the difference between nodejs and express js. ?</h3></Accordion.Header>
                        <Accordion.Body>
                            Node.js is an open source and cross-platform runtime environment for executing JavaScript code outside of a browser. You need to remember that NodeJS is not a framework and it’s not a programming language. Most of the people are confused and understand it’s a framework or a programming language. We often use Node.js for building back-end services like APIs like Web App or Mobile App. It’s used in production by large companies such as Paypal, Uber, Netflix, Walmart and so on. <br /><hr />
                            Express is a small framework that sits on top of Node.js’s web server functionality to simplify its APIs and add helpful new features. It makes it easier to organize your application’s functionality with middle ware and routing. It adds helpful utilities to Node.js’s HTTP objects. It facilitates the rendering of dynamic HTTP objects.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header><h3>Question-4:- What is a custom hook, and why will you create a custom hook? </h3></Accordion.Header>
                        <Accordion.Body>
                            Custom React hooks are an essential tool that let we add special, unique functionality to your React applications.

                            In many cases, if we want to add a certain feature to your application, we can simply install a third-party library that is made to solve your problem. But if such a library or hook doesn't exist.

                            As a React developer, it's important to learn the process of creating custom hooks to solve problems or add missing features within our own React projects.

                    
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

            </Container>
        </div>
    );
};

export default Blog;