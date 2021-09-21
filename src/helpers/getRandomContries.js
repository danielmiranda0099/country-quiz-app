

export const getRandomContries = ( json ) => {
    const countries = [];

    while(countries.length < 4){
        let randomCountry =  parseInt( (Math.random() * (250 - 1 + 1)) + 1 );

        if( countries?.filter( el => el?.name === json[randomCountry]?.name).length <= 0 && json[randomCountry].name.length > 1 && json[randomCountry].capital.length > 1  ){
            countries.push(json[randomCountry]);
        }
    }

    return countries;
}