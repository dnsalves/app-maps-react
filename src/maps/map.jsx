import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react';

export default class Map extends Component {
    renderMarkers(map, maps) {
        let marker = new maps.Marker({
            position: this.props.center,
            map,
            title: 'Hello World!'
        });
    }

    render() {
        const AnyReactComponent = ({ text }) => <div>{text}</div>;
        return (
            <div className="card" style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    defaultCenter={{ lat: 59.95, lng: 30.33 }}
                    defaultZoom={15}
                    bootstrapURLKeys={{ key: "AIzaSyD5qaGFVJBRiHmFAU7BRKKoSTcixourbBA" }}
                    center={this.props.center}
                    onGoogleApiLoaded={({ map, maps }) => this.renderMarkers()}
                >
                    <AnyReactComponent
                        lat={this.props.center.lat}
                        lng={this.props.center.lng}
                        text={'Kreyser Avrora'}
                    />
                </GoogleMapReact>
            </div>
        )
    }
}