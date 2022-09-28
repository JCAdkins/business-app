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
import fetchFromCompany, { request } from "../services/api";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";


const CompanySelect = ({ userData, setCompany}) => {
  console.log("company select",userData)
  const navigate = useNavigate();
 
  const [companies, setCompanies] = useState()

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

  const getCompanies = async () => {
<<<<<<< HEAD
    console.log("calling get companies")
=======
    
>>>>>>> 7a06208b15baeb16e889d86c608b5c4842cdf8c4
    const response = await fetchFromCompany({
      endpoint: "companies",
      
    }).then((data) => {
<<<<<<< HEAD
      console.log(data)
        setCompanies(data)

    })

  
=======
     
        setCompanies(data)

    })
>>>>>>> 7a06208b15baeb16e889d86c608b5c4842cdf8c4
  }

  useEffect(() => {
    getCompanies()
  }, [])

  // handle setting company for admin and sending them to announcments page for their company
  const handleChange = event => {
    localStorage.removeItem("company")
    localStorage.setItem("company", event.target.value);
    navigate("/announcements");
  };

  return (
    companies ?
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
  : null);
};

export default CompanySelect;