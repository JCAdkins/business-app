import React from 'react';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';


const TeamCard = props => {
    
    let teamName = props.teamName;
    let projects = props.projects;
    let members = props.users;

    return(
<div class="card">
        <div class="card-header">
        <Stack direction="horizontal" gap={2}>
            <h2>{teamName}</h2>
          <h3># of Projects: {projects}</h3>
          </Stack>
        </div>
        ___________________________________________________________________________
        <div class="card-body">
            <h3>Members</h3>
                        {members.length > 0 && members.map((member) => (
          <Button as="a" href="/users/{member}">{member}</Button>
        ))}
      </div>
    </div>
    );
    
}

export default TeamCard;


//TO DO:
//Set modal to return a team
//Import user data
//Set up conditionally rendered cards
//Set up member links
