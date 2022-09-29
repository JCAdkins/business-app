import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { Box, Button, Paper, Card, Modal } from "@mui/material";
// import styled from "@emotion/styled";
// import { useNavigate } from "react-router-dom";
// import { width } from "@mui/system";
import NavBar from "./NavBar";
import fetchFromCompany from "../services/api";
import {container, card} from './component-Styles/mui-stylez'


const Announcements = () => {
  //userData will need to be set in the app.js then passed to the components that need it.
  let userData = localStorage.getItem("userData")
  let user = JSON.parse(userData)
  
  console.log('from announcements', user)

  
  const [announcementsToSet, setAnnouncementsToSet] = useState();
  const [announcementToCreate, setAnnouncementToCreate] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  
  // console.log("announcements to set", announcementsToSet)

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

  // const container = {
  //   display: "flex",
  //   flexDirection: "column",
  //   padding: 35,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   margin: "20% 20%",
  //   //    background: "rgb(6, 22, 30)"
  // };

  

  // const cardStyle = {
  //   display: "flex",
  //   flexDirection: "column",
  //   padding: 25,
  //   minWidth: "50%",
  //   marginBottom: "5%",
  // };

  
  useEffect(() => {
  const getAnnouncements = () => {
    let company = localStorage.getItem("company")
    console.log("from get announcmements",company)
    // eslint-disable-next-line
    const response = fetchFromCompany({
      endpoint: `companies/${company}/announcements`,
      
    }).then((data) => {
      console.log(data)
      setAnnouncementsToSet(data)
    })
    
  }
    getAnnouncements()
  }, [])
   
    
  const handleNewAnnouncement = () => {
    let company = localStorage.getItem('company')
    fetchFromCompany({
      method: 'POST',
      endpoint: `companies/${company}/users/${user.id}/announcements`,
      body: {
        title: 'New announcement',
        message: announcementToCreate,
        userId: userData.id,
        companyId: company
      }
    }).then(newAnnouncement => {
      setAnnouncementsToSet([...announcementsToSet, newAnnouncement])
      setAnnouncementToCreate('')
      setModalOpen(false)
    })
  }

  return announcementsToSet ? (
    <>
      <NavBar />
      <Paper style={container}>
      <h1>Announcements</h1>
        {user.credentials.admin ? (
          <Button
            onClick={() => setModalOpen(true)}
            variant="contained"
            size="small"
            style={{ backgroundColor: "teal", color: "white", marginTop: 20, marginRight: 0 }}
          >
            New
          </Button>
        ) : null}

        { announcementsToSet.map((announcement, idx) => 
          (
         <Card style={card}  
         sx={{
          borderRadius: 6,
          background: "#0C2D48",
          padding: "25%",
          margin: "1%",
        }}
        key={idx}>
           <h3 style={{ color: "#fff", align: "left" }}>{user.firstName}</h3>
           <h2>{announcement.title}</h2>
           <p style={{ padding: "10%" }}>{announcement.message}</p>
         </Card>
     ) 
        )}
       

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
                onClick={handleNewAnnouncement}
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
  ) : <h1>Loading...</h1>;
};

export default Announcements;
