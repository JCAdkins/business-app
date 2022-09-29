import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import fetchFromCompany from '../../services/api';
import { Link } from 'react-router-dom';
import { Card } from '@mui/material';

const TeamCard = ({team}) => {

    const [teams, setTeams] = useState([]);
    
  console.log("teams", teams);
  console.log("projects", projects);
  console.log("users", users);

        })
        console.log(response)
        setTeams(response)
        return response
    }
    // const getProjects = async () => {
    //     let company = localStorage.getItem("company")
    //     const response = await fetchFromCompany({
    //         endpoint: `companies/${company}/projects`,

    //     })
    //     console.log(response)
    //     setProjects(response)
    //     return response
    // }
    // const getUsers = async () => {
    //     let teamId = 1
    //     const response = await fetchFromCompany({
    //         endpoint:     `users/team/${teamId}`,

    //     })
    //     console.log(response)
    //     setUsers(response)
    //     return response
    // }
    useEffect(() => {
        getTeams();
        
    }, [])

    // console.log("teams", teams)
    // console.log("projects", projects)
    // console.log("users", users)
    

    // let teamName = teams.teamName;
    // let projectNum = getProjects.length;
    // let members = getUsers.username;

    return (
        <Card sx={{margin: '20%'}}>
            
                <div className="card">
                    <div className="card-header" key={team.id}>
                        <Stack direction="horizontal" gap={2}>
                            <h2>{team.name}</h2>
                            <h3># of Projects: 5</h3>
                        </Stack>
                    </div>
                    <div class="card-body">
                        <h3>Members</h3>
                        {console.log('line 68 teamcard',team)}
                        {team.users.map((user) => (
                            <Button key={user.id} value={user.id}>{user.firstName}</Button>
                        ))}
                    </div>
                </div>
            
            
        </Card>
    );
}

export default TeamCard;

//TO DO:
//Set modal to return a team
//Import user data
//Set up conditionally rendered cards
//Set up member links
