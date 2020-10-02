import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../store/posts';
import '../style/profile.css'
import Content from '../components/body/Content'
import UserAction from '../components/body/UserActions'
// import AudioPlay from '../components/AudioPlayer'
// import Button from '@material-ui/core/Button';
// import { Route } from 'react-router-dom';


function Profile(){
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts)

    useEffect(() => {
        dispatch(fetchPosts())
    }, [])
    console.log(posts.map(post => console.log(post)))
    console.log(posts)
    // const currentUsername = useSelector(state => state.auth.username);
    return (
        <>  
            <div className='main-profile' >
                <div className='profile-container' >
                    <Content />
                    <UserAction />
                </div>
            </div>
        </>
    );
}

export default Profile;
