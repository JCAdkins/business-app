import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { Box, Button, Paper, Card } from "@mui/material";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { width } from "@mui/system";

const Announcements = ({ company }) => {
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

  let admin = true;

  const cardStyle = {
    display: "flex",
    flexDirection: "column",
    padding: 25,
    minWidth: "50%",
    marginBottom: "5%",
  };

  let sampleAnnouncements = [
    {
      author: "Ricky",
      company: "apple",
      title: "project 1",
      description: "This is the description for project 1",
    },
    {
      author: "Steven",
      company: "fedex",
      title: "project 2",
      description: "This is the description for project 2",
    },
    {
      author: "Harold",
      company: "Google",
      title: "project 3",
      description: "This is the description for project 3",
    },
    {
      author: "Ricky",
      company: "Apple",
      title: "project 1",
      description: "This is the description for project 1",
    },
    {
      author: "Steven",
      company: "fedex",
      title: "project 2",
      description: "This is the description for project 2",
    },
    {
      author: "Harold",
      company: "Google",
      title: "project 3",
      description: "This is the description for project 3",
    },
    {
      author: "Ricky",
      company: "Apple",
      title: "project 1",
      description: "This is the description for project 1",
    },
    {
      author: "Steven",
      company: "fedex",
      title: "project 2",
      description: "This is the description for project 2",
    },
    {
      author: "Harold",
      company: "Google",
      title: "project 3",
      description: "This is the description for project 3",
    },
  ];

  const handleNewProject = () => {
    navigate("/createproject");
  };

  return (
    <Paper style={container}>
      {admin ? <Button>New Project</Button> : null}
      <h1>Announcements</h1>
      {sampleAnnouncements.map(announcement =>
        //map over announcements and return only announcments that match the company
        company.toLowerCase() === announcement.company.toLowerCase() ? (
          <Card style={cardStyle}>
            <h3>{announcement.author}</h3>
            <h3>{announcement.company}</h3>
            <h5>{announcement.title}</h5>
            <p>{announcement.description}</p>
          </Card>
        ) : (
          //return all announcements for regular workers
          <Card style={cardStyle}>
            <h3>{announcement.author}</h3>
            <h3>{announcement.company}</h3>
            <h5>{announcement.title}</h5>
            <p>{announcement.description}</p>
          </Card>
        )
      )}
    </Paper>
  );
};

export default Announcements;
