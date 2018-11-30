import React, { Component } from "react";

class Menu extends Component {
  sideBarStyle = {
    position: "absolute",
    width: "25%",
    minWidth: "75px",
    height: "100%",
    backgroundColor: "rgba(222, 222, 222, 0.9)",
    zIndex: 100
  };
  render() {
    return (
      <div className="menu"style={this.sideBarStyle}>
        <h1>Filter Restaurants</h1>
        <input type="search" id='search-bar'/>
        <div>
          <ul
            style={{
              listStyleType: "none",
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: 0,
              marginTop: "1.5rem"
            }}>
            {this.props.filteredVenues.map(venue => {
              //console.log(venue);
              return <li key={venue.name}>{venue.name}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Menu;
