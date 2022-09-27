import React from 'react';
import {Card, CardContent, Typography, CardActions, Button, CardHeader} from '@mui/material';


const TeamCard = props => {
    
    let teamName = props.teamName;
    let projects = props.projects;
    let members = props.users;

    return(
        <div style={{}}>
        <Card
          style={{
            width: 400,
            backgroundColor: "#0B2D45"
          }}
        ><CardHeader>
                    <h2>{teamName}</h2>
        <h3># of Projects: {projects.length}</h3>
        </CardHeader>
            <CardContent>
          <Typography variant="h5" component="h2">
            Members
          </Typography>
        </CardContent>
        <CardActions>
          <Button>{members}</Button>
        </CardActions>
      </Card>
    </div>
    );
    
}

export default TeamCard;


//TO DO:
//Set modal to return a team
//Import user data
//Set up conditionally rendered cards
//Look up top of card in MUI (team name left, # of projects: right)
//Set up member links
