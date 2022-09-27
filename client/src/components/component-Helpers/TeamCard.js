import React from 'react';
import {Card, CardContent, Typography, Box} from '@mui/material';

const TeamCard = () => {
    return(
        <Box sx={{ width: 313, height: 241,}}>
            <Card>
                <CardContent>
                    <Typography>
                        This is test text.
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
    
}

export default TeamCard;


//TO DO:
//Set modal to return a team
//Import user data
//Set up conditionally rendered cards
//Look up top of card in MUI (team name left, # of projects: right)
//Set up member links
