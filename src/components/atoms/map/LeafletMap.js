import React, { Component } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import { show } from '../json/company';

export default class LeafletMap extends Component {

  render() {

    // 福岡市役所
    const center = [33.590243, 130.401786];

    // 福岡に本社・支社を持つ企業リスト
    const companys = show();

    return (
      <div>
        <MapContainer center={center} zoom={15} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {/* Map上にTEC企業をピン表示 */}
          {companys.map((company) => (
            <Marker position={company.idx}>
            <Popup>
              <a href={company.url} target="_blank" rel="noreferrer">{company.name}</a>
            </Popup>
          </Marker>
          ))}
        </MapContainer>
      </div>
    )
  }
}