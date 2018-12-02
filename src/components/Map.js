import React, { Component } from "react";

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
//import { renderComponent } from 'recompose'; //<= WAS IN TURORIAL BUT NOT WORKING

const MyMapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
    
      defaultZoom={8}
      onClick={() => props.closeInfoWindow()}
      zoom={props.zoom}
      center={{ lat: props.center.lat, lng: props.center.lng }}>
      {props.filteredMarkers &&
        props.filteredMarkers
          .filter(marker => marker.isVisible)
          .map((marker, idx) => {
            const venueInfo = props.venues.find(
              venue => venue.id === marker.id
            );

            return (
              <Marker
                key={idx}
                position={{ lat: marker.lat, lng: marker.lng }}
                animation={
                  props.activeMarker === marker.id
                    ? window.google.maps.Animation.BOUNCE
                    : null
                }
                onClick={() => props.handleMarkerClick(marker)}>
                {marker.isOpen && venueInfo.bestPhoto && (
                  <InfoWindow onCloseClick={() => props.closeInfoWindow()}>
                    <React.Fragment>
                      <img
                        src={`${venueInfo.bestPhoto.prefix}200x200${
                          venueInfo.bestPhoto.suffix
                        }`}
                        alt={venueInfo}
                      />
                      <p>{venueInfo.name}}</p>
                    </React.Fragment>
                  </InfoWindow>
                )}
              </Marker>
            );
          })}
    </GoogleMap>
  ))
);

export default class Map extends Component {
  componentDidMount = () => {
    console.log(this.props);
  };
  render() {
    return (
      <MyMapComponent
        
        {...this.props}
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyBz491EHlYacMDqaP4b_nHSskvEfzLxj7c"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100vh` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        
      />
    );
  }
}
