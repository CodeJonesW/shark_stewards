import React from "react";
import { Link } from "react-router-dom";
import { Flex, View, Heading, ButtonGroup, Button, Image, Grid } from "@adobe/react-spectrum";
import image1 from "../assets/images/shark2.png"
import image2 from "../assets/images/beach.jpg"
const Welcome = () => {
    return (
        <View
            paddingBottom="size-400"
            paddingTop="size-400"
            paddingStart="size-300"
            paddingEnd="size-300"
            flex="1 0 auto"
            UNSAFE_className="welcomeContainer"
        >
          
            <Grid
            areas={['header  header', 'sidebar content', 'footer  footer']}
            columns={['1fr', '3fr']}
            rows={['size-1000', 'size-2500', 'auto']}
            height="size-6000"
            gap="size-100">
            <View gridArea="header" >
                <Heading level={3}>Protect Yourself, Sharks, and our Ocean.</Heading>
            </View>
            <View  gridArea="sidebar" >
                <Heading level={4}>Try our Free Shark Education for Californians!</Heading>
            </View>
            <View  gridArea="content">
            <Flex width="100%" height="auto" maxHeight="350px">
                <Image id="sharkImg" margin="3%" UNSAFE_className="welcomeSharkImg" objectFit="cover" alt="shark" src={image1}></Image>
                <Image margin="3%" UNSAFE_className="welcomeSharkImg" objectFit="cover" alt="beach" src={image2}></Image>
            </Flex>
                
            </View>
            <View
                paddingBottom="size-400"
                paddingTop="size-400"
                paddingStart="size-300"
                paddingEnd="size-300"
                flex="1 0 auto" 
                gridArea="footer" 
            >
                <ButtonGroup>
                    <Link to="/">
                        <Button margin="4%" height="40%" variant="primary">Learn about Local Sharks</Button>
                    </Link>
                    <Link to="/reportSighting">
                        <Button margin="4%" height="40%" variant="primary">Report a Shark Sighting</Button>
                    </Link>
                    
                </ButtonGroup>
    
            </View>
            </Grid>
            
        
        </View>
    );
};

export default Welcome;
