
export const CARD_RANDOM_COUNTRIES = 'CARD_RANDOM_COUNTRIES';
export const CARD_ANSWER = 'CARD_ANSWER';
export const CARD_IS_ANSWER_SELECT = 'CARD_IS_ANSWER_SELECT';
export const CARD_IS_ANSWER_CORRECT = 'CARD_IS_ANSWER_CORRECT';
export const CARD_SCORE = 'CARD_SCORE';
export const CARD_SCORE_RESET = 'CARD_SCORE_RESET';
export const CARD_RES_INCORRECT = 'CARD_RES_INCORRECT';


export const cardRandomCountriesAction = ( countries ) => {
    return {
        type: CARD_RANDOM_COUNTRIES,
        payload: countries
    }
}

export const cardAnswerAction = ( answer ) => {
    return {
        type: CARD_ANSWER,
        payload: answer
    }
}

export const cardResIncorrect = ( res ) => {
    return {
        type: CARD_RES_INCORRECT,
        payload: res
    }
}

export const cardIsAnswerSelectAction = ( isSelect ) => {
    return {
        type: CARD_IS_ANSWER_SELECT,
        payload: isSelect
    }
}

export const cardIsAnswerCorrectAction = ( isCorrect ) => {
    return {
        type: CARD_IS_ANSWER_CORRECT,
        payload: isCorrect
    }
}

export const cardScore = ( ) => {
    return {
        type: CARD_SCORE
    }
}

export const cardScoreReset = () => {
    return {
        type: CARD_SCORE_RESET
    }
}

