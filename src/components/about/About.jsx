import React from "react";
import './about.css'
import {BsFillChatDotsFill} from "react-icons/bs"
import {SiDiscord} from "react-icons/si"
import {FaTwitter} from "react-icons/fa"
import ME from "../../assets/100070-mail-success.gif"
const About=()=>{
    return(
        <section id={"about"}>
                <h5>Get to Know</h5>
                <h2>Need Help</h2>
                <div className={"container about__container"}>
                    <div className={"about__me"}>
                        <div className={"about__me-image"}>
                            <img src={ME}  alt="About"/>
                        </div>
                    </div>

                    <div className={"about__content"}>
                        <div className={"about__cards"}>
                             <article className={"about__card"}>
                                    <BsFillChatDotsFill className="about_icon"/>
                                    <h5>24/7 Chat Support</h5>
                                    <small>Get 24/7 chat support with our friendly customer
                                            service agents at your service.
                                    </small>
                             </article>
                             <article className={"about__card"}>
                                 <SiDiscord className="about_icon"/>
                                 <h5>Join the Community</h5>
                                 <small>Join the YAKKA Platform Discord Channel to
                                  discover more about Crypto World.
                                 </small>
                             </article>
                             <article className={"about__card"}>
                                <FaTwitter className="about_icon"/>
                                <h5>Stay up to date</h5>
                                <small>Stay up to date with the latest news in the crypto
                                world with the latest stories and commentry.
                                </small>
                             </article>
                        </div>
                    </div>

                </div>

        </section>
    )
}
export default About