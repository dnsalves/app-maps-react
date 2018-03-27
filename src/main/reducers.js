import { combineReducers } from 'redux'

import MapsReducer from '../maps/mapsReducer'

const rootReducer = combineReducers({
    maps: MapsReducer
})

export default rootReducer