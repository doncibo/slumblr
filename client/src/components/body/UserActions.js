import React from 'react';
import Button from '@material-ui/core/Button';
import { useSelector } from 'react-redux';
import '../../style/useraction.css'
import { createFollow } from '../../store/follow';
// import { Link } from 'react-router-dom';

function Comp(){
    const currentUsername = useSelector(state => state.auth.username);
    return(
        <div className='user-actions'>
            <div id='action-box'>
                <div id='username' >{currentUsername}</div>
                <Button id='action-button' >Posts</Button>
                <Button id='action-button' >Followers</Button>
                <Button id='action-button' >Activity</Button>
            </div>
        </div>
    )
}

export default Comp
