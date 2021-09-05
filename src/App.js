import './App.css';
import {Map, Marker, Popup, TileLayer} from 'react-leaflet'
import {geolocated} from 'react-geolocated'
import React from 'react';

const DEFAULT_LAT = 37.538
const DEFAULT_LONG =  126.974


class App extends React.Component {
  render(){
    const lat = this.props.coords ? this.props.coords.latitude : DEFAULT_LAT
    const long = this.props.coords ? this.props.coords.longitude : DEFAULT_LONG
  
    return (
      <div className="App">
        <Map className="map-container" center={[lat, long]} zoom={12}>
          <TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy<a href='http://openstreetmap.org'>OpenStreetMap</a>">
          </TileLayer>
          {
            this.props.coords ?
            <Marker position={[lat, long]}>
              <Popup>
                You are here!
              </Popup>
            </Marker>
            : 
            <div>
              Loading...
            </div>
          }
        </Map>
      </div>
    );
  }
  
}

export default geolocated({
  positionOptions:{
    enableHighAccuracy: false
  },
  userDecisionTimeout:1000
})(App)

// 1. inlstall Leaflet 
// 2. Set Defaults Lang, Long
// 3. Show Map
// 4. style Map
// 5. get my location -> npm install react-geolocated
// 6. showing Loading || Marker -> locate  Marker position
// 7. show PopUp in Marker
// 8. using hoc (higher order component =  geolocated)
// 9. set positionOptions of geolocated
// 10. using this.props.coords => change into class component