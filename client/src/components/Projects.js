import React from "react";
import Project from "./Project";

/**
 *
 */

const projects = [
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

const Projects = props => {
  return (
    <div style={{ textAlign: "center", width: "80%", margin: "0 auto" }}>
      <h1>Projects</h1>
      <div style={{ textAlign: "right" }}>
        <button
          style={{
            width: "100px",
            height: "25px",
            border: "none",
            backgroundColor: "teal",
            color: "white",
            borderRadius: 5,
          }}
        >
          New
        </button>
      </div>
      <div>
        <hr />
        {projects.map(project => (
          <Project key={project.id} project={project} isAdmin={false} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
