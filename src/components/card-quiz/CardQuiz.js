import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import { getRandomContries } from '../../helpers/getRandomContries';
import { cardAnswerAction, cardIsAnswerCorrectAction, cardIsAnswerSelectAction, cardRandomCountriesAction} from '../../redux/actions/cardCountriesActions';

import { ButtonsAnswers } from './ButtonsAnswers';
import data from '../../database/dataCountries.json';

export const CardQuiz = () => {
    const dispatch = useDispatch();
    let history = useHistory();
    
    const { cardCountries, answer, isAnswerCorrect} = useSelector( state => state.cardCountriesReducers );

    
    useEffect( () => {
        const countries = getRandomContries( data );
        dispatch( cardRandomCountriesAction( countries ) )
        const answer = parseInt( (Math.random() * (3 - 1 + 1)) + 1 );
        dispatch( cardAnswerAction( answer ) ) 
        console.log('oli jeje []', countries);
    }, []);

    const handleClickNext = () => {
        const countries = getRandomContries( data );
        dispatch( cardRandomCountriesAction(countries) ); 
        const answer = parseInt( (Math.random() * (3 - 1 + 1)) + 1 );
        dispatch( cardAnswerAction( answer ) );
    
        dispatch( cardIsAnswerCorrectAction(null) );
        dispatch( cardIsAnswerSelectAction(false) );

        history.push('/country-quiz');
    }

    return(
        <div className="container-card">

            

           { 
                <div className="card animate__animated animate__fast animate__backInDown">
                    <img className='img-quiz' src={ `${process.env.PUBLIC_URL}/img/undraw_adventure_4hum 1.svg` } alt='imagen'/>
                    <h2 className="title-quiz">La capital de { cardCountries.length > 1 && cardCountries[answer].country } es:</h2>

                    <ButtonsAnswers />

                    {
                        isAnswerCorrect && <h2 className='button-next' onClick={ handleClickNext }> NEXT </h2>
                    }
                </div>                               
            }
        </div>
    )
}