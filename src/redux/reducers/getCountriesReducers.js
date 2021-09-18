import { FETCH_COUNTRIES_ERROR, FETCH_COUNTRIES_REQUEST, FETCH_COUNTRIES_SUCCESS } from "../actions/getCountriesAction";


const initialState = {
    loading: false,
    countries: [],
    error: ''
}

export const getCountriesReducers = ( state=initialState, action ) => {
    switch (action.type) {
        case FETCH_COUNTRIES_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_COUNTRIES_SUCCESS:
            return {
                loading: false,
                countries: action.payload,
                error: ''
            }
        case FETCH_COUNTRIES_ERROR:
            return {
                loading: false,
                countries: [],
                error: action.payload
            }
    
        default:
            return state;
    }
}