import React, {useState} from "react";
import { Link} from "react-router-dom";
import {useUserAuth} from "../context/UserAuthContex";

const Signup = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword] =useState("");
    const [error,setError]=useState("");
    const {signUp}=useUserAuth();
    const handleSubmit=async (e)=>{
        e.preventDefault();
        setError("");
        try{
            await signUp(email,password)
        }catch (err){
            setError(err.message);
        }
    }
    return (
        <>
            <div className="p-4 box">
                <h2 className="mb-3">Eurus Signup</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3" controlId="formBasicEmail">
                        <input type="email" placeholder="Email address"
                               onChange={(e)=>setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3" controlId="formBasicPassword">
                        <input type="password" placeholder="Password"
                               onChange={(e)=>setPassword(e.target.value)}
                        />
                    </div>
                    <div className="d-grid gap-2">
                        <button variant="primary" type="Submit">
                            Sign up
                        </button>
                    </div>
                </form>
            </div>
            <div className="p-4 box mt-3 text-center">
                Already have an account? <Link to="/Register">Log In</Link>
            </div>
        </>
    );
};

export default Signup;