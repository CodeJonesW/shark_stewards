import React from "react";
import { Link } from "react-router-dom";
import { Flex, View, Heading, ButtonGroup, Button, Image, Grid } from "@adobe/react-spectrum";

const Welcome = () => {
    return (
        <View
            paddingBottom="size-400"
            paddingTop="size-400"
            paddingStart="size-300"
            paddingEnd="size-300"
            flex="1 0 auto"
            UNSAFE_className="WelcomeContainer"
        >
          
            <Grid
            areas={['header  header', 'sidebar content', 'footer  footer']}
            columns={['1fr', '3fr']}
            rows={['size-1000', 'size-1000', 'auto']}
            height="size-6000"
            gap="size-100">
            <View gridArea="header" >
            <Heading level={3}>Protect Yourself, Sharks, and our Ocean.</Heading>
            </View>
            <View backgroundColor="blue-600" gridArea="sidebar" />
            <View backgroundColor="purple-600" gridArea="content" />
            <View
                paddingBottom="size-400"
                paddingTop="size-400"
                paddingStart="size-300"
                paddingEnd="size-300"
                flex="1 0 auto" 
                gridArea="footer" 
            >
                <ButtonGroup>
                    <Button variant="primary">Learn about Local Sharks</Button>
                    <Button variant="secondary">Report a Shark Sighting</Button>
                    <Button variant="secondary">Remind me later</Button>
                </ButtonGroup>
            </View>
            </Grid>
            
        
        </View>
    );
};

export default Welcome;
