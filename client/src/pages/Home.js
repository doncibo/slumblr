import React from 'react';
// import { Route } from 'react-router-dom' ;
import { useSelector } from 'react-redux';
import {LoggedIn, LoggedOut} from './LoggedState'
import '../style/home.css'


function Home(){
    const currentUserId = useSelector(state => state.auth.id);
    console.log(currentUserId)
    return (
        <>  
            <div className='home-container'>
                {currentUserId ? <LoggedIn /> : <LoggedOut />}
            </div>

        </>
    )
}

export default Home;