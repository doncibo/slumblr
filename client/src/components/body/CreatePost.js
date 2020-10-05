import React from 'react';
import Text from '../../style/svg/text.svg'
import Camera from '../../style/svg/camera.svg'
import LinkVariant from '../../style/svg/link-variant.svg'
import TextPost from './TextPostModal'
import LinkPost from './LinkPostModal'
import '../../style/createpost.css'
// import HomeLogo from '../../style/Home'
// import { Link } from 'react-router-dom';

//Material Ui
import { Button } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
// import ClickAwayListener from '@material-ui/core/ClickAwayListener';
// import Grow from '@material-ui/core/Grow';
// import Paper from '@material-ui/core/Paper';
// import Popper from '@material-ui/core/Popper';
// import MenuItem from '@material-ui/core/MenuItem';
// import MenuList from '@material-ui/core/MenuList';

function Comp(){
    const linkPost = LinkPost()
    const textPost = TextPost()
    const [open, setOpen] = React.useState(false);
    const [openLink, setOpenLink] = React.useState(false);
    // const anchorRef = React.useRef(null);
  
    const handleClose = () => {
        setOpen(false);
        setOpenLink(false);
    };
    
    const handleOpen = () => {
        setOpen(true);
    };

    const handleLinkOpen = () => {
        setOpenLink(true);
    };
    

    
    return(
        <div className='create-post'>
            <Button id='text-post' onClick={handleOpen} >
                <img src={Text} alt='' ></img>Text
            </Button>
            <Button id='photo-post'>
                <img src={Camera} alt=''></img>Photo
            </Button>
            <Button id='link-post' onClick={handleLinkOpen}>
                <img src={LinkVariant} alt=''></img>Link
            </Button>
            <Modal 
                className="login-form-outer"
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                >
                    {textPost}
            </Modal>
            {/* <Modal 
                className="login-form-outer"
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                >
                    {textPost}
            </Modal> */}
            <Modal 
                className="login-form-outer"
                open={openLink}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                >
                    {linkPost}
            </Modal>
        </div>
    )
}

export default Comp
