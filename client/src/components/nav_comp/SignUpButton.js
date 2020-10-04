import React from 'react';
import Modal from '@material-ui/core/Modal';
import SignUpModal from './SignUpModal';
import '../../style/signup.css'

function SignUpButton(){
    const signupForm = SignUpModal();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return(
        <div className="signup">
            <button id="signup" type="button" onClick={handleOpen} >Create account</button>
            <div className="modalcontainer">
                <Modal 
                    className="login-form-outer"
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    {signupForm}
                </Modal>
            </div>
        </div>
    )
}

export default SignUpButton;