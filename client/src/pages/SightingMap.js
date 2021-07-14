import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { Flex, View, Heading, ButtonGroup, Button, Image, Grid } from "@adobe/react-spectrum";
import API from "../utils/api/api.js"

const SightingMap = () => {
    useEffect(() => {
        async function getData(){
            const sightingData = await API.getSightingData()
            console.log(sightingData)
        }
        getData()
    }, [])

    return (
        <View
            paddingBottom="size-400"
            paddingTop="size-400"
            paddingStart="size-300"
            paddingEnd="size-300"
            flex="1 0 auto"
            UNSAFE_className="sightingMapContainer"
        >
 
        
        </View>
    );
};

export default SightingMap;
