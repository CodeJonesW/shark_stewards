import {
    Button,
    Checkbox,
    Form,
    Heading,
    TextField,
    View,
    Divider,
    Picker,
    Item,
    Image,
    Text,
    ActionButton,
} from "@adobe/react-spectrum";
import great_white from "../assets/images/sharks/great_white.jpg";
import hammerhead from "../assets/images/sharks/hammerhead.jpeg";
import ChevronLeft from "@spectrum-icons/workflow/ChevronLeft";
import ChevronRight from "@spectrum-icons/workflow/ChevronRight";

import { useHistory } from 'react-router-dom'
import API from "../utils/api/api.js"
import React, {useEffect, useState} from "react";

const sharks = [
    "great_white",
    "hammerhead",
    "mako",
    "blue",
    "sevin_gill",
    "soup_fin",
    "six_gill",
];

const SharkImage = (shark_id) => {
    // console.log(shark_id);
    switch (shark_id) {
        case "great_white":
            return (
                <img
                    src={great_white}
                    alt="Great White Shark"
                    height="100%"
                    width="100%"
                />
            );
        case "hammerhead":
            return (
                <img
                    src={hammerhead}
                    alt="Hammerhead Shark"
                    height="100%"
                    width="100%"
                />
            );
        // case "mako":
        //     return <Image src={mako} />;
        // case "blue":
        //     return <Image src="blue" />;
        // case "great_white":
        //     return <Image src="great_white" />;
        default:
            return <Text>Not implemented yet!</Text>;
    }
};

const SharkImageCarousel = (shark_id, left, right) => {
    return (
        <div style={{ overflow: "hidden", position: "relative" }}>
            {SharkImage(shark_id)}
            <ActionButton
                UNSAFE_style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    bottom: 0,
                    margin: "auto 0",
                }}
                isQuiet
                isDisabled={left == null}
                onPress={left}
            >
                <ChevronLeft />
            </ActionButton>
            <ActionButton
                UNSAFE_style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    bottom: 0,
                    margin: "auto 0",
                }}
                isQuiet
                isDisabled={right == null}
                onPress={right}
            >
                <ChevronRight />
            </ActionButton>
        </div>
    );
};

const SharkPicker = () => {
    let [shark_index, set_shark_index] = React.useState();
    const left =
        shark_index === "0" ? null : () => set_shark_index(shark_index - 1);
    const right =
        shark_index === sharks.length
            ? null
            : () => set_shark_index(shark_index + 1);
    return (
        <>
            <Picker
                label="Shark Type"
                isRequired
                necessityIndicator="icon"
                onSelectionChange={(id) => set_shark_index(sharks.indexOf(id))}
                selectedKey={sharks[shark_index]}
            >
                <Item key="great_white">Great White Shark</Item>
                <Item key="hammerhead">Hammerhead Shark</Item>
                <Item key="mako">Mako Shark</Item>
                <Item key="blue">Blue Shark</Item>
                <Item key="seven_gill">Sevengill Shark</Item>
                <Item key="soup_fin">Soupfin (Tope or School) Shark</Item>
                <Item key="six_gill">Sixgill Shark</Item>
                <Item key="salmon">Salmon Shark</Item>
                {/* <Item key="none">None of the above</Item> */}
            </Picker>
            {SharkImageCarousel(sharks[shark_index], left, right)}
        </>
    );
};



const SightingForm = () => {
    const history = useHistory();

    // when page loads set current location to placeholder since form and state are controlled
    useEffect(() => {
        setUserCurrentLocation({location: ""})
    }, [])
    // hold user location
    const [userCurrentLocation, setUserCurrentLocation] = useState(false)

    const handleUseCurrentLocation = () => {
        // if the checkbox has already been checked clear input
        if(userCurrentLocation.latitude) {
            setUserCurrentLocation({
                location: ""
            }) 
        } else {
            // otherwise get location from geolocation api
            if ("geolocation" in navigator) {

                navigator.geolocation.getCurrentPosition(function(position) {
                    // update current location state
                    setUserCurrentLocation({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    })
        
                    }, 
                    function(error) {
                        console.error("Error Code = " + error.code + " - " + error.message);
                      }
                );
            } else {
                    console.log("Geolocation Not Available");
            }
        }
       
    }

    function handleManualChangeLocation(e){
        console.log(e)
        setUserCurrentLocation({location: e ? e : ""})
    }

    const handleSubmitReport = async (e) => {
        e.preventDefault()
        // if form is updated make sure these are still valid >>
        let reportData = {
            sharkType: e.target.parentElement['6'].outerText,
            location: e.target.parentElement['0'].value,
            time: e.target.parentElement['2'].value,
            email: e.target.parentElement['3'].value,
            subscribe: e.target.parentElement['9'].ariaChecked,
        }
        try {
            API.postSightingReport(reportData)
            .then(data => {
                console.log(data)
                history.push(`/confirm`);
            })
        } catch (error) {
            console.log(error)
        }

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
         <Form maxWidth="size-3600">
                <Heading level={3}>Report a shark sighting</Heading>
                <TextField
                    label="Location"
                    value={userCurrentLocation.latitude ? userCurrentLocation.latitude + " " + userCurrentLocation.longitude : userCurrentLocation.location ? userCurrentLocation.location : "" }
                    isRequired
                    onChange={(e) => handleManualChangeLocation(e)}
                />
                

                <Checkbox onChange={handleUseCurrentLocation}>Use Current Location</Checkbox>
                <TextField label="Time of day (PST)" placeholder="9:00 AM" />
                <TextField
                    label="Email"
                    type="email"
                    inputMode="email"
                    optional
                />
                <Divider size="M" />
                <SharkPicker />
                <Checkbox>Join the Shark Stewards newsletter</Checkbox>
                <Button onClick={(e) => handleSubmitReport(e)} variant="cta" type="submit">
                    Submit
                </Button>
            </Form>


        </View>
    );
};

export default SightingForm;