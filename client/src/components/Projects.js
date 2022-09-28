import React, { useState, useEffect } from "react";
import Project from "./Project";
import { Card, CardContent, Typography, Button, Container, Modal, TextField, Box } from "@mui/material";

const projectsArray = [
  {
    id: 0,
    name: "Project 1",
    "last-edited": new Date("2022-09-15"),
    description: "This is a description of project 1. Not much to see yet. Check back later.",
  },
  {
    id: 1,
    name: "Project 2",
    "last-edited": new Date("2022-09-05"),
    description: "This is a description of project 2. Not much to see yet. Check back later.",
  },
  {
    id: 2,
    name: "Project 3",
    "last-edited": new Date("2022-09-20"),
    description: "This is a description of project 3. Not much to see yet. Check back later.",
  },
  {
    id: 3,
    name: "Project 4",
    "last-edited": new Date("2022-09-08"),
    description: "This is a description of project 4. Not much to see yet. Check back later. I mean, really later.",
  },
  {
    id: 4,
    name: "Project 5",
    "last-edited": new Date("2022-09-23"),
    description: "This is a description of project 5. Not much to see yet. Check back later.",
  },
];

const emptyProjectObject = {
  id: null,
  name: "",
  "last-edited": new Date(),
  description: "",
};

const Projects = props => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projects, setProjects] = useState(projectsArray);
  const [project, setProject] = useState(emptyProjectObject);
  const [isValidated, setIsValidated] = useState(false);

  useEffect(() => {
    if (validateForm()) setIsValidated(true);
    else setIsValidated(false);
    console.log(project);
  }, [project]);

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
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  const editProject = projectId => {
    const { id, name, description } = projects.find(p => p.id === projectId);
    setProject({ id, name, description });
    setIsModalOpen(true);
  };

  const handleSubmitProject = e => {
    e.preventDefault();
    if (project.id != null) {
      setProjects(
        projects.map(p => {
          if (p.id === project.id) {
            return project;
          } else {
            return p;
          }
        })
      );
    } else {
      setProject({ ...project, id: Date.now() });
      setProjects([...projects, project]);
    }
    setProject(emptyProjectObject);
    setIsModalOpen(false);
    setIsValidated(false);

    // props.postUser(postNewProject()) // send new newUser object to App component to be POSTed to API
  };

  const cancelSubmit = () => {
    setIsModalOpen(false);
    setProject(emptyProjectObject);
  };

  const validateForm = () => {
    return project.name.trim() && project.description.trim();
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
            fontSize: 13,
            width: "80px",
            height: "25px",
            backgroundColor: "teal",
            color: "white",
            borderRadius: 8,
          }}
          onClick={() => setIsModalOpen(true)}
        >
          New
        </Button>
      </div>
      <div>
        <hr />
        {projects.map(p => (
          <Project key={p.id} project={p} isAdmin={false} handleClick={editProject} />
        ))}
      </div>
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Box sx={modalStyle} component="form">
          <TextField
            value={project.name}
            onChange={handleChange}
            size="small"
            required
            name="name"
            label="Project Name"
            fullWidth
            style={{ paddingBottom: 20 }}
          />
          <TextField
            value={project.description}
            onChange={handleChange}
            size="small"
            required
            name="description"
            label="description"
            fullWidth
          />
          <div style={{ textAlign: "center", marginTop: 20 }}>
            <Button
              style={{ marginRight: 10 }}
              variant="contained"
              color="success"
              disabled={!isValidated}
              onClick={handleSubmitProject}
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
