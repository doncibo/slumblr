import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/auth';
import { Redirect } from 'react-router-dom';
// import { Container } from '@material-ui/core'
import '../style/loginmodal.css'
import { Button } from '@material-ui/core';

function LoginForm() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const currentUserId = useSelector(state => state.auth.id);
    const dispatch = useDispatch();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(username, password))
    }

    if(currentUserId) return <Redirect to="/" />;
    console.log(currentUserId)
    const body = (
        <>
            <div className="login-form-container">
                <div className="login-form" >
                Sign into your account
                    <form onSubmit={handleSubmit}>
                        
                        <label>
                            <input 
                                id="email-input"
                                type="text" 
                                name="username" 
                                value={username} 
                                onChange={e => setUsername(e.target.value)}
                                placeholder="Enter Username/Email" 
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
                        <Button id="signin-button" type="submit" onClick={handleSubmit}>Sign in</Button>
                    </form>
                </div>
            </div>
        </>
    )

    return body;
};

export default LoginForm;

// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { login } from '../store/auth';
// import { Redirect } from 'react-router-dom';
// import { Container } from '@material-ui/core'
// import '../style/loginpage.css'

// function LoginPage() {
//     const [username, setUsername] = useState('')
//     const [password, setPassword] = useState('')
//     const currentUserId = useSelector(state => state.auth.id);
//     const dispatch = useDispatch();
    
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         dispatch(login(username, password))
//     }

//     if(currentUserId) return <Redirect to="/" />;

//     return(
//         <>
//             <div className="login-form-container">
//                 <Container className="login-form" >
//                     <form onSubmit={handleSubmit}>
//                         <label>
//                             <input 
//                                 id="email-input"
//                                 type="text" 
//                                 name="username" 
//                                 value={username} 
//                                 onChange={e => setUsername(e.target.value)}
//                                 placeholder="Enter Username/Email" 
//                             />
//                         </label>
//                         <label>
//                             <input 
//                                 id="password-input"
//                                 type="password" 
//                                 name="password" 
//                                 value={password} 
//                                 onChange={e => setPassword(e.target.value)} 
//                                 placeholder="Enter Password"
//                             />
//                         </label>
//                         <button id="signin-button" type="submit" >Sign in</button>
//                     </form>
//                 </Container>
//             </div>
//         </>
//     )
// };

// export default LoginPage;