import React from 'react';
// import { useSelector } from 'react-redux';
import Profile from './Profile'

export function LoggedOut() {
    return (
        <div className="main" >
           <div className="container-1" >
           </div>
           <div className="container-2" >
           </div>
           <div className="container-3" >
           </div>
        </div>
    )
}

export function LoggedIn (){
    return (
        // <div className="main" >
        //    <div className="container-header" >
        //    </div>
        //    <div className="container-2" >
        //    </div>
        //    <div className="container-3" >
        //    </div>
        // </div>
       <Profile />
    )
}