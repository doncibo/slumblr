import React from 'react';
import { Route } from 'react-router-dom' ;
import LoginPage from './LoginPage';
import SignUp from './SignUp';
import Home from './Home';
import NavBar from '../components/nav_comp/NavBar'
import '../style/home.css'

export default function Pages(){
    return (
        <>  
            <NavBar />
            <div className="root-container">
                <Route path="/login" component={LoginPage} />
                <Route path="/signup" component={SignUp} />
                <Route path="/" component={Home} />
            </div>
        </>
    )
};
