import React from "react";

const Sighting = () => {
    return(
        <div id="sightingContainer">
            <form id="sightingForm">
                <label htmlFor="sharkType">Shark Type: </label><br></br>
                <input type="text" id="sharkType" name="sharkType"></input><br></br>
                <label htmlFor="sightingLocation">Location: </label><br></br>
                <input type="text" id="sightingLocation" name="sightingLocation"></input><br></br>
                <label htmlFor="email">Email (Optional): </label><br></br>
                <input type="text" id="email" name="email"></input><br></br>
                <label htmlFor="signUpForEmail">Join SS Newsletter</label>
                <input type="checkbox" id="sightingLocation" name="sightingLocation"></input><br></br>
                <input className="submitSightingReport" type="submit" value="Submit" />
            

            </form>
            
        </div>
    )

}

export default Sighting;