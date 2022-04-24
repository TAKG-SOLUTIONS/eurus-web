import React from "react";
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocials=()=>{
    return(
        <div className={'header__socials'}>
            <a href={"http://linkedin.com"} targrt="_blank"><BsLinkedin/></a>
            <a href={"http://github.com"} targrt="_blank"><FaGithub/></a>
            <a href={"http://dribble.com"} targrt="_blank"><FiDribbble/></a>

        </div>
    )
}
export default HeaderSocials