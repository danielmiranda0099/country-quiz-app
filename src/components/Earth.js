import React from 'react';

export const Earth = () => {

    return (
        <div className='earth'>
            <div style={{  backgroundImage: `url(${process.env.PUBLIC_URL}/img/map-svg.png)`}}></div>
        </div>
    )
}