import React from 'react';
import { Button } from '@material-ui/core';
import Text from '../../style/svg/text.svg'
import Camera from '../../style/svg/camera.svg'
import LinkVariant from '../../style/svg/link-variant.svg'
import '../../style/createpost.css'
// import HomeLogo from '../../style/Home'
// import { Link } from 'react-router-dom';

function Comp(){
    return(
        <div className='create-post'>
            <Button id='text-post' >
                <img src={Text} alt='' ></img>Text
            </Button>
            <Button id='photo-post'>
                <img src={Camera} alt=''></img>Photo
            </Button>
            <Button id='link-post'>
                <img src={LinkVariant} alt=''></img>Link
            </Button>
        </div>
    )
}

export default Comp
