import React, { useState, useEffect } from "react";
import Project from "./Project";
import { Card, CardContent, Typography, Button, Container, Modal, TextField, Box } from "@mui/material";

const projectsArray = [
  {
    id: 0,
    title: "Project 1",
    "last-edited": new Date("2022-09-15"),
    description: "This is a description of project 1. Not much to see yet. Check back later.",
  },
  {
    id: 1,
    title: "Project 2",
    "last-edited": new Date("2022-09-05"),
    description: "This is a description of project 2. Not much to see yet. Check back later.",
  },
  {
    id: 2,
    title: "Project 3",
    "last-edited": new Date("2022-09-20"),
    description: "This is a description of project 3. Not much to see yet. Check back later.",
  },
  {
    id: 3,
    title: "Project 4",
    "last-edited": new Date("2022-09-08"),
    description: "This is a description of project 4. Not much to see yet. Check back later. I mean, really later.",
  },
  {
    id: 4,
    title: "Project 5",
    "last-edited": new Date("2022-09-23"),
    description: "This is a description of project 5. Not much to see yet. Check back later.",
  },
];

const emptyProjectObject = {
  name: "",
  description: "",
};

const Projects = props => {
  const [isNewProjectModalOpen, setIsNewProjectModalOpen] = useState(false);
  const [isEditProjectModalOpen, setIsEditProjectModalOpen] = useState(false);
  const [projects, setProjects] = useState(projectsArray);
  const [newProject, setNewProject] = useState(emptyProjectObject);
  const [isValidated, setIsValidated] = useState(false);

  useEffect(() => {
    if (validateForm()) setIsValidated(true);
    else setIsValidated(false);
  }, [newProject]);

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

  const handleChange = e => {
    setNewProject({
      ...newProject,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitNewProject = e => {
    e.preventDefault();
    setProjects([...projects, newProject]);
    setNewProject(emptyProjectObject);
    setIsNewProjectModalOpen(false);
    setIsEditProjectModalOpen(false);
    setIsValidated(false);
    // props.postUser(postNewProject()) // send new newUser object to App component to be POSTed to API
  };

  const cancelSubmit = () => {
    setIsNewProjectModalOpen(false);
    setIsEditProjectModalOpen(false);
    setNewProject(emptyProjectObject);
  };

  const validateForm = () => {
    return newProject.name.trim() && newProject.description.trim();
  };

  return (
    <Container sx={{ width: "75%", textAlign: "center" }}>
      <Typography style={{ margin: "20px 0", color: "white" }} variant="h3" component="h1">
        Projects
      </Typography>

      <div style={{ textAlign: "right" }}>
        <Button
          style={{
            textTransform: "none",
            fontSize: 12,
            width: "80px",
            height: "25px",
            border: "none",
            backgroundColor: "teal",
            color: "white",
          }}
        >
          New
        </Button>
      </div>
      <div>
        <hr />
        {projects.map(project => (
          <Project key={project.id} project={project} isAdmin={false} />
        ))}
      </div>

      {/* NEW PROJECT MODAL */}
      <Modal open={isNewProjectModalOpen} onClose={() => setIsNewProjectModalOpen(false)}>
        <Box sx={modalStyle} component="form">
          <TextField
            value={newProject.name}
            onChange={handleChange}
            size="small"
            required
            label="Project Name"
            name="name"
            style={{ paddingBottom: 20 }}
          />
          <TextField
            value={newProject.description}
            onChange={handleChange}
            size="small"
            required
            name="description"
            label="description"
          />
          <div style={{ textAlign: "center", marginTop: 20 }}>
            <Button
              style={{ marginRight: 10 }}
              variant="contained"
              color="success"
              disabled={!isValidated}
              onClick={handleSubmitNewProject}
            >
              Submit
            </Button>
            <Button variant="contained" color="secondary" onClick={cancelSubmit}>
              Cancel
            </Button>
          </div>
        </Box>
      </Modal>
    </Container>
  );
};

export default Projects;
