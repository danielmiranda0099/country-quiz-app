import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { cardIsAnswerCorrectAction, cardIsAnswerSelectAction, cardScoreReset } from "../../redux/actions/cardCountriesActions";

export const CardQuizScore = () => {
    const dispatch = useDispatch();
    let history = useHistory();

    const { score } = useSelector( state => state.cardCountriesReducers );

    const handleClickTry = ( patch ) => {
        dispatch( cardIsAnswerCorrectAction(null) )
        dispatch( cardIsAnswerSelectAction(false) );
        dispatch( cardScoreReset() )

        history.push( patch )
    }

    return (
        <div className="container-card">
            <div className="card card-score animate__animated animate__fast animate__backInDown">
                <img src={ `${process.env.PUBLIC_URL}/img/undraw_winners_ao2o 2.svg` } />
                <h2 style={{ fontSize:'35px', color: '#1D355D' }}>Resultado</h2>
                <div className='flex-row score-description'> <h2>Obtuviste</h2> <h2 className='score-main'> { score } </h2>  <h2>respuestas correctas</h2></div>
            
                
                {/*<Link to='/country-quiz'>Try</Link>*/}
                <h2 className='score-button button' onClick={ () => handleClickTry('/country-quiz') }>Try</h2>
                <h2 className='score-button button' onClick={ () => handleClickTry('/') }>Home</h2>
            </div>
        </div>
    )
}