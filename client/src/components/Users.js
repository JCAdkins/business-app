import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Link,
  Button,
  Typography,
  Modal,
  Box,
  TextField,
  Select,
  MenuItem,
} from "@mui/material";

const usersArray = [
  {
    id: 0,
    name: "HAL",
    email: "hal@ibm.com",
    team: "Discovery 1",
    isActive: false,
    isAdmin: true,
    status: "dead",
  },
  {
    id: 1,
    name: "Dave Bowman",
    email: "dave@nca.com",
    team: "Discovery 1",
    isActive: true,
    isAdmin: false,
    status: "unknown",
  },
  {
    id: 2,
    name: "Frank Poole",
    email: "frank@nca.com",
    team: "Discovery 1",
    isActive: false,
    isAdmin: false,
    status: "dead",
  },
  {
    id: 3,
    name: "Haywood Floyd",
    email: "haywood@nca.com",
    team: "National Council of Astronautics",
    isActive: true,
    isAdmin: true,
    status: "Earth",
  },
  {
    id: 4,
    name: "Aliens",
    email: "ljdlfljskl@dfdase.cdfdasfewom",
    team: "Super Beings",
    isActive: true,
    isAdmin: false,
    status: "unknown",
  },
];

// const emptyUser = {
//   name: "",
//   email: "",
//   team: "unknown",
//   isAdmin: false,
//   isActive: false,
//   status: "unknown",
// };

/**
 *
 * the individual pieces of the user will all be eventually moved into the "user" object
 */

const Users = props => {
  const [modalOpen, setModalOpen] = useState(false);
  const [userAdmin, setUserAdmin] = useState(false);
  const [error, setError] = useState(false);
  const [users, setUsers] = useState(usersArray);
  const [user, setUser] = useState({}); // all items below will be moved into this
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

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

  const handleSubmit = e => {
    e.preventDefault();
    // setUser({
    //   id: users.length,
    //   name: `${firstName} ${lastName}`,
    //   email,
    //   team: "TBD",
    //   isActive: false,
    //   isAdmin: userAdmin,
    //   status: "unknown",
    // });

    // error to be worked on since it's not working yet
    if (password1 !== password2) {
      setError(true);
    }
    setUsers([
      ...users,
      {
        id: users.length,
        name: `${firstName} ${lastName}`,
        email,
        team: "TBD",
        isActive: false,
        isAdmin: userAdmin,
        status: "unknown",
      },
    ]);
    // all this will be moved to the single "user" object
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword1("");
    setPassword2("");
    setModalOpen(false);
  };

  return (
    <div style={{ textAlign: "center", width: "80%", margin: "0 auto" }}>
      <Typography style={{ margin: "20px 0" }} variant="h3" component="h1">
        User Registry
      </Typography>
      <Typography style={{ marginBottom: 20 }} component="p">
        A general view of all your members in your organization.
      </Typography>
      <TableContainer component={Paper} elevation={4}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ fontSize: 16, fontWeight: "bold" }} align="center">
                Name
              </TableCell>
              <TableCell style={{ fontSize: 16, fontWeight: "bold" }} align="center">
                Email
              </TableCell>
              <TableCell style={{ fontSize: 16, fontWeight: "bold" }} align="center">
                Team
              </TableCell>
              <TableCell style={{ fontSize: 16, fontWeight: "bold" }} align="center">
                Active
              </TableCell>
              <TableCell style={{ fontSize: 16, fontWeight: "bold" }} align="center">
                Admin
              </TableCell>
              <TableCell style={{ fontSize: 16, fontWeight: "bold" }} align="center">
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map(user => (
              <TableRow key={user.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component="th" scope="row" align="center">
                  {user.name}
                </TableCell>
                <TableCell align="center">
                  <Link href={`mailto:${user.email}`}>{user.email}</Link>
                </TableCell>
                <TableCell align="center">{user.team}</TableCell>
                <TableCell align="center" style={{ fontWeight: "bold", color: user.isActive ? "green" : "red" }}>
                  {user.isActive ? "YES" : "NO"}
                </TableCell>
                <TableCell align="center" style={{ fontWeight: "bold", color: user.isAdmin ? "green" : "red" }}>
                  {user.isAdmin ? "YES" : "NO"}
                </TableCell>
                <TableCell align="center">{user.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div style={{ textAlign: "left" }}>
        <Button
          onClick={() => setModalOpen(true)}
          variant="contained"
          size="small"
          style={{ backgroundColor: "teal", color: "white", marginTop: 20 }}
        >
          Add User
        </Button>
      </div>
      <div>
        <Typography style={{ visibility: error ? "visible" : "hidden" }} component="h6" color="error">
          There was an error creating the user. Please try again.
        </Typography>
      </div>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <Box sx={modalStyle} component="form">
          <TextField
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            size="small"
            required
            label="First Name"
            style={{ paddingRight: 10 }}
          />
          <TextField
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            size="small"
            required
            label="Last Name"
          />
          <TextField
            value={email}
            onChange={e => setEmail(e.target.value)}
            fullWidth
            size="small"
            required
            label="Email"
            style={{ padding: "10px 0" }}
          />
          <TextField size="small" required type="password" label="Password" style={{ paddingRight: 10 }} />
          <TextField size="small" required type="password" label="Confirm Password" />
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <Typography component="h6">Make user admin?</Typography>
            <Select size="small" value={userAdmin} onChange={() => setUserAdmin(prev => !prev)} label="Pick an option">
              <MenuItem value={true}>True</MenuItem>
              <MenuItem value={false}>False</MenuItem>
            </Select>
          </div>
          <div style={{ textAlign: "center", marginTop: 20 }}>
            <Button style={{ marginRight: 10 }} variant="contained" color="success" onClick={handleSubmit}>
              {" "}
              Submit
            </Button>
            <Button variant="contained" color="secondary" onClick={() => setModalOpen(false)}>
              Cancel
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Users;
