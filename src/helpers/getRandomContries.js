

export const getRandomContries = ( json ) => {
    const countries = [];

    while(countries.length < 4){
        let randomCountry =  parseInt( (Math.random() * (247 - 1 + 1)) + 1 );

        if( countries?.filter( el => el?.country === json[randomCountry]?.country).length <= 0 && json[randomCountry]?.country.length > 1 && json[randomCountry]?.capital.length > 1  ){
            countries.push(json[randomCountry]);
        }
    }

    return countries;
}