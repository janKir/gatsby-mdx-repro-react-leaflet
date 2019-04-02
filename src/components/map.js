import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

export default () => {
  if (typeof window !== "undefined") {
    const position = [40.73061, -73.935242];
    return (
      <Map center={position} zoom={15} style={{ height: "500px" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="..."
        />
        <Marker position={position}>
          <Popup>My Marker2</Popup>
        </Marker>
      </Map>
    );
  }
  return <p>Map wird geladen</p>;
};
