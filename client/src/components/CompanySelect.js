import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import {
  Box,
  Button,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";


const CompanySelect = ({ userData}) => {
  
  const navigate = useNavigate();
  const [company, setCompany] = useState()
  const container = {
    display: "flex",
    flexDirection: "column",
    padding: 35,
    justifyContent: "center",
    alignItems: "center",
    margin: "20% 20%",
    //    background: "rgb(6, 22, 30)"
  };
  const select = {
    width: "400px",
  };

  let companies = [
    {
      id: 1,
      name: "FedEx",
    },
    {
      id: 2,
      name: "Apple",
    },
    {
      id: 3,
      name: "Google",
    },
    {
      id: 1,
      name: "FedEx",
    },
    {
      id: 2,
      name: "Apple",
    },
    {
      id: 3,
      name: "Google",
    },
  ];
  // handle setting company for admin and sending them to announcments page for their company
  const handleChange = event => {
    console.log("event" , event.target.value)
    setCompany(event.target.value);
    navigate("/announcements");
  };

  return (
    <Paper style={container}>
      <Box component="form" noValidate autoComplete="off" style={container}>
        <h1>Select Company</h1>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Company</InputLabel>
          <Select
            labelId="companies-to-select"
            id="cpmpanies"
            value={''}
            label="Company"
            style={select}
            onChange={handleChange}
          >
            {companies.map(company => (
              <MenuItem value={company.id}>{company.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Paper>
  );
};

export default CompanySelect;
