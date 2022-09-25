import React from 'react';
import { useState, useEffects } from 'react';
import {Modal, Button, Card, CardActions, CardContent, Typography} from '@mui/material'

import "../components/component-Styles/main.css";

const TeamOverview = () =>{

    //State Used for Modal
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(
        <div>
            <h1>Team</h1>
            <div className={"body-content"}>
                <Box>
                    <Card>
                        <Typography>

                        </Typography>
                    </Card>
                </Box>
                <Button onClick={}>
                    <Box>
                        <Typography>
                            +
                        </Typography>
                    </Box>
                </Button>
            </div>
        </div>
    );
};