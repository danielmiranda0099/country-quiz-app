import React, { useEffect, useState } from 'react';

export const ButtonsAnswers = () => {
  const [countries, setCountries] = useState([]);
  const [answer, setAnswer] = useState(null);

    useEffect( () => {
      const randomNum = () =>  parseInt( (Math.random() * (250 - 1 + 1)) + 1 );
      
      const getContries = (json) => {
        const countries = [];

        while(countries.length < 4){
          let randomCountry = randomNum();
          if( countries?.filter( el => el.name === json[randomCountry].name).length <= 0 && json[randomCountry].capital.length > 1  ){
            countries.push(json[randomCountry]);
          }
        }

        setCountries(countries);
      }
      
      const getData = async(url) => {
        const data = await fetch(url);
        const json = await data.json();

        getContries(json);
        
        
      }

      setAnswer( Math.round( (Math.random() * (3 - 1 + 1)) + 1 ) - 1 );
      console.log(answer);
      getData('https://restcountries.eu/rest/v2/all');

      
    },[]);

    return(
      <>
        <h2>la capital de { countries[answer]?.name } es</h2>

        {
          countries.length > 0 ? countries.map( (el) => <h2 key={el.capital}>{el.capital}</h2> ) : <h2>cargando...</h2>
        }
      </>
    )
}