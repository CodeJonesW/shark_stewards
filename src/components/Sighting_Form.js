import React from "react";
import { Form, TextField, Checkbox, Button } from "@adobe/react-spectrum";

const Sighting = () => {
    return (
        // <div id="sightingContainer">
        <Form maxWidth="size-3600" flex="1 0 auto">
            {/* <form id="sightingForm">
                <label htmlFor="sharkType">Shark Type: </label>
                <br></br>
                <input type="text" id="sharkType" name="sharkType"></input>
                <br></br>
                <label htmlFor="sightingLocation">Location: </label>
                <br></br>
                <input
                    type="text"
                    id="sightingLocation"
                    name="sightingLocation"
                ></input>
                <br></br>
                <label htmlFor="email">Email (Optional): </label>
                <br></br>
                <input type="text" id="email" name="email"></input>
                <br></br>
                <label htmlFor="signUpForEmail">Join SS Newsletter</label>
                <input
                    type="checkbox"
                    id="sightingLocation"
                    name="sightingLocation"
                ></input>
                <br></br>
                <input
                    className="submitSightingReport"
                    type="submit"
                    value="Submit"
                />
            </form> */}
            <TextField
                label="Shark Type"
                placeholder="abc@adobe.com"
                isRequired
            />
            <TextField label="Location" placeholder="1234" isRequired />
            <TextField label="Email" optional />
            <Checkbox>Join the Shark Stewards newsletter</Checkbox>
            <Button variant="cta" type="submit">
                Submit
            </Button>
        </Form>
        // </div>
    );
};

export default Sighting;
