import React, { useState } from 'react'
import { Marker, Popup } from 'react-leaflet'

import { show } from '../json/company';

const Makers = () => {

  const [companys, setCompanys] = useState(show());
  return (
    <>
      {/* Map上にTEC企業をピン表示 */}
      {companys.map((company) => (
        <Marker position={company.idx}>
          <Popup>
            <a href={company.url} target="_blank" rel="noreferrer">{company.name}</a>
          </Popup>
        </Marker>
        )
      )}
    </>
  );
}

export default Makers;