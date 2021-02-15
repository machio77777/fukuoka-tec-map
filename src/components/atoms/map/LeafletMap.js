import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import { show } from '../json/company';

const LeafletMap = () =>  {

  // 福岡市役所
  const center = [33.590243, 130.401786];
  // TECリスト
  const companys = show();

  return (
    <div>
      <MapContainer center={center} zoom={15} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {companys.map((company) => (
          <Marker key={company.id} position={company.idx}>
            <Popup>
              <a href={company.url} target="_blank" rel="noreferrer">{company.name}</a>
            </Popup>
          </Marker>
        )
      )}
      </MapContainer>
    </div>
  )
}

export default LeafletMap;