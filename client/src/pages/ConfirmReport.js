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
     <h1>Confirmed</h1>
  
    <Link to="/">
        <Button>Home</Button>
    </Link>
       <Button>Edu</Button>
    </View>
    );
};

export default ConfirmReport;
