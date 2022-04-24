import React from "react";
import './header.css'
import LOGO from '../../assets/YAKKACOINwhite.png'
import Loging from './Loging'
import HeaderSocials from './HeaderSocials'
const Header=()=>{
    return(

            <header>
            <div className="container header__container">
                <Loging/>
                <div className="logo">
                    <img src={LOGO} alt={"logo"}/>
                </div>
                <h1 className={"h1"}>Buy, Trade, Sell Crypto in Minutes</h1>
                <h5 className="text-light">Join Sri Lanka's First Crypto Currency Exchange</h5>
                <h4 className="text-dark"><span>Y</span>AKKA <span>E</span>XCHANGE</h4>
                <HeaderSocials/>
                <div>
                    <a href="#contact" className="scroll__down">Scroll Down</a>
                </div>
            </div>
            </header>

    )
}
export default Header