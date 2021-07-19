import {
    Button,
    Checkbox,
    Form,
    Heading,
    TextField,
    View,
    Divider,
    Flex,
    Picker,
    Item,
    Image,
    TextArea,
} from "@adobe/react-spectrum";
import { useHistory } from 'react-router-dom'
import API from "../utils/api.js"
import React, { useEffect, useState } from "react";

import { sharks, SharkPicker } from "../components/SharkPicker";

type Location =
    { // If user decides to input their own location
        location: string
    } | { // If they decide to use current location
        latitude: number,
        longitude: number
    }

const serialize_location = (loc: Location) => {
    if ("location" in loc) {
        return loc.location
    } else {
        return loc.latitude + ", " + loc.longitude
    }
}

const SightingForm = () => {
    const history = useHistory();
    // hold user location
    const [userCurrentLocation, setUserCurrentLocation] = useState<Location>({ location: "" })

    // when page loads set current location to placeholder since form and state are controlled
    // useEffect(() => {
    //     setUserCurrentLocation({location: ""})
    // }, [])


    const setUseCurrentLocation = (selected: boolean) => {
        // if the checkbox has already been checked clear input
        if (!selected) {
            setUserCurrentLocation({
                location: ""
            })
        } else {
            // otherwise get location from geolocation api
            if ("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    // update current location state
                    setUserCurrentLocation({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    })

                },
                    function (error) {
                        console.error("Error Code = " + error.code + " - " + error.message);
                    }
                );
            } else {
                // Add a state here, so that checkbox can be disabled when geolocation is unavailable.
                console.log("Geolocation Not Available");
            }
        }

    }

    function handleManualChangeLocation(e: string) {
        // console.log(e)
        setUserCurrentLocation({ location: e ? e : "" })
    }

    const handleSubmitReport = async (e: React.FormEvent<Element>) => {
        // e.preventDefault()
        // console.log(e)

        // if form is updated make sure these are still valid >>
        // could be refactored later with a useRef
        // if (e.target.parentElement['9'].textContent === "Select an option…") {
        //     alert("Please select a Shark Type")
        //     return
        // } else if (e.target.parentElement['0'].value === "") {
        //     alert("Please select enter a location.")
        //     return
        // }

        // let reportData = {
        //     sharkType: e.target.parentElement['9'].outerText,
        //     location: e.target.parentElement['0'].value,
        //     timeOfSighting: e.target.parentElement['4'].outerText,
        //     email: e.target.parentElement['5'].value,
        //     subscribe: e.target.parentElement['12'].ariaChecked,
        //     description: e.target.parentElement['6'].value
        // }
        // console.log(reportData)
        // try {
        //     API.postSightingReport(reportData)
        //         .then(data => {
        //             // console.log(data)
        //             history.push(`/confirm`);
        //         })
        // } catch (error) {
        //     console.log(error)
        // }

    }
    return (
        <View
            paddingBottom="size-400"
            paddingTop="size-400"
            paddingStart="size-300"
            paddingEnd="size-300"
            flex="1 0 auto"
            UNSAFE_className="homeContainer"
        >
            <Flex direction="row" flex>
                <View flex />
                <Form maxWidth="size-4800" isRequired necessityIndicator="label" onSubmit={handleSubmitReport}>
                    <Heading level={3}>Report a shark sighting</Heading>
                    <TextField
                        label="Location Coordinates"
                        value={serialize_location(userCurrentLocation)}
                        isRequired
                        onChange={(e) => handleManualChangeLocation(e)}
                    />
                    <Checkbox onChange={setUseCurrentLocation}>Use Current Location</Checkbox>
                    <Picker label="Time of Day (PST)">
                        <Item key="3:00am">3:00am</Item>
                        <Item key="4:00am">4:00pm</Item>
                        <Item key="5:00am">5:00am</Item>
                        <Item key="6:00am">6:00am</Item>
                        <Item key="7:00am">7:00am</Item>
                        <Item key="8:00am">8:00am</Item>
                        <Item key="9:00am">9:00am</Item>
                        <Item key="10:00am">10:00am</Item>
                        <Item key="11:00am">11:00am</Item>
                        <Item key="12:00pm">12:00pm</Item>
                        <Item key="1:00pm">1:00pm</Item>
                        <Item key="2:00pm">2:00pm</Item>
                        <Item key="3:00pm">3:00pm</Item>
                        <Item key="4:00pm">4:00pm</Item>
                        <Item key="5:00pm">5:00am</Item>
                        <Item key="6:00pm">6:00pm</Item>
                        <Item key="7:00pm">7:00pm</Item>
                        <Item key="8:00pm">8:00pm</Item>
                        <Item key="9:00pm">9:00pm</Item>
                        <Item key="10:00pm">10:00pm</Item>
                        <Item key="11:00pm">11:00pm</Item>
                        <Item key="12:00am">12:00am</Item>
                        <Item key="1:00am">1:00am</Item>
                        <Item key="2:00am">2:00am</Item>
                    </Picker>

                    <Divider size="M" />
                    <SharkPicker />
                    <Divider size="M" />
                    <TextArea
                        label="Additional Information"
                        isRequired={false}
                    />
                    <TextField
                        label="Email"
                        type="email"
                        inputMode="email"
                        isRequired={false}
                    />
                    <Checkbox>Join the Shark Stewards newsletter</Checkbox>
                    <Button variant="cta" type="submit">
                        Submit
                    </Button>
                </Form>
                <View flex />
            </Flex>
        </View>
    );
};

export default SightingForm;
