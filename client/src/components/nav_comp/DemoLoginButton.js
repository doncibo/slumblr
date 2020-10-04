import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/auth';
import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import '../../style/loginmodal.css'

function LoginButton(){
    const currentUserId = useSelector(state => state.auth.id);
    const dispatch = useDispatch();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const username = "yusuke@example.com";
        const password = "password";
        dispatch(login(username, password))
    }

    if(currentUserId) return <Redirect to="/" />;

    return(
        <div className="login">
            <Button id="demologin" onClick={handleSubmit}>Demo Sign in</Button>
        </div>
    )
}

export default LoginButton;
