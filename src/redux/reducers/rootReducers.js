import { combineReducers } from "redux";

import { getCountriesReducers } from './getCountriesReducers';
import { cardCountriesReducers } from './cardCountriesReducers';

export const rootReducers = combineReducers({
    getCountriesReducers,
    cardCountriesReducers
})