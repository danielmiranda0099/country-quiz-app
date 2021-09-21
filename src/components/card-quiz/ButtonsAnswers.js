import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { cardIsAnswerCorrectAction, cardIsAnswerSelectAction, cardScore } from '../../redux/actions/cardCountriesActions';

export const ButtonsAnswers = ( ) => {
  const dispatch = useDispatch();

  const letras = ['A', 'B', 'C', 'D'];

  const { countries, answer, isAnswerSelect} = useSelector( state => state.cardCountriesReducers);
  

  const handleClickAnswer = (e) => {
    if(!isAnswerSelect){
      if(e.target.dataset.index === String(answer)){
        dispatch( cardIsAnswerCorrectAction(true) );
        dispatch( cardScore() )
      }else{
        e.target.classList.add('answers-wrong');
        dispatch( cardIsAnswerCorrectAction(false) );
      }
      dispatch( cardIsAnswerSelectAction(true) );
    }
  }

  return(
    <>
      {
        countries.length > 0 
                              ? countries.map( (el, index) => <h2 className={`buttons-answers ${ isAnswerSelect &&  index === answer ? 'answers-correct' : null} `}
                                                              onClick={ handleClickAnswer }
                                                              data-index={index} 
                                                              key={el.capital}> {el.capital}</h2> ) 
                              : <h2>cargando...</h2>
      }
    </>
  )
}