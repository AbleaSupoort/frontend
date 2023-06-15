import React, { useState } from "react";
import './FloatingButton.css'
import ChatIcon from '@mui/icons-material/Chat';

import { Modal } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import MycChatbot from "../../chatbot/Chatbot";

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginLeft:'60%',
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'flex-end',
            marginLeft:'0%',
        },
    },
}));



function FloatingButton() {
    const classes = useStyles();

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div>
            <button onClick={handleOpen} className="floating-button"> <ChatIcon fontSize="large"/></button>
            <Modal
                open={open}
                onClose={handleClose}
                className={classes.modal}
            >
                <MycChatbot />
            </Modal>
        </div>
    );
}

export default FloatingButton;

function useSelector<T, U>(arg0: (state: any) => any) {
  throw new Error("Function not implemented.");
}
