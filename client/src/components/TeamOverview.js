import React, { useState, useEffect } from "react";
import {
  Box,
  Modal,
  Button,
  Typography,
  TextField,
  Select,
  MenuItem,
  Avatar,
//   Link,
//   Card,
  Paper
} from "@mui/material";
// import {Global, css } from '@emotion/react';
import TeamCard from "../components/component-Helpers/TeamCard";
import fetchFromCompany from "../services/api";
import "../components/component-Styles/main.css";
// import Stack from "react-bootstrap/Stack";


const TeamOverview = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [teamName, setTeamName] = useState("");
  const [description, setDescription] = useState("");
  const [users, setUsers] = useState([]);
  const [teams, setTeams] = useState([]);
  console.log("from team overview", teams);

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

//   const cardStyle = {
//     display: "flex",
//     flexDirection: "column",
//     padding: 25,
//     margin: 10,
//     minWidth: "10%",
//     maxWidth: "50%",
//     marginBottom: "5%",
//   };

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

  useEffect(() => {
    fetch("http://localhost:8080/users")
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  console.log("users", users)

  const makeTeam = e => {
    e.preventDefault();
    setTeams([
      ...teams,
      {
        id: teams.length,
        name: `${teamName}`,
        description: `${description}`,
        members: `${users}`,
      },
    ]);
    setTeamName(teamName);
    setUsers(users);
    setDescription(description);
    setModalOpen(false);
  };

  const userAdd = e => {
    e.preventDefault();
  };

  return  (
   <Paper>
<TeamCard/>
<Modal open={modalOpen} onClose={() => setModalOpen(false)}>
                <Box sx={modalStyle} component="form" avatar={<Avatar>
                    
                </Avatar>}>
                    <TextField
                        value={teamName}
                        onChange={e => setTeamName(e.target.value)}
                        size="small"
                        required
                        label="team name"
                        style={{ paddingRight: 10 }} />
                    <TextField
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        size="small"
                        required
                        label="description"
                        style={{ paddingRight: 10 }} />
                    <div style={{ textAlign: "center", marginTop: "20px" }}>
                        <Typography component="h6">Select Members</Typography>
                        <Select
                            size="small"
                            value={users}
                            onChange={userAdd}
                            label="Pick an option"
                        >
                            {users.map((user) => (
                                <MenuItem key={user} value={user.firstName}>{user.firstName}</MenuItem>
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
            </Paper>


  )
};

export default TeamOverview;
