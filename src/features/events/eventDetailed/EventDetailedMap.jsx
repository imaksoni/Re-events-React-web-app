import React from "react";
import GoogleMapReact from 'google-map-react';
import { Icon, Segment } from "semantic-ui-react";

function Marker(){
    return(<Icon name='marker' size='big' color='red'/>);
}

export default function EventDetailedMap({location}){
    return (
        <Segment attached='bottom' style={{padding:0}}>
            <div style={{ height: 300, width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyAw5rc-CFc3IG5k6U-Ve07nQlye1NiksA0" }}
            center={location}
            zoom={14}
          >
            <Marker lat={location.lat} lng={location.lng} />
          </GoogleMapReact>
        </div>
        </Segment>
      );
}