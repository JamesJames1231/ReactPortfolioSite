import './login.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Routes, Route, useNavigate } from "react-router-dom";

import React from "react";
import { useForm } from "react-hook-form";
import Cookies from 'js-cookie';
import { Container } from 'react-bootstrap';

function App() {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
     
    const onSubmit = (data) => {
        const userData = "admin@chimchar.net";
        if (userData === data.email) 
        {
            if ("admin" === data.password) 
            {
                const loggedData = userData;
                console.log(" You Are Successfully Logged In");
                const expirationTime = new Date(new Date().getTime() + 60000);
                Cookies.set('auth', JSON.stringify(loggedData), { expires: expirationTime });
                navigate("/src/Layout/Header/header.js");
            } 
            else 
            {
                console.log("Email or Password is not matching with our record");
            }
        } 
        else 
        {
            console.log("Email or Password is not matching with our record");
        }
    };
    return (
        <div className='form'>
            <div className='inner-form'>
                <Form className="App" onSubmit={handleSubmit(onSubmit)}>
                    <Container>
                        <Row>
                            <Col md="12 my-2">
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Email"
                                    className="mb-3"
                                >
                                    <Form.Control type="email" {...register("email", { required: true })} />
                                </FloatingLabel>
                                {errors.email && <span style={{ color: "red" }}> *Email* is mandatory </span>}
                            </Col>
                            <Col  md="12 my-2">
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Password"
                                    className="mb-3"
                                >
                                    <Form.Control type="password" placeholder="Not Password123@" {...register("password")}/>
                                </FloatingLabel>
                            </Col>
                            <Col  md="12 my-2">
                                <Button type={"submit"} className='form-control'>Login</Button>
                            </Col>
                        </Row>
                    </Container>
                </Form>
            </div>
        </div>
    );
}

export default App;