import React from 'react';
import logo from '../assets/images/logo1.png'
import { Link } from "react-router-dom"

const Navbar = () => {
  return(
    <div id="navBarContainer">
      <Link to="/">
        <img id="navBarLogo" src={logo} alt="sharkStewardLogo"></img>
      </Link>

    </div>
  )

}

export default Navbar;