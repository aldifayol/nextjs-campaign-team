"use client";

import React from "react";

// Leaflet
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import * as mapDataSulut from "@/lib/SULAWESI_UTARA.json";
import { FeatureCollection } from "geojson";
import "leaflet/dist/leaflet.css";

function MapOne() {
  const dapilStyle = {
    fillColor: "red",
    fillOpacity: 0.8,
    color: "black",
    weight: 2,
  };

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-7">
      <MapContainer
        style={{ backgroundColor: "black" }}
        center={[1.498859, 124.258057]}
        zoom={8}
        scrollWheelZoom={false}
      >
        {/* <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        /> */}
        <GeoJSON style={dapilStyle} data={mapDataSulut as FeatureCollection} />
      </MapContainer>
    </div>
  );
}

export default MapOne;
