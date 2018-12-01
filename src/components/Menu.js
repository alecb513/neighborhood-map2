import React, { Component } from "react";

class Menu extends Component {
  sideBarStyle = {
   
  }
  render() {
    return (
      <div style={this.sideBarStyle}className="menu">
        <h1>Filter Restaurants</h1>
        <input type="search" id="search" placeholder="Filter Venues"/>
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
              return <li key={venue.name}>{venue.name} onClick={() => this.props.handleListItemClick(this.props)}{this.props.name}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Menu;
