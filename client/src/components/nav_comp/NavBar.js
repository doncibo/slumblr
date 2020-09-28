import React from 'react';
// import { Route } from 'react-router-dom' ;
import { useSelector } from 'react-redux';
import LeftNav from './LeftNav'
import MiddleNav from './MiddleNav'
import RightNav from './RightNav'
import RightNavLogged from './RightNavLogged'
import '../../style/navbar.css'

function NavEditor(){
    const currentUserId = useSelector(state => state.auth.id);
    let RightNavSection = RightNav
    if(currentUserId){
        RightNavSection = RightNavLogged
    }
    return RightNavSection
}

function NavBar(){
    const RightSection = NavEditor();
    return (
        <div className="outer-nav">
            <div className="navbar">
                <LeftNav />
                <MiddleNav />
                <RightSection />
            </div>
        </div>
    )
}

export default NavBar;