import { useEffect, useState } from 'react';

export const useFetch = ( url ) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect( () => {

        const getData = async( url ) => {

            try{
                const res = await fetch(url);

                if( !res.ok ){
                    throw{
                        err: true,
                        status: res.status,
                        statusText: res.statusText ? res.statusText : 'Ocurrio un error'
                    }
                }

                const data = await res.json();

                setData( data );
                setIsLoading( false );
                setError( { err: false } );

            } catch (err) {
                isLoading( true );
                setError( err );
            }

        }

        getData( url )
    }, []);
    
    return { data, isLoading, error }
}