const INITIAL_STATE = { address: '', location: {} }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'MAP_FETCHED':
            return { ...state, location: action.payload.data.results[0].geometry.location }
        case 'DESCRIPTION_CHANGED':
            return { ...state, address: action.payload }
        case 'MAP_CLEARED':        
            return { ...state, address: INITIAL_STATE.address, location: INITIAL_STATE.location }
        default:
            return state
    }
}