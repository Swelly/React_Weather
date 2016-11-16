import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';


const SimpleGoogleMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: parseFloat(props.lat), lng: parseFloat(props.lon) }}
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