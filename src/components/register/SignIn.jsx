import React from 'react';
import {Component} from 'react';
import {useState} from "react";
import { useNavigate } from "react-router-dom";
import {auth} from "../../firebase-config";

const SignIn = () => {
    let navigate=useNavigate();
    function SignupClick(){
        navigate('/signup')
    }
    function SignIn(){
        navigate('/trade')
    }
    const[email,setEmail]=useState();
    const[password,setPassword]=useState();
    let disabled = !(email && password)
    return (
        <div className={"container"} data-testid={"signin-page"}>
                <form className={"mt-5"}>
                    <h1>Sign In</h1>
                    <div className={"mb-3"}>
                        <label className="form-label" htmlFor={"email"}>E-mail </label>
                        <input className="form-control" id={"email"} onChange={(event)=>setEmail(event.target.value)}/>
                    </div>
                    <div className={"mb-3"}>
                        <label className="form-label" htmlFor={"password"}>Password </label>
                        <input className="form-control" type="password" id={"password"}  onChange={(event)=>setPassword(event.target.value)} />
                    </div>
                    <div>
                        <button className={"g-btn btn-outline-success"} disabled={disabled} onClick={SignIn} >Sign In</button>
                    </div>
                    <div>
                        <a className="badge bg-primary text-wrap" onClick={SignupClick}>Create an account</a>
                    </div>
                </form>
        </div>
    );
};

export default SignIn;
