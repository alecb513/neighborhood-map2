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
      filteredMarkers: [],
      markers: [],
      center: [],
      zoom: 14,
      activeMarker: null,
      query: ""
    };
  }

  closeAllMarkers = () => {
    const markers = this.state.markers.map(marker => {
      marker.isOpen = false;
      return marker;
    });
    this.setState({
      markers: Object.assign(this.state.markers, markers),
      activeMarker: null
    });
  };

  handleMarkerClick = marker => {
    this.closeAllMarkers();
    marker.isOpen = true;
    this.setState({
      markers: Object.assign(this.state.markers, marker),
      activeMarker: marker.id
    });
    const venue = this.state.venues.find(venue => venue.id === marker.id);

    SquareAPI.getVenueDetails(marker.id).then(res => {
      const newVenue = Object.assign(venue, res.response.venue);
      this.setState({ venues: Object.assign(this.state.venues, newVenue) });
      console.log(marker);
    });
  };

  handleListItemClick = venue => {
    console.log(venue);
    const marker = this.state.markers.find(marker => marker.id === venue.id);
    this.handleMarkerClick(marker);
    //console.log(venue + ' click working');
  };

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
      this.setState({ venues, center, markers, filteredMarkers: markers }, () =>
        this.setState({ filteredVenues: venues })
      );
    });
  }

  handleQuery = query => {
    this.setState({ query }, () => this.filterVenues(query));
  };

  filterVenues = query => {
    const venues = [...this.state.venues];
    const filteredVenues = [];
    venues.forEach(venue => {
      if (venue.name.toLowerCase().includes(query.toLowerCase())) {
        filteredVenues.push(venue);
      }
    });
    console.log(filteredVenues);

    this.setState(
      {
        filteredVenues
      },
      () => this.displayMarkers(filteredVenues, query)
    );
  };

  displayMarkers = venues => {
    const filteredMarkers = [...this.state.markers];
    const newMarkers = [];

    filteredMarkers.forEach(marker => {
      if (marker) {
        marker.isVisible = false;
        newMarkers.push(marker);
      }
    });
    this.setState({ filteredMarkers: newMarkers });
    venues.map(venue => {
      filteredMarkers.map(marker => {
        if (venue.id === marker.id) {
          marker.isVisible = true;
          filteredMarkers.push(marker);
        }
      });
    });
    this.setState({ filteredMarkers: newMarkers });
  };

  closeInfoWindow = () => {
    const newMarkers = this.state.markers.map(marker => {
      marker.isOpen = false;
      return marker;
    });
    this.setState({
      markers: newMarkers,
      activeMarker: null
    });
  };

  render() {
    return (
      <div className="App">
        <Menu
          {...this.state}
          handleQuery={this.handleQuery}
          handleListItemClick={this.handleListItemClick}
          filteredVenues={this.state.filteredVenues}
        />

        <Map
          {...this.state}
          handleMarkerClick={this.handleMarkerClick}
          activeMarker={this.state.activeMarker}
          closeInfoWindow={this.closeInfoWindow}
        />
      </div>
    );
  }
}
export default App;
let menuItem = document.querySelectorAll("li");
let i;
for (i = 0; i < menuItem.length; i++) {
  console.log(i);
}
