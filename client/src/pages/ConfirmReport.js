import React from "react";
import { Link } from "react-router-dom";
import { Flex, View, Button } from "@adobe/react-spectrum";

const ConfirmReport = () => {
    return (
        <View
        paddingBottom="size-400"
        paddingTop="size-400"
        paddingStart="size-300"
        paddingEnd="size-300"
        flex="1 0 auto"
        UNSAFE_className="ConfirmReportContainer"
    >
     <h1>Confirmed</h1><br/>
     <h3>Thanks for contributing to keep our Californians, Sharks, and Oceans safe.</h3><br/>
     <h5>Your report will show on our map shortly</h5><br/>
    <Link to="/">
        <Button>Home</Button>
    </Link>
        <Button>Edu</Button>
    </View>
    );
};

export default ConfirmReport;
