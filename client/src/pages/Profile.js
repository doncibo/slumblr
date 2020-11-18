import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../store/posts';
import '../style/profile.css'
import Content from '../components/body/Content'
import UserAction from '../components/body/UserActions'

function Profile(){
    const dispatch = useDispatch()
    const currentUserId = useSelector(state => state.auth.id);
    const posts = useSelector(state => state.posts)
    const profilePosts = []
    useEffect(() => {
        dispatch(fetchPosts())
    }, [])
    posts.map(post => {
        if(post.userId === currentUserId){
            profilePosts.push(post)
        }
    })
    // const currentUsername = useSelector(state => state.auth.username);
    return (
        <>  
            <div className='main-profile' >
                <div className='profile-container' >
                    <Content posts={profilePosts} />
                    <UserAction />
                </div>
            </div>
        </>
    );
}

export default Profile;
