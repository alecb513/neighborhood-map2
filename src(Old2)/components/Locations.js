import React, {Component} from 'react';

class Locations extends Component {

    render () {

        let Locations = [
            { title: 'Park Ave Penthous', location: { lat: 40.7713024, lng: -73.9632393 } },
            { title: 'Chelsea Loft', location: { lat: 40.7444883, lng: -73.9949465 } },
            { title: 'Union Square Open Floor Plan', location: { lat: 40.7347062, lng: -73.9895759 } },
            { title: 'East Village Hip Studio', location: { lat: 40.7281777, lng: -73.984377 } },
            { title: 'TriBeca Artsy Backelor Pad', location: { lat: 40.7195264, lng: -73.0089934 } },
            { title: 'Chinatown Homey Space', location: { lat: 40.7180628, lng: -73.9961237 } }
        ];

        return (
            <div>
           
         {Locations}
            
            </div>
        )
    }

}

export default Locations; 



