"use client";

import { UserLocationContext } from "@/context/UserLocationContext";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
import React, { useContext } from "react";

const GoogleMapsView = () => {
  const { userLocation, setUserLocation } = useContext(UserLocationContext);

  const containerStyle = {
    width: "100%",
    height: "70vh",
  };

  return (
    <div>
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={userLocation}
          zoom={10}
        >
          <MarkerF
            position={userLocation}
            icon={{
              url: "/user-location.png",
              scaledSize: { width: 50, height: 50 },
            }}
          />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default GoogleMapsView;
