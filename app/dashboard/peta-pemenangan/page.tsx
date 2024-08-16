"use client";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "leaflet/dist/leaflet.css";

// let map = L.map("map").setView([37.8, -96], 4);

// interface MyMapProps {
//   position: LatLngExpression;
//   zoom: number;
// }

function PetaPemenangan() {
  return (
    <div>
      <h1>Peta Pemenangan</h1>
      <MapContainer center={[1.492, 124.839]} zoom={12} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[1.492, 124.839]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default PetaPemenangan;
