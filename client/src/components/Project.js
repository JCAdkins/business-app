import React from "react";

const Project = ({ project, isAdmin }) => {
  const millisecondsInDay = 86400000;
  const elapsedDays = Math.floor((Date.now() - project["last-edited"]) / millisecondsInDay);

  const container = {
    textAlign: "left",
  };
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-end", ...container }}>
        <div style={{ width: "80%", padding: 10 }}>
          <p style={{ fontSize: 16 }}>
            {project.title}{" "}
            <span style={{ fontSize: 10 }}>
              Last edited {elapsedDays} day{elapsedDays === 1 ? "" : "s"} ago
            </span>
          </p>
          <p style={{ fontSize: 10 }}>{project.description}</p>
        </div>
        <div
          style={{
            width: "20%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            padding: "0 0 20px 0",
          }}
        >
          <button
            style={{ border: "none", width: "100px", height: "25px", backgroundColor: "salmon", borderRadius: 5 }}
          >
            Edit
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Project;
