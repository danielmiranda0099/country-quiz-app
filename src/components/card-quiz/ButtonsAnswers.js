import { useDispatch, useSelector } from 'react-redux';
import { useHistory  } from 'react-router';

import { cardIsAnswerCorrectAction, cardIsAnswerSelectAction, cardResIncorrect, cardScore } from '../../redux/actions/cardCountriesActions';

export const ButtonsAnswers = ( ) => {
  const dispatch = useDispatch();
  let history = useHistory();

  const letters = ['A', 'B', 'C', 'D'];

  const { cardCountries, answer, isAnswerSelect, resIncorrect} = useSelector( state => state.cardCountriesReducers);
  
  const handleClickAnswer = (e) => {
    if(!isAnswerSelect){
      if(e.target.dataset.index === String(answer)){
        dispatch( cardIsAnswerCorrectAction(true) );
        dispatch( cardScore() )
      }else{
        dispatch( cardResIncorrect( e.target.dataset.capital ) );
        dispatch( cardIsAnswerCorrectAction(false) );

        setTimeout(() => {
          history.push('/country-quiz-score');
        }, 2000);
      }
      dispatch( cardIsAnswerSelectAction(true) );
    }
  }

  return(
    <>
      {
        cardCountries?.length > 0 && cardCountries.map( (el, index) => 
                    <div className={`buttons-answers ${!isAnswerSelect && 'is-hover'} `}
                    data-index={index}
                    data-capital={el.capital} 
                    key={el.capital}  
                    onClick={ handleClickAnswer }> 
                            
                            <h2 className={'answers-letters'}
                            data-index={index}
                            data-capital={el.capital}>
                                {letters[index]}
                            </h2> 

                            <h2 data-index={index}
                            data-capital={el.capital}> {el.capital} </h2>  

                            <div className={`animation-response  ${ isAnswerSelect &&  index === answer ? 'is-animate answers-correct' : null} ${resIncorrect === el.capital && 'is-animate answers-wrong'}`} ></div>
                    </div>) 
      }
    </>
  )
}




