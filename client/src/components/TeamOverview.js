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
  Link,
  Card,
  Paper,
  FormControl,
  InputLabel,
  Input,
} from "@mui/material";
// import MultipleSelect from 'material-ui-multiple-select'
// import {Global, css } from '@emotion/react';
import TeamCard from "../components/component-Helpers/TeamCard";
import NavBar from "./NavBar"
import fetchFromCompany from "../services/api";
import "../components/component-Styles/main.css";
import Stack from "react-bootstrap/Stack";

// import Select, { SelectChangeEvent } from '@mui/material/Select';

const TeamOverview = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [teamName, setTeamName] = useState("");
  const [description, setDescription] = useState("");
  const [users, setUsers] = useState([]);
  const [teams, setTeams] = useState([]);
  const [userIds, setUserIds] = useState()
  const [newTeamId, setNewTeamId] = useState()
  // const [membersToAdd, setMembersToAdd] = useState([])
  const [membersToAdd, setMembersToAdd] = useState([]);
console.log("memberstoadd>>>>", membersToAdd)
  let company = localStorage.getItem("company");
  let userData = localStorage.getItem("userData");
  let user = JSON.parse(userData);
  

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

  const cardStyle = {
    display: "flex",
    flexDirection: "column",
    padding: 25,
    minWidth: "50%",
    marginBottom: "5%",
  };

  const getUsers = async () => {
    const response = await fetchFromCompany({
      endpoint: `users`,
    });
    setUsers(response);
    return response;
  };

  const getTeams = async () => {
    let company = localStorage.getItem("company");
    const response = await fetchFromCompany({
      endpoint: `companies/${company}/teams`,
    });
    setTeams(response);
    return response;
  };

  const addNewMembers = async (teamId, username) => {
    console.log("addingnew members")
    const response = await fetchFromCompany({
      method: "PATCH",
      endpoint: `users/${username}/${teamId}`
    })

    getTeams()
  }

  const createTeam = async () => {
    let company = localStorage.getItem("company");
    
    console.log(">>>>",company)
    const response = await fetchFromCompany({
      method: "POST",
      endpoint: `companies/${company}/teams`,
      body: {
        name: teamName,
        description: description,
      },
  })
  setMembersToAdd([])
    for(let i = 0; i < membersToAdd.length; i++){
      addNewMembers(response.id, membersToAdd[i])
    }
    setTeamName('')
    setDescription('')
    setModalOpen(false);
    getTeams()
    
 
  
  
  console.log("New team",response)
}


  useEffect(() => {
    getUsers();
  }, [teams]);

  useEffect(() => {
    getTeams()
  }, [])

  const handleChange = e => {
    setMembersToAdd(e.target.value);
  }

  const members = users.filter(user => user.team == null);
  console.log("these are memebers", members)

  return teams ? (
    <>
    <NavBar />
      {user.credentials.admin ? (
        <Button onClick={() => setModalOpen(true)}>Create New Team</Button>
      ) : null}
      {teams.map((team, idx) => (
        <TeamCard team={team} />
      ))}
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <Box sx={modalStyle} component="form" avatar={<Avatar></Avatar>}>
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
            <FormControl>
                  <InputLabel htmlFor="multi"><Typography component="h6">Select Members</Typography></InputLabel>
                  <Select
                    multiple
                    value={membersToAdd}
                    onChange={handleChange}
                    input={<Input id="multi" />}
                  >
                    {members.map(option => (
                      <MenuItem key={option.id} value={option.credentials.username}>
                        {option.firstName}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>           
          </div>
          <Button
            style={{ marginRight: 10 }}
            variant="contained"
            // color="#1BA098"
            onClick={createTeam}
          >
            {" "}
            Submit
          </Button>
        </Box>
      </Modal>
    </>
  ) : null;
};

export default TeamOverview;
