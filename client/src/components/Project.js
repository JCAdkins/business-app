import React from "react";

import { Card, CardContent, Typography, Button } from "@mui/material";

const Project = ({ project, isAdmin }) => {
  const millisecondsInDay = 86400000;
  const elapsedDays = Math.floor((Date.now() - project["last-edited"]) / millisecondsInDay);

  const container = {
    textAlign: "left",
  };
  return (
    <Card
      style={{ color: "white", backgroundColor: "transparent", fontFamily: "helvetica" }}
      sx={{ boxShadow: 0, borderRadius: 0 }}
    >
      <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-end", ...container }}>
        <div style={{ width: "75%", padding: 10 }}>
          <p style={{ fontSize: 24, fontWeight: "bold" }}>
            {project.title}{" "}
            <span style={{ fontSize: 16 }}>
              Last edited {elapsedDays} day{elapsedDays === 1 ? "" : "s"} ago
            </span>
          </p>
          <p style={{ fontSize: 16 }}>{project.description}</p>
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
          <Button
            style={{ textTransform: "none", fontSize: 12, width: "80px", height: "25px", backgroundColor: "salmon" }}
          >
            Edit
          </Button>
        </div>
      </div>
      <hr />
    </Card>
  );
};

export default Project;
