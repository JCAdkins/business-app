import React from 'react';
import { useState, useEffects } from 'react';
import {Box, Modal, Button, Card, CardActions, CardContent, Typography, TextField, Paper} from '@mui/material';
import {Global, css } from '@emotion/react';
import TeamCard from "../components/component-Helpers/TeamCard"

import "../components/component-Styles/main.css";

const TeamOverview = () =>{

    //State Used for Modal
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const container = {
        display: "flex",
        flexDirection: "row",
        padding: 35,
        justifyContent: "center",
        alignItems: "center",
        margin: "20% 20%",
        //    background: "rgb(6, 22, 30)"
    };

    return(
        <div>
            <h1>Team</h1>
            <div className={"body-content"}>
                <TeamCard/>
                <TeamCard/>
                <Button onClick={handleOpen}>
                    <TeamCard/>
                </Button>

                <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-NewTeam-title"
                aria-describedby="modal-NewTeam-form">
                    <Paper style={container}>
                        <Box sx ={{ "& .MuiTextField-root": { m: 2, width: "25ch" }}} style={container}>
                            <Typography id="modal-NewTeam-title">
                                <h3>Create New Team</h3>
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
                            </Typography>
                        </Box>
                    </Paper>
                </Modal>
            </div>
        </div>
    );
};

export default TeamOverview;