import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import fetchFromCompany from "../../services/api";
import { Link } from "react-router-dom";

const TeamCard = props => {
  const [teams, setTeams] = useState([]);
  const [projects, setProjects] = useState([]);
  const [users, setUsers] = useState([]);

  const getTeams = async () => {
    let company = localStorage.getItem("company");
    const response = await fetchFromCompany({
      endpoint: `companies/${company}/teams`,
    });
    console.log(response);
    setTeams(response);
    return response;
  };
  const getProjects = async () => {
    let company = localStorage.getItem("company");
    const response = await fetchFromCompany({
      endpoint: `companies/${company}/projects`,
    });
    console.log(response);
    setProjects(response);
    return response;
  };
  const getUsers = async () => {
    let teamId = 1;
    const response = await fetchFromCompany({
      endpoint: `users/team/${teamId}`,
    });
    console.log(response);
    setUsers(response);
    return response;
  };
  useEffect(() => {
    getTeams();
    getProjects();
    getUsers();
  }, []);

  console.log("teams", teams);
  console.log("projects", projects);
  console.log("users", users);

  // let teamName = teams.teamName;
  // let projectNum = getProjects.length;
  // let members = getUsers.username;

  return (
    <div class="card">
      <div class="card-header">
        <Stack direction="horizontal" gap={2}>
          <h2>teamName</h2>
          <h3># of Projects: 5</h3>
        </Stack>
      </div>
      ___________________________________________________________________________
      <div class="card-body">
        <h3>Members</h3>
        {/* {members.map((user) => ( */}
        <Button>
          <Link to={`users/?{user.username}`}>user</Link>
        </Button>
        {/* ))} */}
      </div>
    </div>
  );
};

export default TeamCard;

//TO DO:
//Set modal to return a team
//Import user data
//Set up conditionally rendered cards
//Set up member links
