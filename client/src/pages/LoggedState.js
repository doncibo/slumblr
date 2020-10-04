import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Logo from '../style/svg/slumblr_text.svg'
import Content from '../components/body/Content'
import UserAction from '../components/body/UserActions'
import DemoLoginButton from '../components/nav_comp/DemoLoginButton'
// import { useSelector } from 'react-redux';


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
    return (
        <div className="main" >
            <div className='profile-container' >
                <Content />
                <UserAction />
            </div>
        </div>
    
    )
}
