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

import React from "react";
import { sharks, SharkPicker } from "../components/SharkPicker";

const SightingForm = () => {
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
                <Form maxWidth="size-4800" isRequired necessityIndicator="label">
                    <Heading level={3}>Report a shark sighting</Heading>

                    <TextField
                        label="Location"
                        placeholder="San Francisco Bay"
                        isRequired
                    />
                    <TextField label="Time of day (PST)" placeholder="9:00 AM" />

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
