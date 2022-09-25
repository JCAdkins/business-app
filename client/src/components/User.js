import React from "react";

const User = ({ user }) => {
  const { id, name, email, team, isActive, isAdmin, status } = user;

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
        <p>{name}</p>
        <p>
          <a href={`mailto:${email}`}>{email}</a>
        </p>
        <p>{team}</p>
        <p style={{ color: isActive ? "green" : "red" }}>{isActive ? "YES" : "NO"}</p>
        <p style={{ color: isAdmin ? "green" : "red" }}>{isAdmin ? "YES" : "NO"}</p>
        <p>{status}</p>
      </div>
      <br />
    </div>
  );
};

export default User;
