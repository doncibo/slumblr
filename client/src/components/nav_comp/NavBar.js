import React from 'react';
// import { Route } from 'react-router-dom' ;
import { useSelector } from 'react-redux';
import LeftNav from './LeftNav'
import MiddleNav from './MiddleNav'
import RightNav from './RightNav'
import RightNavLogged from './RightNavLogged'
import '../../style/navbar.css'
// import Profile from '../../pages/Profile';
// import { Route } from 'react-router-dom' ;
// import {LoginNav, LogoutNav} from '../../pages/LoggedState'

function NavBar(){
    const currentUserId = useSelector(state => state.auth.id);
    let navClass = "outer-nav"

    if(currentUserId){
        navClass = 'outer-nav-logged-in'
    }

    return (
        <div className={navClass}>
            <div className="navbar">
                <LeftNav />
                <MiddleNav />
                {currentUserId ? <RightNavLogged /> : <RightNav />}
            </div>
        </div>
    )
}

export default NavBar;
