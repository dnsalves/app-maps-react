import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

import Env from '../consts'

export class MapContainer extends Component {

    render() {
        var center = this.props.center.lat ? this.props.center : { lat: -23.533773, lng: -46.625290 }
        return (
            <div className="card" style={{ height: '600px', width: '100%' }}>
                <Map google={this.props.google} zoom={this.props.center.lat ? 16 : 14} center={center} >

                    <Marker
                        title={'The marker`s title will appear as a tooltip.'}
                        name={'SOMA'}
                        position={this.props.center} />
                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: Env.GOOGLE_KEY_SERVER
})(MapContainer)