//contains sign in, create account for right side of nav bar

import React from 'react';
import LoginButton from './LoginButton'
import SignUpButton from './SignUpButton'
import DemoLoginButton from './DemoLoginButton'
import '../../style/loginpage.css'


function RightNav(){
    return(
        <div className="rightnav">
            <LoginButton />
            <DemoLoginButton />
            <SignUpButton />
        </div>
    )
}

export default RightNav;