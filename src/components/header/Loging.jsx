import React from "react";
import { useNavigate } from "react-router-dom"
const Logging=()=>{
    let navigate=useNavigate();
    function handleClick(){
        navigate('register')
    }
    return(
        <div className='logging'>
            <a onClick={handleClick}  className={'btn'}>Start Trade</a>
        </div>
    )
}
export default Logging