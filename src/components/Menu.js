import React, { Component } from "react";

class Menu extends Component {  
  render() {

    let firstTab = 0;
    
    return (
      <div style={this.sideBarStyle} className="menu">
        <h1>Filter Restaurants</h1>
        <input
          type="search"
          id="search"
          placeholder="Filter Venues"
          value={this.props.value}
          onChange={e => this.props.handleQuery(e.target.value)}
        />
        <div>
          <ul 
            tabIndex={firstTab}
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
              return (
                <li
                  tabIndex={firstTab++}
                  key={venue.name}
                  onClick={() => this.props.handleListItemClick(venue)}>
                  {venue.name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Menu;
