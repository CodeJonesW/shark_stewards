import React from 'react';
import logo from '../assets/images/logo1.png'
import { Link } from "react-router-dom"

const Footer = () => {
  return(
    <div id="footerContainer">
        <img id="footerLogo" src={logo} alt="sharkStewardLogo"></img>
    </div>
  )

}

export default Footer;