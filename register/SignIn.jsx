import React, {useState} from "react";
import { Link} from "react-router-dom";
import { Form,Alert} from "react-bootstrap";
import { Button } from "react-bootstrap";
import {useUserAuth} from "../context/UserAuthContex";
import "bootstrap/dist/css/bootstrap.min.css"
import "./register.css"
const SignIn = () => {
    return (
        <>
            <div className="p-4 box">
                <h2 className="mb-3">Eurus Signup</h2>
                <form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Email address"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password"
                        />
                    </Form.Group>
                    <div className="d-grid gap-2">
                        <Button variant="primary" type="Submit">
                            Sign up
                        </Button>
                    </div>
                </form>
            </div>
            <div className="p-4 box mt-3 text-center">
                Already have an account? <Link to="/Register">Log In</Link>
            </div>
        </>
    );
};

export default SignIn;