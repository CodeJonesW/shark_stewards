import React from "react";
import { Form, TextField, Checkbox, Button } from "@adobe/react-spectrum";

const SightingForm = () => {
    return (
        <Form maxWidth="size-3600" flex="1 0 auto">
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
    );
};

export default SightingForm;
