import React from "react";

const Sighting = () => {
    return(
        <div id="sightingContainer">
            <form>
                <label htmlFor="sharkType">Shark Type: </label><br></br>
                <input type="text" id="sharkType" name="sharkType"></input><br></br>
                <label htmlFor="sightingLocation">Location: </label><br></br>
                <input type="text" id="sightingLocation" name="sightingLocation"></input>
            </form>
        </div>
    )

}

export default Sighting;