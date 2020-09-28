import React from 'react';
// import { Route } from 'react-router-dom' ;
import { useSelector } from 'react-redux';
import LeftNav from './LeftNav'
import MiddleNav from './MiddleNav'
import RightNav from './RightNav'
import RightNavLogged from './RightNavLogged'
import '../../style/navbar.css'

<<<<<<< HEAD

=======
>>>>>>> ed504194e45ba70bc80b4b7780ccc85d4f9d3f9e
function NavBar(){
    const currentUserId = useSelector(state => state.auth.id);
    return (
        <div className="outer-nav">
            <div className="navbar">
                <LeftNav />
                <MiddleNav />
                {currentUserId ? <RightNavLogged /> : <RightNav />}
            </div>
        </div>
    )
}

export default NavBar;
