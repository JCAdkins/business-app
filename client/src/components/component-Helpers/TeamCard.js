import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import fetchFromCompany from '../../services/api';
// import { Link } from 'react-router-dom';

const TeamCard = () => {

    const [teams, setTeams] = useState([]);
    // const [projects, setProjects] = useState([]);
    // const [users, setUsers] = useState([]);
    console.log("from team overview", teams);

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

    // useEffect(() => {
    //     fetch("http://localhost:8080/users")
    //         .then(response => response.json())
    //         .then(data => setUsers(data));
    // }, []);

    // console.log("users", users)
    // const getTeams = async () => {
    //     let company = localStorage.getItem("company")
    //     const response = await fetchFromCompany({
    //         endpoint: `companies/${company}/teams`,

    //     })
    //     console.log(response)
    //     setTeams(response)
    //     return response
    // }
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
    // useEffect(() => {
    //     getTeams();
    //     getProjects();
    //     getUsers()
    // }, [])

    // console.log("teams", teams)
    // console.log("projects", projects)
    // console.log("users", users)


    // {teams.map((team, idx) => 
    //     (
    //    <Card style={cardStyle}  key={idx}>
    //      <h3>{team.name}</h3>
    //      <h1>Members</h1>
    //      {console.log(team)}
    //      {/* {team.members.map((member, name) => (
    //         <h3>{member}</h3>
    //      )

    //      )} */}
    //    </Card>
    // ) 
    //   )}

    // let teamName = teams.teamName;
    // let projectNum = getProjects.length;
    // let members = getUsers.username;

    return (
        <div>
            {teams.map((team, idx) => (
                <div className="card">
                    <div className="card-header" key={idx}>
                        <Stack direction="horizontal" gap={2}>
                            <h2>{team.name}</h2>
                            <h3># of Projects: 5</h3>
                        </Stack>
                    </div>
                    <div class="card-body">
                        <h3>Members</h3>
                        {console.log(team)}
                        {teams.map((team) => (
                            <Button key={team} value={team.users}>{team.users}</Button>
                        ))}
                    </div>
                </div>
            )
            )}
        </div>
    );

}

export default TeamCard;
