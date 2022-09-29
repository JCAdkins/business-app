import React from "react";
import TextField from "@mui/material/TextField";
import { Box, Paper } from "@mui/material";
import logo from '../Assets/logo.png'
import './component-Styles/main.css'
import {container, Card, Button, input} from './component-Styles/mui-stylez'

const Login = ({ handleLogin, setUserName, setPassword }) => {

  return (
    <Paper style={container}>
      <h1 className="welcome">
        COOK SYSTEMS SLACK
      </h1>
      <h3 className="welcome">Created by the best team <br/>to ever pass through...</h3>
       <Box
        component="form"
        noValidate
        autoComplete="off"
        style={Card}
        sx={{
          border: '5px solid #DEB992',
          boxShadow: "8px 8px 8px #DEB992",
          borderRadius: 6,
          width: "25%",
          height: "55%"
        }}
              >
        <img src={logo} alt="files"/>
        <TextField
          required
          id="standard-required"
          variant="standard"
          style={input}
          label="username"
          //sets username
          onChange={e => setUserName(e.target.value)}
        />
        <TextField
          id="standard-password-input"
          variant="standard"
          style={input}
          label="Password"
          type="password"
          onChange={e => setPassword(e.target.value)}
        />

        <Button 
        variant="outline"
        pill="true"
        onClick={() => handleLogin()}>
          Login
        </Button>
      </Box>
    </Paper>
  );
};

export default Login;