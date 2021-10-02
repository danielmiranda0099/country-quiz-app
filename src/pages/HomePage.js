import React from "react";
import { Link } from "react-router-dom";
import { Earth } from "../components/Earth";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";


export const HomePage = () => {

    return(
        <div className='flex-column animate__animated animate__fadeIn animate__slo' style={{width:'100%', height: '100vh'}}>
            <Header/>

            <Earth />

            <div className='flex-column' style={{width:'100%', height:'100%' ,flex: '1 1 auto'}}>
                <Link  className='button home-button' to='/country-quiz'>start</Link>
            </div>
            
            <Footer />
        </div>
    )
}