import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { Box, Button, Paper, Card, Modal } from "@mui/material";
// import styled from "@emotion/styled";
// import { useNavigate } from "react-router-dom";
// import { width } from "@mui/system";
import NavBar from "./NavBar";
import fetchFromCompany from "../services/api";
import { container, card, modal, input } from './component-Styles/mui-stylez'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const Announcements = () => {
  //userData will need to be set in the app.js then passed to the components that need it.
  let userData = localStorage.getItem("userData")
  let user = JSON.parse(userData)

  console.log('from announcements', user)


  const [announcementsToSet, setAnnouncementsToSet] = useState();
  const [announcementToCreate, setAnnouncementToCreate] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const getAnnouncements = () => {
      let company = localStorage.getItem("company")
      console.log("from get announcmements", company)
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
        _________________________________________________________________________________________________
        {announcementsToSet.map((announcement, idx) =>
        (
          <Card style={card}
            sx={{
              borderRadius: 6,
              background: "#0C2D48",
              padding: "25%",
              margin: "1%",
            }}
            key={idx}>
            <h3 style={{ color: "#fff", marginRight: "60%", marginBottom: 0 }}>{user.firstName}</h3>
            <h4 style={{ color: "#fff", marginLeft: "50%", marginTop: 0 }}>30 September 2022</h4>
            <h2>{announcement.title}</h2>
            <p style={{ padding: "10%", paddingTop: 0 }}>{announcement.message}</p>
          </Card>
        )
        )}


        <Modal open={modalOpen} style={card}
          onClose={() => setModalOpen(false)}>
          <Box component="form" style={modal} sx={{
            boxShadow: "2px 2px 2px",
            borderRadius: 6,
            padding: "10%",
          }}>
            <HighlightOffIcon
              onClick={() => setModalOpen(false)}
              sx={{ color: "rgb(255, 0, 0)", marginLeft: "80%", marginBottom: "10%" }}
            />
            <TextField
              value={announcementToCreate}
              onChange={e => setAnnouncementToCreate(e.target.value)}
              size="small"
              id="standard-required"
              variant="standard"
              required
              label="Announcement"
              style={input}
            />
            <div style={{ textAlign: "center", marginTop: 20 }}>
              <Button
                variant="contained"
                size="small"
                style={{ backgroundColor: "teal", color: "white", marginTop: 20, marginRight: 0 }}
                onClick={handleNewAnnouncement}
              >
                {" "}
                Submit
              </Button>
            </div>
          </Box>
        </Modal>
      </Paper>
    </>
  ) : <h1>Loading...</h1>;
};

export default Announcements;
