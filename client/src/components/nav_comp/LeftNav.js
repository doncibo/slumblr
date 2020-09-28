//contains nav components for left side of bar, i.e logo, home, library
import React from 'react';
// import HomeLogo from '../../style/Home'
import { Link } from 'react-router-dom';
import Logo from "../../style/svg/slumblr_logo.svg"

function LeftNav(){
  
    return(
        <div className="leftnav">
            <Link to="/profile" id="logo">
                <img id='logoimg' src={Logo} alt='' />
            </Link>
            
        </div>
    )
}

export default LeftNav;
