import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { Box, Button, Paper, Card, Modal } from "@mui/material";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { width } from "@mui/system";
import Menu from "./NavBar";

const Announcements = ({ userData, author }) => {
  //userData will need to be set in the app.js then passed to the components that need it.
  let user = localStorage.getItem("userData");
  let userObj = JSON.parse(user);

  let company = 1;

  userData = [
    {
      id: 1,
      credentials: {
        userName: "rboard321",
        admin: true,
      },
      first: "Ricky",
      last: "Board",
      email: "testing@yahoo.com",
      phone: "-123-234-5432",
      active: true,
      team: {
        id: 1,
        name: "awesome",
        description: "crushing it",
        company: {
          id: 3,
          name: "Apple",
          description: "working on products",
        },
      },
      company: {
        id: 3,
        name: "Apple",
        description: "working on products",
      },
    },
  ];

  console.log("userData from announcements", userData[0].company.id);

  let sampleAnnouncements = [
    {
      id: 1,
      author: "Ricky",
      date: "November 17, 2022",
      description: "This is the description for project 1",
    },
    {
      id: 2,
      author: "Steven",
      date: "November 17, 2022",
      description: "This is the description for project 2",
    },
    {
      id: 3,
      author: "Harold",
      date: "November 17, 2022",
      description: "This is the description for project 3",
    },
    {
      id: 1,
      author: "Ricky",
      date: "November 17, 2022",
      description: "This is the description for project 1",
    },
    {
      id: 2,
      author: "Steven",
      date: "November 17, 2022",
      description: "This is the description for project 2",
    },
    {
      id: 3,
      author: "Harold",
      date: "November 17, 2022",
      description: "This is the description for project 3 Last one",
    },
  ];

  const [announcementsToSet, setAnnouncementsToSet] =
    useState(sampleAnnouncements);
  const [announcementToCreate, setAnnouncementToCreate] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  console.log(">>>modal open", modalOpen);
  console.log("announcement to create", announcementToCreate);

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

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

  const getAnnouncements = announcementsToSet => {
    return announcementsToSet;
  };

  console.log(
    "testing getting announcments",
    getAnnouncements(sampleAnnouncements)
  );

  //map over all announcments and set the announcments based on admin and company selected or user and company they work for

  //    const fetchAnnouncements = () => {
  //     const announcements = getAnnouncements(sampleAnnouncements)
  //     let announcementsToSet = []
  //     if(admin){
  //     announcements.map((announcement) => {
  //       if(company === announcement.id){
  //         announcementsToSet.push(announcement)
  //       }
  //       return announcementsToSet
  //     })
  //     setAnnouncementsToSet(announcementsToSet)
  //   }
  //   if(!admin){
  //     announcements.map((announcement) => {
  //       if(userData[0].company.id === announcement.id){
  //         announcementsToSet.push(announcement)
  //       }
  //       return announcementsToSet
  //     })
  //     setAnnouncementsToSet(announcementsToSet)
  //   }
  //   }

  // fetchAnnouncements()

  //   useEffect(() => {
  //     fetchAnnouncements()
  //   }, [])

  const handleNewProject = () => {
    console.log("anouncementtocreate  Handle project", announcementToCreate);
    setAnnouncementsToSet([
      ...announcementsToSet,
      {
        id: userData[0].company.id,
        author: "author",
        date: "November 22, 2022",
        description: announcementToCreate,
      },
    ]);
    getAnnouncements(announcementsToSet);
    // setAnnouncementToCreate('')
    setModalOpen(false);
    // window.location.reload();
  };

  return (
    <>
      <Menu />
      <Paper style={container}>
        {admin ? (
          <Button
            onClick={() => setModalOpen(true)}
            variant="contained"
            size="small"
            style={{ backgroundColor: "teal", color: "white", marginTop: 20 }}
          >
            New Project
          </Button>
        ) : null}
        <h1>Announcements</h1>
        {announcementsToSet.map(announcement => {
          //map over announcements and return only announcments that match the company
          return userData[0].credentials.admin &&
            company === announcement.id ? (
            <Card style={cardStyle}>
              <h1>User is admin andcompany and id match</h1>
              <h3>{announcement.author}</h3>
              <p>{announcement.description}</p>
            </Card>
          ) : null;
        })}

        <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
          <Box sx={modalStyle} component="form">
            <TextField
              value={announcementToCreate}
              onChange={e => setAnnouncementToCreate(e.target.value)}
              size="small"
              required
              label="Announcement"
              style={{ paddingRight: 10 }}
            />
            <div style={{ textAlign: "center", marginTop: 20 }}>
              <Button
                style={{ marginRight: 10 }}
                variant="contained"
                color="success"
                onClick={handleNewProject}
              >
                {" "}
                Submit
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => setModalOpen(false)}
              >
                Cancel
              </Button>
            </div>
          </Box>
        </Modal>
      </Paper>
    </>
  );
};

export default Announcements;
