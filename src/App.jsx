import React from "react";
import Header from "./components/header/Header.jsx"
import Nav from "./components/nav/Nav.jsx"
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Market from "./components/Market/market";
const App=()=>{
    return(
        <>
            <Header/>
            <About/>
            <Market/>
            <Footer/>
            <Nav/>
        </>
    )
}
export default App