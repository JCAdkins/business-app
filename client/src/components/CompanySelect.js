import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import {Box, Button, Paper, FormControl, InputLabel, Select, MenuItem} from "@mui/material";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { width } from "@mui/system";

const CompanySelect = () => {

    const container = {
        display: "flex",
        flexDirection: "column",
        padding: 35,
        justifyContent: "center",
        alignItems: "center",
       margin: "20% 20%",
    //    background: "rgb(6, 22, 30)"
      };
      
  return (
    <Paper style={container}>
    <Box
      component="form"
    //   
      noValidate
      autoComplete="off"
      style={container}>
    <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Company</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={'Company'}
    label="Company"
    // onChange={}
  >
    <MenuItem value={"Fedex"}>Fedex</MenuItem>
    <MenuItem value={"Apple"}>Apple</MenuItem>
    <MenuItem value={"Google"}>Google</MenuItem>
  </Select>
</FormControl>
     
    </Box>
    </Paper>
  );
};

export default CompanySelect;
