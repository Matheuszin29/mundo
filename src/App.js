

import {Polygon , MapContainer, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import {statesData} from './data';
//import { cordinates } from './poligon';






function App() {


  /*statesData.features.map((state)=>{
    const cordinates = state.geometry.coordinates[0].map((item) => [item[1], item[0]]);
    module.exports = cordinates;

  });*/


  return (

    <MapContainer center={[51.505, -0.09]} zoom={6} style={{ width: '100vw', height: '100vh' }} scrollWheelZoom={false}>
      <TileLayer
       attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {
      statesData.features.map((state)=>{
       const cordinates = state.geometry.coordinates[0].map((item) => [item[1], item[0]]);

        <Polygon
          pathOptions={{
            fillColor: '#FD8D3C',
            fillOpacity: 0.7,
            weight: 2,
            opacity: 1,
            dashArray: 3,
            color: 'white'
          }}
          positions={cordinates}
          eventHandlers={{
            mouseover: (e) => {
              const layer = e.target;
              layer.setStyle({
                dashArray: "",
                fillColor: "#BD0026",
                fillOpacity: 0.7,
                weight: 2,
                opacity: 1,
                color: "white",
              })
            },
            mouseout: (e) => {
              const layer = e.target;
              layer.setStyle({
                fillOpacity: 0.7,
                weight: 2,
                dashArray: "3",
                color: 'white',
                fillColor: '#FD8D3C'
              });
            },
            click: (e) => {

            }
          }}
        />

        })
      }


    </MapContainer>
   
  );
};


export default App;
