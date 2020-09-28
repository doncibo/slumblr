import React from 'react';
import Modal from '@material-ui/core/Modal';
import LoginModal from './LoginModal'
import '../../style/loginmodal.css'

function LoginButton(){
    const login = LoginModal();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return(
        <div className="login">
            <button id="login" type="button" onClick={handleOpen} >Sign in</button>
            <div className="modalcontainer">
                <Modal 
                    className="login-form-outer"
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"                        aria-describedby="simple-modal-description"
                    >
                        {login}
                </Modal>
            </div>
        </div>
    )
}

export default LoginButton;