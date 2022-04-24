import React from "react";
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {GiTrade} from 'react-icons/gi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {useState} from "react";

const Nav=()=>{
    const [activeNav,setActiveNav]=useState('#')
    return(
        <nav>
            <a href={"#"} onClick={()=> setActiveNav('#')} className={activeNav ==='#'?'active' :''}><AiOutlineHome/></a>
            <a href={"#about"} onClick={()=> setActiveNav('#about')} className={activeNav ==='#about'?'active' :''}><AiOutlineUser/></a>
            <a href={"#market"} onClick={()=> setActiveNav('#market')} className={activeNav ==='#market'?'active' :''}><GiTrade/></a>
            <a href={"#services"} onClick={()=> setActiveNav('#services')} className={activeNav ==='#services'?'active' :''}><RiServiceLine/></a>
            <a href={"#"} onClick={()=> setActiveNav('#')} className={activeNav ==='#'?'active' :''}><BiMessageSquareDetail/></a>

        </nav>
    )
}
export default Nav