import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Logo from '../style/svg/slumblr_text.svg'
import HomeContent from '../components/body/HomeContent'
import ProfileAction from '../components/body/ProfileActions'
import DemoLoginButton from '../components/nav_comp/DemoLoginButton'
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../store/posts';


export function LoggedOut() {
    return (
        <div id='main-logout' >
            <img id='logotext' src={Logo} alt='' />
            <div id='home-text'>
                <div >Come for what you love.</div>
                <div >Stay for what you discover.</div>
            </div>
            <div id='auth-buttons'>
                <Link to='/signup' id='navlink'><Button id='to-signup-button'>Get Started</Button></Link>
                <Link to='/login' id='navlink'><Button id='to-signin-button'>Log In</Button></Link>
                <DemoLoginButton />
            </div>
        </div>
    )
}

export function LoggedIn (){
    const dispatch = useDispatch()
    const currentUserId = useSelector(state => state.auth.id);
    const posts = useSelector(state => state.posts)
    
    useEffect(() => {
        dispatch(fetchPosts())
    }, [])
    return (
        <div className="main" >
            <div className='home-content' >
                <HomeContent posts={posts} />
                <div>
                    <ProfileAction />
                </div>
            </div>
        </div>
    
    )
}
