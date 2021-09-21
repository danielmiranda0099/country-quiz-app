import { CARD_ANSWER, CARD_IS_ANSWER_SELECT, CARD_RANDOM_COUNTRIES, CARD_IS_ANSWER_CORRECT, CARD_SCORE } from "../actions/cardCountriesActions";

const initialState = {
    countries: [],
    answer: null,
    isAnswerCorrect: null,
    isAnswerSelect: false,
    score: 0
}

export const cardCountriesReducers = ( state=initialState, action ) => {

    switch (action.type) {
        case CARD_RANDOM_COUNTRIES:
            return {
                ...state,
                countries: action.payload
            }
        
        case CARD_ANSWER:
            return {
                ...state,
                answer: action.payload
            }
        case CARD_IS_ANSWER_SELECT:
            return {
                ...state,
                isAnswerSelect: action.payload
            }
        case CARD_IS_ANSWER_CORRECT:
            return {
                ...state,
                isAnswerCorrect: action.payload
            }
        case CARD_SCORE:
            return {
                ...state,
                score: state.score + 1
            }
        default:
            return state;
    }
}

