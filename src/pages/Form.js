import React from "react";
import { Link } from "react-router-dom";
import { Flex, View, Heading } from "@adobe/react-spectrum";
import Sighting from "../components/Sighting_Form";
const Home = () => {
    return (
        // <div id="homeContainer">
        //     <div id="startOptions">
        //     <Link className="homeLink" to="/sighting">
        //         <button className="button1">Report A Sighting</button>
        //     </Link>
        //     <Link className="homeLink" to="/">
        //         <button className="button1">Test Your Knowledge</button>
        //     </Link>
        //     <Link className="homeLink" to="/">
        //         <button className="button1"> #sharkstewards</button>
        //     </Link>
        //     </div>
        // </div>
        <View
            paddingBottom="size-400"
            paddingTop="size-400"
            paddingStart="size-300"
            paddingEnd="size-300"
            flex="1 0 auto"
            UNSAFE_className="homeContainer"
        >
            {/* <Flex direction="column" gap="size-100"> */}
            {/* <View backgroundColor="celery-600" height="size-800" /> */}
            <Heading level={3}>Report a shark sighting</Heading>
            <Sighting />
            {/* <View backgroundColor="seafoam-600" flex /> */}

            {/* <View backgroundColor="magenta-600" height="size-800" /> */}
            {/* </Flex> */}
        </View>
    );
};

export default Home;
