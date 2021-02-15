import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import Makers from './Makers';

const LeafletMap = () =>  {

  // 福岡市役所
  const center = [33.590243, 130.401786];

  return (
    <div>
      <MapContainer center={center} zoom={15} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Makers />
      </MapContainer>
    </div>
  )
}

export default LeafletMap;