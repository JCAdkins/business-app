import React from 'react';
import {useState, useEffect} from 'react';
import { Modal, Paper, Box, Typography, Button, TextFeild} from '@mui/material'

const BaseModal = () =>{
    
    //State Used for Modal
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    /*
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby={modal-Title}
        aria-describedby={modal-Info}>
        <Paper style={container}>
            <Box sx ={{ "& .MuiTextField-root": { m: 2, width: "25ch" }}} style={container}>
                <Typography id="modal-NewTeam-title">
                    <h3>{title}</h3>
                </Typography>
                <Typography id="modal-NewTeam-form">
                    <TextField
                        required
                        id="outlined-required"
                        label="Team Name"
                    />

                    <TextField
                        id="outlined-password-input"
                        label="Description"
                    />
                    <Button>{submitText}</Button>
                </Typography>
            </Box>
        </Paper>
    </Modal>
    */
}