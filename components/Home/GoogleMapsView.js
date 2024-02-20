import { GoogleMap, LoadScript } from "@react-google-maps/api";
import React from "react";

const GoogleMapsView = () => {
  const containerStyle = {
    width: "100%",
    height: "70vh",
  };
  const coordinate = { lat: -34.397, lng: 150.644 };
  return (
    <div>
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={coordinate}
          zoom={10}
        ></GoogleMap>
      </LoadScript>
    </div>
  );
};

export default GoogleMapsView;
