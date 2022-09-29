import React, { useState, useEffect } from "react";
import Project from "./Project";
import { Typography, Button, Container, Modal, TextField, Box } from "@mui/material";
import fetchFromCompany from "../services/api";
import NavBar from "./NavBar";

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
  description: "",
  active: false,
  team: {
    id: null,
  },
};

const Projects = props => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState(emptyProjectObject);
  const [isValidated, setIsValidated] = useState(false);

  let user = JSON.parse(localStorage.getItem("userData"));

  // GET projects from company ID /companies/{id}/projects
  useEffect(() => {
    fetch(`http://localhost:8080/companies/${user.company.id}/projects`)
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(err => console.error(err));
  }, [user]);

  useEffect(() => {
    if (validateForm()) setIsValidated(true);
    else setIsValidated(false);
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
    if (project.id) {
      // PATCH existing project /companies/{companyId}/teams/{teamId}/projects/{projectId}
      patchProject();
    } else {
      // POST new project /companies/{companyId}/teams/{teamId}/projects
      postProject();
    }
    window.location.reload(false);
    setProject(emptyProjectObject);
    setIsModalOpen(false);
    setIsValidated(false);
  };

  const postProject = async () => {
    const returnedProject = await fetchFromCompany({
      method: "POST",
      endpoint: `companies/${user.company.id}/teams/${user.team.id}/projects`,
      body: project,
    });
    console.log("Added New Project: ", returnedProject);
    setProject(emptyProjectObject);
    window.location.reload(false);
  };

  const patchProject = async () => {
    console.log(project);
    const returnedProject = await fetchFromCompany({
      method: "PATCH",
      endpoint: `companies/${user.company.id}/teams/${user.team.id}/projects/${project.id}`,
      body: project,
    });
    console.log("Patched Project: ", returnedProject);
    setProject(emptyProjectObject);
    window.location.reload(false);
  };

  const cancelSubmit = () => {
    setIsModalOpen(false);
    setProject(emptyProjectObject);
  };

  const validateForm = () => {
    return project.name.trim() && project.description.trim();
  };

  return (
    <div>
      <NavBar />
      <Container sx={{ width: "75%", textAlign: "center" }}>
        <Typography style={{ margin: "20px 0", color: "white" }} variant="h3" component="h1">
          {user ? user.team.name : "Team"} Projects
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
              marginBottom: 20,
            }}
            onClick={() => setIsModalOpen(true)}
          >
            New
          </Button>
        </div>
        <div>
          <hr />
          {projects.map(p =>
            p.team.id === user.team.id && p.active ? (
              <Project key={p.id} project={p} isAdmin={false} handleClick={editProject} />
            ) : null
          )}
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
    </div>
  );
};

export default Projects;
