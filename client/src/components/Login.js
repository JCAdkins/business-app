import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { Box, Button, Paper } from "@mui/material";
import styled from "@emotion/styled";
import { Navigate, useNavigate } from "react-router-dom";
import { width } from "@mui/system";


const Login = ({handleLogin, setUserName, setPassword}) => {
  
  
  

const Login = ({handleLogin, setUserName, setPassword}) => {

    const container = {
        display: "flex",
        flexDirection: "column",
        padding: 35,
        justifyContent: "center",
        alignItems: "center",
        margin: "20% 20%",
    //    background: "rgb(6, 22, 30)"
      }



  const container = {
    display: "flex",
    flexDirection: "column",
    padding: 35,
    justifyContent: "center",
    alignItems: "center",
    margin: "20% 20%",
    // background: "rgb(6, 22, 30)"
  };

  


  return (
    <Paper style={container}>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        style={container}
      >
        <TextField
          required
          id="outlined-required"
          label="userName"
          //sets username
          onChange={e => setUserName(e.target.value)}
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          onChange={e => setPassword(e.target.value)}
        />

        <Button variant="contained" onClick={() => handleLogin()}>
          Login
        </Button>
      </Box>
    </Paper>
  );
};

export default Login;
