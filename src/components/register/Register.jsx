import React from 'react';
import "./register.css"
import Yakka from "../../assets/final_62506939b71e711ba522f8ae_10518.png"
import { useNavigate } from "react-router-dom"
const Register=()=>{
    let navigate=useNavigate();
    function SignupClick(){
        navigate('/signup')
    }
    function SigninClick(){
        navigate('/signin')
    }
    return (
    <div className={"container register__container"}>
        <h1 className={"welcome"}>Welcome to Yaka Exchange</h1>
        <div className={"register__me-image"}>
                <img src={Yakka}  alt={"welcome"}/>
        </div>
        <div className={"rlog"}>
            <a onClick={SigninClick} className={'btn'}>Logging</a>
        </div>
        <div className={"rsign"}>
            <a onClick={SignupClick} className={'btn btn-primary'}>Sign Up</a>
        </div>
    </div>
    )
}

export default Register