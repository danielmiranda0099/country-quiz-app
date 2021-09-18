import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../../redux/actions/getCountriesAction';

import { ButtonsAnswers } from './ButtonsAnswers';

export const CardQuiz = () => {
    const [countries, setCountries] = useState([]);
    const [answer, setAnswer] = useState(null);
    const [isAnweredCorrect, setIsAnweredCorrect ] = useState(false);
    const [isFailed, setIsFailed] = useState(null);
    const [classCorrect, setClassCorrect] = useState(null);
    const [isNext, setIsNext] = useState(false);
    
    const dispatch = useDispatch( );

    useEffect( () => {
        const randomNum = () =>  parseInt( (Math.random() * (250 - 1 + 1)) + 1 );
        
        const getContries = (json) => {
            const countries = [];

            while(countries.length < 4){
            let randomCountry = randomNum();
            if( countries?.filter( el => el?.name === json[randomCountry]?.name).length <= 0 && json[randomCountry].name.length > 1 && json[randomCountry].capital.length > 1  ){
                countries.push(json[randomCountry]);
            }
            }
            setCountries(countries);
        }
        
        const getData = async() => {
            const url = 'https://restcountries.eu/rest/v2/all';
            const data = await fetch(url);
            const json = await data.json();

            getContries(json);
        }


        setAnswer( parseInt( (Math.random() * (3 - 1 + 1)) + 1 ) - 1 );
        getData();

        dispatch( getCountries()  );
        
    }, []);


    const handleClickAnswer = (e) => {
        
        if(parseInt(e.target.getAttribute('data-index')) !== answer && isFailed === null){
            e.target.classList.add('answers-wrong');
            setTimeout( () => setIsFailed(true), 3000);
            return;
        }
        setClassCorrect( answer );
        setIsFailed(false);
        setIsAnweredCorrect(true);
    }

    return(
        <div className="card-quiz animate__animated animate__fast animate__backInDown">

            {
                !isFailed ? <>
                            <h2 className="title-quiz">la capital de {countries[answer]?.name} es</h2>

                            <ButtonsAnswers countries={countries} handleClickAnswer={handleClickAnswer} classCorrect={ setClassCorrect } />

                            {
                                isAnweredCorrect && <h2 >NEXT</h2>
                            }
                          </>
                    : <h2>te eqivicaste jeje</h2>
            }

            
        </div>
    )
}