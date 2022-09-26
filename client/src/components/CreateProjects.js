

import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { Box, Button, Paper, Card } from "@mui/material";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { width } from "@mui/system";

const CreateProjects = () => {

  const navigate = useNavigate();

  const container = {
    display: "flex",
    flexDirection: "column",
    padding: 35,
    justifyContent: "center",
    alignItems: "center",
    margin: "20% 20%",
    //    background: "rgb(6, 22, 30)"
  };

  let admin = true

  const cardStyle = {
    display: "flex",
    flexDirection: "column",
    padding: 25,
    minWidth: "50%",
    marginBottom: "5%"
  }

  const handleSubmitProject = () => {
      
  }

  return (
    <Paper style={container}>
      <h1>Create Projects</h1>
    </Paper>
   
  );
};

export default CreateProjects;
