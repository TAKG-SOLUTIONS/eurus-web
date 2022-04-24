import React from "react"
import "./footer.css"
const Footer =() =>{
    return (
        <section id={"footer"}>
        <footer>
            <a href={"#"} className={"footer__logo"}>EURUS</a>
            <ul className={"permalinks"}>
                <li><a href={"#"}>About Us</a></li>
                <li><a href={"#"}>Products</a></li>
                <li><a href={"#"}>Service</a></li>
                <li><a href={"#"}>Support</a></li>
                <li><a href={"#"}>Learn</a></li>
                <li><a href={"#"}>Community</a></li>
            </ul>
            <div className={"footer__socials"}>

            </div>
            <div className={"footer__copyright"}>
                <small>&copy;EURUS YAKA</small>
            </div>
        </footer>
        </section>
    )
}
export default Footer