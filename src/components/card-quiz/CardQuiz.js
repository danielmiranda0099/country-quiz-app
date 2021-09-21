import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRandomContries } from '../../helpers/getRandomContries';
import { cardAnswerAction, cardIsAnswerCorrectAction, cardIsAnswerSelectAction, cardRandomCountriesAction } from '../../redux/actions/cardCountriesActions';
import { getCountries } from '../../redux/actions/getCountriesAction';

import { ButtonsAnswers } from './ButtonsAnswers';

export const CardQuiz = () => {
    const dispatch = useDispatch();

    const countriesAll = useSelector( state => state.getCountriesReducers.countries);
    const cardCountries = useSelector( state => state.cardCountriesReducers.countries)
    const { answer, isAnswerCorrect } = useSelector( state => state.cardCountriesReducers );

    useEffect( () => {
        dispatch( getCountries() ); 
        const answer = parseInt( (Math.random() * (3 - 1 + 1)) + 1 );
        dispatch( cardAnswerAction( answer ) )
    }, []);

    const handleClickNext = () => {
        const countries = getRandomContries( countriesAll );
        dispatch( cardRandomCountriesAction(countries) ); 
        const answer = parseInt( (Math.random() * (3 - 1 + 1)) + 1 );
        dispatch( cardAnswerAction( answer ) );
    
        dispatch( cardIsAnswerCorrectAction(null) );
        dispatch( cardIsAnswerSelectAction(false) );
    }

    return(
        <>
        { 
            <div className="card-quiz animate__animated animate__fast animate__backInDown">
                <h2 className="title-quiz">la capital de { cardCountries.length > 1 && cardCountries[answer].name } es</h2>

                <ButtonsAnswers />

                {
                    isAnswerCorrect && <h2 onClick={ handleClickNext }> NEXT </h2>
                }
            </div>                               
        }
        </>
    )
}