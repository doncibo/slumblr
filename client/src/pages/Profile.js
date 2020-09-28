import React from 'react';
// import AudioPlay from '../components/AudioPlayer'
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';


function Profile(){
    const currentUsername = useSelector(state => state.auth.username);
    return (
        <>  
            <Route path="/profile" component={Profile} />
            <div className="main" >
                <div className="contentsBanner" >
                    <div className="left-banner"></div>
                    <div className="right-banner">
                        <div id="textwrap" >{currentUsername}</div></div>
                </div>
                <div className="container-2" >
                    <div id="leftbuffer" ></div>
                    <div id="rightbuffer"></div>
                </div>
            </div>
        </>
    );
}

export default Profile;
