"use client";
import React from "react";
import { MapContainer, TileLayer, Popup, GeoJSON } from "react-leaflet";

import "leaflet/dist/leaflet.css";
// import * as mapDataManado from "../../lib/KOTA_MANADO.json";
// import * as mapDataBitung from "../../lib/KOTA_BITUNG.json";
// import * as mapDataTomohon from "../../lib/KOTA_TOMOHON.json";
// import * as mapDataMinahasa from "../../lib/KAB_MINAHASA.json";
import * as mapDataSulut from "../../lib/SULAWESI_UTARA.json";

// console.log(mapData);

// let map = L.map("map").setView([37.8, -96], 4);

// interface MyMapProps {
//   position: LatLngExpression;
//   zoom: number;
// }

const redOptions = { color: "red" };
// const mapData: GeoJsonObject = KOTA_MANADO.features;

const dapilStyle = {
  fillColor: "red",
  fillOpacity: 0.8,
  color: "black",
  weight: 2,
};

function PetaPemenangan() {
  return (
    <div>
      <h1 className="font-extrabold">Peta Pemenangan</h1>

      <MapContainer
        style={{
          marginTop: "30px",
          backgroundColor: "white",
          border: "1px solid grey",
          borderRadius: "10px",
        }}
        center={[1.866, 124.678]}
        zoom={8}
        scrollWheelZoom={false}>
        {/* <GeoJSON style={dapilStyle} data={mapDataManado.features} />
        <GeoJSON style={dapilStyle} data={mapDataBitung.features} />
        <GeoJSON style={dapilStyle} data={mapDataTomohon.features} />
        <GeoJSON style={dapilStyle} data={mapDataMinahasa.features} /> */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GeoJSON style={dapilStyle} data={mapDataSulut.features} />
      </MapContainer>
    </div>
  );
}

export default PetaPemenangan;
