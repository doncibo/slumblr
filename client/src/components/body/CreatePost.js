import React from 'react';
import Text from '../../style/svg/text.svg'
import Camera from '../../style/svg/camera.svg'
import LinkVariant from '../../style/svg/link-variant.svg'
import TextPost from './TextPostModal'
import LinkPost from './LinkPostModal'
import PhotoPost from './PhotoPostModal'
import '../../style/createpost.css'
// import HomeLogo from '../../style/Home'
// import { Link } from 'react-router-dom';

//Material Ui
import { Button } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import CameraIcon from '@material-ui/icons/Camera';
// import ClickAwayListener from '@material-ui/core/ClickAwayListener';
// import Grow from '@material-ui/core/Grow';
// import Paper from '@material-ui/core/Paper';
// import Popper from '@material-ui/core/Popper';
// import MenuItem from '@material-ui/core/MenuItem';
// import MenuList from '@material-ui/core/MenuList';

function Comp(){
    const linkPost = LinkPost()
    const textPost = TextPost()
    const photoPost = PhotoPost()
    const [open, setOpen] = React.useState(false);
    const [openLink, setOpenLink] = React.useState(false);
    const [openPhoto, setOpenPhoto] = React.useState(false);
    // const anchorRef = React.useRef(null);
  
    const handleClose = () => {
        setOpen(false);
        setOpenLink(false);
        setOpenPhoto(false);
    };
    
    const handleOpen = () => {
        setOpen(true);
    };

    const handleLinkOpen = () => {
        setOpenLink(true);
    };

    const handlePhotoOpen = () => {
        setOpenPhoto(true);
    };
    

    
    return(
        <div className='create-post'>
            <Button id='text-post' onClick={handleOpen} >
                <img src={Text} alt='' ></img>Text
            </Button>
            <Button id='photo-post' onClick={handlePhotoOpen}>
                {/* <img src={Camera} alt=''></img>Photo */}
                <CameraIcon />Photo
            </Button>
            <Button id='link-post' onClick={handleLinkOpen}>
                <img src={LinkVariant} alt=''></img>Link
            </Button>
            <Modal 
                className="create-post-outer"
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                >
                    {textPost}
            </Modal>
            <Modal 
                className="create-post-outer"
                open={openPhoto}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                >
                    {photoPost}
            </Modal>
            <Modal 
                className="create-post-outer"
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
