import React, { Component } from 'react'
import { connect } from 'react-redux';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

class LeafletMap extends Component  {

  render() {

    // 企業一覧
    const companys = this.props.company;

    // 地図中央値
    const center = [33.590378, 130.409284];

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
}

export default connect((state) => state)(LeafletMap);