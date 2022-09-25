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
import { width } from "@mui/system";

const CompanySelect = ({ company, setCompany }) => {
  console.log("company from company", company);
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
  const select = {
    width: "400px",
  };

  let companies = [
    {
      name: "FedEx",
    },
    {
      name: "Apple",
    },
    {
      name: "Google",
    },
    {
      name: "FedEx",
    },
    {
      name: "Apple",
    },
    {
      name: "Google",
    },
  ];
  // handle setting company for admin and sending them to announcments page for their company
  const handleChange = event => {
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
            value={company}
            label="Company"
            style={select}
            onChange={handleChange}
          >
            {companies.map(company => (
              <MenuItem value={company.name}>{company.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Paper>
  );
};

export default CompanySelect;
