import React, { Component } from "react";
import "./App.css";

import Map from "./components/Map";
import Menu from "./components/Menu";

import SquareAPI from "./API/index";

class App extends Component {
  constructor() {
    super();
    this.state = {
      venues: [],
      filteredVenues: [],
      markers: [],
      center: [],
      zoom: 14
    };
  }

  closeAllMarkers = () => {
    const markers = this.state.markers.map(marker => {
      marker.isOpen = false;
      return marker;
    });
    this.setState({markers: Object.assign(this.state.markers, markers)});
  }

  handleMarkerClick = (marker)=>{
    this.closeAllMarkers();
    marker.isOpen = true;
    this.setState({markers: Object.assign(this.state.markers,marker)});
    const venue = this.state.venues.find(venue => venue.id === marker.id);

    SquareAPI.getVenueDetails(marker.id).then(res => {
    const newVenue = Object.assign(venue, res.response.venue);
    this.setState({venues: Object.assign(this.state.venues, newVenue)});
    console.log(marker);
  });
};

  handleListItemClick = venue => {
    //const marker = this.state.markers.find(marker => marker.id === venue.id);
    //this.handleMarkerClick(marker);
    console.log(venue + ' click working');
  }

  componentWillMount() {
    SquareAPI.search({
      near: "New York, NY",
      query: "Pizza",
      limit: 10 // change to 10
    }).then(results => {
      //console.log(results);
      const { venues } = results.response;
      //console.log(venues);
      const { center } = results.response.geocode.feature.geometry;
      console.log(center);
      const markers = venues.map(venue => {
        return {
          lat: venue.location.lat,
          lng: venue.location.lng,
          isOpen: false,
          isVisible: true,
          id: venue.id
        };
      });
      this.setState({ venues, center, markers }, () =>
        this.setState({ filteredVenues: venues })
      );
    });
  };

  render() {
    return (
      <div className="App">
        <Menu {...this.state} handleListItemClick={this.handleListItemClick} filteredVenues={this.state.filteredVenues}/>
       
        <Map {...this.state} handleMarkerClick={this.handleMarkerClick}/>
      </div>
    );
  }
}
export default App;
let menuItem = document.querySelectorAll('li');
let i;
for(i=0;i<menuItem.length;i++){
  console.log(i);
}
