
// TYPES
export const FETCH_COUNTRIES_REQUEST = 'FETCH_COUNTRIES_REQUEST';
export const FETCH_COUNTRIES_SUCCESS = 'FETCH_COUNTRIES_SUCCES';
export const FETCH_COUNTRIES_ERROR = 'FETCH_COUNTRIES_ERROR';


// ACTIONS 
export const fetchCountriesRequest = () => {
    return{
        type: FETCH_COUNTRIES_REQUEST
    }
}

export const fetchCountriesSuccess = ( countries ) => {
    return{
        type: FETCH_COUNTRIES_SUCCESS,
        payload: countries
    }
}

export const fetchCountriesError = ( err ) => {
    return {
        type: FETCH_COUNTRIES_ERROR,
        payload: err
    }
}

export const getCountries = () => {
    return ( dispatch ) => {
        dispatch( fetchCountriesRequest() );
        fetch( 'https://restcountries.eu/rest/v2/all' )
            .then( response => response.json() )
            .then( json => dispatch( fetchCountriesSuccess( json ) ) )
            .catch( error => dispatch( fetchCountriesError('hubo un error :C') ) )
    }
}
