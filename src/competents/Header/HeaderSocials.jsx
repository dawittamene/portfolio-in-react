import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";



const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/dawit-tamene-531194273/" target='__blank'><FaLinkedin/></a>
      <a href="https://twitter.com/dawittamene559" target='__blank'><FaSquareXTwitter/></a>
      <a href="https://www.instagram.com/dawit_1313/" target='__blank'><FaInstagram/></a>


      <a href="https://www.facebook.com/dawit.tcool" target='__blank'><FaFacebookMessenger/></a>



    </div>
  )
}

export default HeaderSocials