import React from 'react';

export const ButtonsAnswers = ( {countries, handleClickAnswer, classCorrect} ) => {
    const letras = ['A', 'B', 'C', 'D']

    return(
      <>
        {
          countries.length > 0 
                                ? countries.map( (el, index) => <h2 className={`buttons-answers ${classCorrect === index ? "answers-correct" : null }`}
                                                                onClick={handleClickAnswer}  
                                                                data-index={index} 
                                                                key={el.capital}> {el.capital}</h2> ) 
                                : <h2>cargando...</h2>
        }
      </>
    )
}