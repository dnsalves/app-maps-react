import React, { Component } from 'react'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getMap, changeDescription, clear } from './mapsAction'
import LabelAndInput from '../common/form/labelAndInput'
import Map from './map'
import Grid from '../common/layout/grid'

import 'modules/bootstrap/dist/css/bootstrap.min.css'
import '../../public/app.css'

class Maps extends Component {

    render() {        
        const { getMap, changeDescription, clear, address, location } = this.props        
        const center = location || { lat: 59.95, lng: 30.33 }
        return (
            <div className="container">
                <div className="card px-4 py-3 mt-5 mb-2">
                    <div className="card-header bg-transparent border-0">
                        <button type="button" className="close float-right" aria-label="Close" onClick={() => clear()}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <LabelAndInput value={address} change={changeDescription} name="address" label="Informe um endereço" cols="10 10 10 10" placeholder="Ex.: Avenida paulista, 1000" />
                            <a onClick={() => getMap(address)} className="btn btn-primary btn-md active btn-control" role="button" aria-pressed="true">Pesquisar</a>
                        </div>
                    </div>
                </div>
                <Map center={location} />
            </div >
        )
    }
}

const mapStateToProps = state => ({ address: state.maps.address, location: state.maps.location })
const mapDispatchToProps = dispatch => bindActionCreators({ getMap, changeDescription, clear }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Maps)
