import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';


const SimpleGoogleMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: props.lat, lng: props.lon }}
  />
));

export default class GoogleMapElement extends Component {

  render() {
    return (
      <SimpleGoogleMap
        containerElement={
          <div style={{ height: `100%` }} />
        }
        mapElement={
          <div style={{ height: `100%` }} />
        }
      />
    );
  }
}