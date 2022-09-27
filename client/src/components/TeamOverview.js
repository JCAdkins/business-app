import React, { useState, useEffect } from 'react';
import { Box, Modal, Button, Typography, TextField, Select, MenuItem, Avatar } from '@mui/material';
// import {Global, css } from '@emotion/react';
import TeamCard from "../components/component-Helpers/TeamCard"
import fetchFromCompany from "../services/api";
import "../components/component-Styles/main.css";

//bring in users once the component is complete
//import teams based on backend data
// const teamsArray = [
//     {
//         id: 0,
//         name: "TEAM HAL",
//         description: "dead",
//         members: {}
//     },
//     {
//         id: 1,
//         name: "Dave Bowman?",
//         description: "unknown",
//     },
//     {
//         id: 2,
//         name: "Team Poole",
//         description: "Earth",
//     }
// ];

const TeamOverview = () => {

    const [modalOpen, setModalOpen] = useState(false);
    const [teamName, setTeamName] = useState("");
    const [description, setDescription] = useState("");
    const [users, setUsers] = useState([]);
    const [teams, setTeams] = useState([]);

    const modalStyle = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        p: 4,
    };

    const getTeams = async () => {
        const response = await fetchFromCompany({
          endpoint: "/{companyId}/teams",
          
        })
        setTeams(response)
        return response
      }
    
      useEffect(() => {
        getTeams();
      }, [])

    const makeTeam = e => {
        e.preventDefault();
        setTeams([
            ...teams,
            {
                id: teams.length,
                name: `${teamName}`,
                description: `${description}`,
                members: `${users}`
            }
        ])
        setTeamName(teamName);
        setUsers(users);
        setDescription(description);
        setModalOpen(false);
    }

    const userAdd = e => {
        e.preventDefault();

    }

    return (
        <div>
            <h1>Teams</h1>
            <div className="body-content">
                {teams.length > 0 && teams.map((team) => (
            <TeamCard key={team.id}>{team.name}</TeamCard>
        ))}
                <Button
                    onClick={() => setModalOpen(true)}
                    variant="outlined"
                    // size="small"
                    style={{ backgroundColor: "##B3B3B3", color: "#DEB992", marginTop: 20 }}
                >+<br />
                    New Team
                </Button>
                <div>
                    {/* <Typography
                        style={{ visibility: error ? "visible" : "hidden" }}
                        component="h6"
                        color="error"
                    >
                        There was an error creating the team. Please try again.
                    </Typography> */}

                    <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
                        <Box sx={modalStyle} component="form" avatar={
                            <Avatar>
                                X
                            </Avatar>
                        }>
                            <TextField
                                value={teamName}
                                onChange={e => setTeamName(e.target.value)}
                                size="small"
                                required
                                label="team name"
                                style={{ paddingRight: 10 }}
                            />
                            <TextField
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                                size="small"
                                required
                                label="description"
                                style={{ paddingRight: 10 }}
                            />
                            <div style={{ textAlign: "center", marginTop: "20px" }}>
                                <Typography component="h6">Select Members</Typography>
                                <Select
                                    size="small"
                                    value={users}
                                    onChange={userAdd}
                                    label="Pick an option"
                                >
                                    {users.map((user) => (
                                        <MenuItem key={user} value={user}>{user}</MenuItem>
                                    ))}
                                </Select>
                            </div>
                            <Button
                                style={{ marginRight: 10 }}
                                variant="contained"
                                // color="#1BA098"
                                onClick={makeTeam}
                            >
                                {" "}
                                Submit
                            </Button>
                        </Box>
                    </Modal>
                </div>
            </div>
        </div>
    );
};

export default TeamOverview;