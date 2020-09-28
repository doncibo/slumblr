import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signup, login } from '../../store/auth';
import { Redirect } from 'react-router-dom';
import { Container } from '@material-ui/core'
import '../../style/signup.css'


function SignUpModal() {
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

    const body = (
        <>
            <div className="signup-form-container">
                <Container className="signup-form" >
                    Sign Up!
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
                                id="password-input"
                                type="password" 
                                name="password" 
                                value={password2} 
                                onChange={e => setPassword2(e.target.value)} 
                                placeholder="Confirm Password"
                            />
                        </label>
                        <button id="signin-button" type="submit" >Sign up</button>
                    </form>
                </Container>
            </div>
        </>
    )
    return body;
};

export default SignUpModal;