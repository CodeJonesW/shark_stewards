import React from "react";

const Sighting = () => {
    return(
        <div id="sightingContainer">
            <form name="sightingForm" id="sightingForm">
            <h1>Report a Shark Sighting</h1><br></br>
                <label htmlFor="sharkType">Shark Type * </label><br></br>
                <select name="sharkTypes" id="sharkTypesInput" form="sightingForm">
                    <option value="">Please select a type</option>
                    <option value="SevenGill Shark">SevenGill Shark</option>
                    <option value="School Shark">School Shark</option>
                    <option value="Horn Shark">Horn Shark</option>
                    <option value="Pacific Angel Shark">Pacific Angel Shark</option>
                    <option value="Great White Shark">Great White Shark</option>
                    <option value="Leopard Shark">Leopard Shark</option>
                    <option value="Short Finned Mako Shark">Short Finned Mako Shark</option>
                </select><br></br>
                <label htmlFor="sightingLocation">Location * </label><br></br>
                <input className="sightingInput" type="text" id="sightingLocationInput" name="sightingLocation"></input><br></br>
                <label htmlFor="date">Date * </label><br></br>
                <input className="sightingInput" type="date" id="dateTimeInput" name="date"></input><br></br>

                <label>Description</label>
                <textarea id="descriptionInput" ></textarea><br></br>
                <input className="submitSightingReport" type="submit" value="Submit" />

            </form>
            
        </div>
    )

}

export default Sighting;