import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import fetchFromCompany from '../../services/api';
// import { Link } from 'react-router-dom';
import { Card } from '@mui/material';

const TeamCard = ({team}) => {

    const [teams, setTeams] = useState([]);

    const getTeams = async () => {
        let company = localStorage.getItem("company");
        const response = await fetchFromCompany({
          endpoint: `companies/${company}/teams`,
        });
        setTeams(response);
        return response;
      };
    
      useEffect(() => {
        getTeams();
      }, []);

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
                        {teams.users.map((user) => (
                            <Button key={user.id} value={user.id}>{user.firstName}</Button>
                        ))}
                    </div>
                </div>
            
            
        </Card>
    );
}

export default TeamCard;
