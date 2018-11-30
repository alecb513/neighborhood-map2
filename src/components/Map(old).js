import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';


class DisplayMap extends Component {

  render() {
    

    



    const style = {
      height: '100%',
      width: '100%'
    }

    return (
      <div>
        <Map
          google={this.props.google}
          initialCenter={{ lat: 40.7713024, lng: -73.9632393 }}
          zoom={13}
          style={style}>
        </Map>
      </div>
    )
  }
}
export default GoogleApiWrapper({ apiKey: "AIzaSyBz491EHlYacMDqaP4b_nHSskvEfzLxj7c" })(DisplayMap);