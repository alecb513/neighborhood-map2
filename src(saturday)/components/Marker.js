import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

class Marker extends Component {

    render() {

        var map;
        var markers = [];

        var locations = [
            { title: 'Park Ave Penthous', location: { lat: 40.7713024, lng: -73.9632393 } },
            { title: 'Chelsea Loft', location: { lat: 40.7444883, lng: -73.9949465 } },
            { title: 'Union Square Open Floor Plan', location: { lat: 40.7347062, lng: -73.9895759 } },
            { title: 'East Village Hip Studio', location: { lat: 40.7281777, lng: -73.984377 } },
            { title: 'TriBeca Artsy Backelor Pad', location: { lat: 40.7195264, lng: -73.0089934 } },
            { title: 'Chinatown Homey Space', location: { lat: 40.7180628, lng: -73.9961237 } }
        ];



        for (var i = 0; i < locations.length; i++) {
            var position = locations[i].location;
            var title = locations[i].title;
            var marker = new google.maps.Marker({
                map: map,
                position: position,
                title: title,
                animation: google.maps.Animation.DROP,
                id: i
            });

            markers.push(marker);
            marker.addListener('click', function () {
                populateInfoWindow(this, largeInfowindow);
            });
        }


        return (
            <div>
                {Marker}
            </div>
        )
    }
}
export default Marker;