import axios from 'axios'

import Env from '../consts'

const BASE_URL = 'https://maps.googleapis.com/maps/api/geocode/json'

export function getMap(address){
    const url = `${BASE_URL}?v=3.31&key=${Env.GOOGLE_KEY}&address=${address}`
    const request = axios.post(url)
    return {
        type: 'MAP_FETCHED',
        payload: request
    }
}

export const changeDescription = e => ({
    type: 'DESCRIPTION_CHANGED',
    payload : e.target.value
})