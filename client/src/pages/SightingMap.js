import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Flex, View, Heading, ButtonGroup, Button, Image, Grid } from "@adobe/react-spectrum";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import API from "../utils/api";

const containerStyle = {
  width: '400px',
  height: '722px'
};

const center = {
  lat: 36.644663,
  lng: -122.007602
};

const onLoad = marker => {
  console.log('marker: ', marker)
}

const SightingMap = () => {
  const [sightingLocations, setSightingLocations] = useState([])

  useEffect(() => {
    async function getData() {
      const sightingData = await API.getSightingData()
      setSightingLocations(sightingData)
    }
    getData()
  }, [])
  return (
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={6}
      >
        {sightingLocations ? sightingLocations.map((obj, index) => {
          return <Marker
            key={index}
            onLoad={onLoad}
            position={{
              lat: parseFloat(obj.location.split(" ")[0]),
              lng: parseFloat(obj.location.split(" ")[1])
            }}
          />
        }) : null}

        <></>
      </GoogleMap>
    </LoadScript>
  )
};

export default SightingMap;
