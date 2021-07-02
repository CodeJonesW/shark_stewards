import React from "react";
import { Link } from "react-router-dom"
const Home = () => {
    return(
        <div id="homeContainer">
            <div id="startOptions">
            <Link className="homeLink" to="/sighting">
                <button className="button1">Report A Sighting</button>
            </Link>
            <Link className="homeLink" to="/">
                <button className="button1">Test Your Knowledge</button>
            </Link>
            <Link className="homeLink" to="/">
                <button className="button1">Placeholder</button>
            </Link>
                
         
                
            </div>
        </div>
    )

}

export default Home;