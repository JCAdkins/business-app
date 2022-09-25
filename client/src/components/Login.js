import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { Box, Button, Paper } from "@mui/material";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { width } from "@mui/system";

const Login = ({ setUserName }) => {
  const container = {
    display: "flex",
    flexDirection: "column",
    padding: 35,
    justifyContent: "center",
    alignItems: "center",
    margin: "20% 20%",
    //    background: "rgb(6, 22, 30)"
  };

  const handleLogin = () => {
    //pass in user credentials and verify
    //if user admin is true go to company select screen
    //if user is not admin go to anounncments
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
        />

        <Button variant="contained" onClick={() => handleLogin()}>
          Login
        </Button>
      </Box>
    </Paper>
  );
};

export default Login;
