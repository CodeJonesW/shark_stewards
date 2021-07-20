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
    Section,
} from "@adobe/react-spectrum";
import { useHistory } from "react-router-dom";
import API from "../utils/api.js";
import React, { useEffect, useState } from "react";

import { sharks, SharkPicker, Shark } from "../components/SharkPicker";

type Location =
    | {
        // If user decides to input their own location
        location: string;
    }
    | {
        // If they decide to use current location
        latitude: number;
        longitude: number;
    };

const serialize_location = (loc: Location) => {
    if ("location" in loc) {
        return loc.location;
    } else {
        return loc.latitude + ", " + loc.longitude;
    }
};

interface FormData {
    // Corresponds to an index into the sharks array
    sharkType: number | undefined;
    location: Location | undefined;
    timeOfSighting: string | undefined;
    email: string | undefined;
    subscribe: boolean;
    description: string | undefined;
}

const SightingForm = () => {
    const history = useHistory();
    // hold form data

    const [formData, setFormData] = React.useState<FormData>({
        sharkType: undefined,
        location: undefined,
        timeOfSighting: undefined,
        email: undefined,
        subscribe: false,
        description: undefined,
    });
    const [useCurrentLocation, setUseCurrentLocation] = React.useState<boolean | null>(false);
    console.log(formData.timeOfSighting);

    const onCurrentLocationChange = (selected: boolean) => {
        // if the checkbox has already been checked clear input
        if (!selected) {
            setFormData({
                ...formData,
                location: {
                    location: "",
                },
            });
            setUseCurrentLocation(false);
        } else {
            // otherwise get location from geolocation api
            if ("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition(
                    function (position) {
                        // update current location state
                        setFormData({
                            ...formData,
                            location: {
                                latitude: position.coords.latitude,
                                longitude: position.coords.longitude,
                            },
                        });
                        setUseCurrentLocation(true);
                    },
                    function (error) {
                        console.error("Error Code = " + error.code + " - " + error.message);
                        setUseCurrentLocation(null);
                    }
                );

            } else {
                // Add a state here, so that checkbox can be disabled when geolocation is unavailable.
                console.log("Geolocation Not Available");
                setUseCurrentLocation(null);
            }
        }
    };

    const handleSubmitReport = async (e: React.FormEvent<Element>) => {
        e.preventDefault()
        console.log(e)
        // if form is updated make sure these are still valid >>
        // could be refactored later with a useRef
        if (formData.sharkType === undefined) {
            alert("Please select a Shark Type")
            return
        } else if (!formData.location) {
            alert("Please enter a location.")
            return
        }
        let reportData = {
            sharkType: sharks[formData.sharkType],
            location: serialize_location(formData.location),
            timeOfSighting: formData.timeOfSighting,
            email: formData.email,
            subscribe: formData.subscribe,
            description: formData.description
        }
        console.log(reportData)
        try {
            API.postSightingReport(reportData)
                .then(data => {
                    // console.log(data)
                    history.push(`/confirm`);
                })
        } catch (error) {
            console.log(error)
        }
    };
    return (
        <View
            paddingBottom="size-400"
            paddingTop="size-400"
            flex="1 0 auto"
            UNSAFE_className="homeContainer"
        >
            <Flex direction="row" flex>
                <View flex="1 1 auto" />
                <Form
                    maxWidth="size-4600"

                    necessityIndicator="label"
                    onSubmit={handleSubmitReport}
                    isEmphasized
                    flex="3 1 auto"
                >
                    <Heading level={1}>Report a shark sighting</Heading>
                    <TextField
                        label="Location Coordinates"
                        value={
                            formData.location
                                ? serialize_location(formData.location)
                                : undefined
                        }
                        isRequired
                        // Do we want a placeholder or should we just default to empty?
                        placeholder={"San Francisco Bay"}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                location: {
                                    location: e,
                                },
                            })
                        }
                    />
                    <Checkbox isDisabled={useCurrentLocation === null} isSelected={useCurrentLocation ?? false} onChange={onCurrentLocationChange}>
                        Use Current Location
                    </Checkbox>
                    <Picker
                        label="Time of Day (PST)"
                        selectedKey={formData.timeOfSighting}
                        onSelectionChange={(key) =>
                            setFormData({ ...formData, timeOfSighting: key as string })
                        }
                    >
                        <Item key="3:00am">3:00 AM</Item>
                        <Item key="4:00am">4:00 PM</Item>
                        <Item key="5:00am">5:00 AM</Item>
                        <Item key="6:00am">6:00 AM</Item>
                        <Item key="7:00am">7:00 AM</Item>
                        <Item key="8:00am">8:00 AM</Item>
                        <Item key="9:00am">9:00 AM</Item>
                        <Item key="10:00am">10:00 AM</Item>
                        <Item key="11:00am">11:00 AM</Item>
                        <Item key="12:00pm">12:00 PM</Item>
                        <Item key="1:00pm">1:00 PM</Item>
                        <Item key="2:00pm">2:00 PM</Item>
                        <Item key="3:00pm">3:00 PM</Item>
                        <Item key="4:00pm">4:00 PM</Item>
                        <Item key="5:00pm">5:00 AM</Item>
                        <Item key="6:00pm">6:00 PM</Item>
                        <Item key="7:00pm">7:00 PM</Item>
                        <Item key="8:00pm">8:00 PM</Item>
                        <Item key="9:00pm">9:00 PM</Item>
                        <Item key="10:00pm">10:00 PM</Item>
                        <Item key="11:00pm">11:00 PM</Item>
                        <Item key="12:00am">12:00 AM</Item>
                        <Item key="1:00am">1:00 AM</Item>
                        <Item key="2:00am">2:00 AM</Item>
                    </Picker>
                    <Divider size="M" />
                    <SharkPicker
                        shark_index={formData.sharkType}
                        set_shark_index={(s) => setFormData({ ...formData, sharkType: s })}
                    />
                    <Divider size="M" />
                    <TextArea label="Additional Information" isRequired={false}
                        value={formData.description}
                        onChange={e => setFormData({ ...formData, description: e })}
                    />
                    <TextField
                        label="Email"
                        type="email"
                        inputMode="email"
                        isRequired={false}
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e })}
                    />
                    <Checkbox isSelected={formData.subscribe}
                        onChange={e => setFormData({ ...formData, subscribe: e })}>Join the Shark Stewards newsletter</Checkbox>
                    <Button variant="cta" type="submit">
                        Submit
                    </Button>
                </Form>
                <View flex="1 1 auto" />
            </Flex>
        </View>
    );
};

export default SightingForm;

