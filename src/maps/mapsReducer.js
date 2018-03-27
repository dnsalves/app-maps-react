const INITIAL_STATE = { address: '', location: {} }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'MAP_FETCHED':
            console.log(action);
            return { ...state, location: action.payload.data.results[0].geometry.location }
        case 'DESCRIPTION_CHANGED':
            console.log(action);

            return { ...state, address: action.payload }

        default:
            return state
    }
}