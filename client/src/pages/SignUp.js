import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signup, login } from '../store/auth';
import { Redirect } from 'react-router-dom';
import { Container, Button } from '@material-ui/core'

import '../style/signup.css'

function SignUp() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const currentUserId = useSelector(state => state.auth.id);
    const dispatch = useDispatch();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signup(username, email, password, password2))
        dispatch(login(username, password))
    }

    if(currentUserId) return <Redirect to="/" />;

    return(
        <>
            <div className="login-form-container">
                <Container className="login-form" >
                    <form onSubmit={handleSubmit}>
                        <label>
                            <input 
                                id="username-input"
                                type="text" 
                                name="username" 
                                value={username} 
                                onChange={e => setUsername(e.target.value)}
                                placeholder="Enter Username" 
                            />
                        </label>
                        <label>
                            <input 
                                id="email-input"
                                type="text" 
                                name="email" 
                                value={email} 
                                onChange={e => setEmail(e.target.value)}
                                placeholder="Enter Email" 
                            />
                        </label>
                        <label>
                            <input 
                                id="password-input"
                                type="password" 
                                name="password" 
                                value={password} 
                                onChange={e => setPassword(e.target.value)} 
                                placeholder="Enter Password"
                            />
                        </label>
                        <label>
                            <input 
                                id='password-input2'
                                type='password' 
                                name='confirmPassword' 
                                value={password2} 
                                onChange={e => setPassword2(e.target.value)} 
                                placeholder="Confirm Password"
                            />
                        </label>
                        <Button id="signup-button" type="submit" >Sign up</Button>
                    </form>
                </Container>
            </div>
        </>
    )
};

export default SignUp;