import React from 'react';
// import { Route } from 'react-router-dom' ;
import { useSelector } from 'react-redux';
import {LoggedIn, LoggedOut} from './LoggedState'
import '../style/home.css'

function NavEditor(){
    const currentUserId = useSelector(state => state.auth.id);
    let log = LoggedOut
    if(currentUserId){
        log = LoggedIn
    }
    return log
}

function Home(){
    const Log = NavEditor()
    return (
        <>  
            <Log />
        </>
    )
}

export default Home;