import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom' ;
import LoginPage from './LoginPage';
import SignUp from './SignUp';
import Home from './Home';
import NavBar from '../components/nav_comp/NavBar'
import '../style/home.css'
import Profile from './Profile';
// import { useSelector } from 'react-redux';


export default function Pages(){
    // const currentUserId = useSelector(state => state.auth.id);
    return (
        <div className="page-container" > 
            <BrowserRouter >
                <NavBar >
                </NavBar>
                <Switch >
                    <Route path='/profile' component={Profile}/>

                    <Route path='/login' component={LoginPage} />

                    <Route path='/signup' component={SignUp} />

                    <Route path='/' component={Home} />
                </Switch>
            </BrowserRouter>
                
            <div >
            </div>
            
        </div>
    )
};
