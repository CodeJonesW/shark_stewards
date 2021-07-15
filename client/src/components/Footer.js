import React from 'react';
import logo from '../assets/images/logo1.png'
import logo2 from '../assets/images/berkley.png'
import { Link } from "react-router-dom"

const Footer = () => {
  return(
    <div id="footerContainer">
        <img id="footerLogo" src={logo} alt="sharkStewardLogo"></img>
        <span id="footerSpan">Concept by Students of</span>
        <img id="footerLogo2" src={logo2} alt="sharkStewardLogo"></img>
    </div>
  )

}

export default Footer;