import React, { useState, useEffect } from "react";
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
    firstName: "",
    lastName: "HAL",
    credentials: {
      username: "HAL",
      admin: true,
    },
    email: "hal@ibm.com",
    phone: "000-000-0000",
    active: false,
    team: {
      id: 0,
      name: "Jupiter Mission",
      description: "",
    },
    company: {
      id: 0,
      name: "NCA",
      description: "",
    },
  },
  {
    id: 1,
    firstName: "Dave",
    lastName: "Bowman",
    credentials: {
      username: "DaveBowman",
      admin: true,
    },
    email: "dave@nca.gov",
    phone: "000-000-0000",
    active: true,
    team: {
      id: 0,
      name: "Jupiter Mission",
      description: "",
    },
    company: {
      id: 0,
      name: "NCA",
      description: "",
    },
  },
  {
    id: 2,
    firstName: "Frank",
    lastName: "Poole",
    credentials: {
      username: "FrankPool",
      admin: true,
    },
    email: "frank@nca.gov",
    phone: "000-000-0000",
    active: false,
    team: {
      id: 0,
      name: "Jupiter Mission",
      description: "",
    },
    company: {
      id: 0,
      name: "NCA",
      description: "",
    },
  },
  {
    id: 3,
    firstName: "Haywood",
    lastName: "Floyd",
    credentials: {
      username: "HaywoodFloyd",
      admin: true,
    },
    email: "haywood@nca.gov",
    phone: "000-000-0000",
    active: true,
    team: {
      id: 1,
      name: "Headquarters",
      description: "",
    },
    company: {
      id: 0,
      name: "NCA",
      description: "",
    },
  },
  {
    id: 4,
    firstName: "Nasty",
    lastName: "Aliens",
    credentials: {
      username: "NastyAliens",
      isAdmin: false,
    },
    email: "a@a.a",
    phone: "000-000-0000",
    active: true,
    team: {
      id: 2,
      name: "Space",
      description: "",
    },
    company: {
      id: 1,
      name: "Unknown",
      description: "",
    },
  },
];

const emptyUserObject = {
  firstName: "",
  lastName: "",
  credentials: {
    username: "",
    password: "",
    admin: false,
  },
  email: "",
  phone: "",
  team: {
    id: 0,
    name: "",
    description: "",
  },
  company: {
    id: 0,
    name: "",
    description: "",
  },
};

/**
 *
 * PROPS:
 *   -- array of users from GET /users
 *   -- new user object to POST /users
 */
const Users = props => {
  const [users, setUsers] = useState(usersArray);
  const [newUser, setUser] = useState(emptyUserObject);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [passwordCheck, setPasswordCheck] = useState("");
  const [isValidated, setIsValidated] = useState(false);

  useEffect(() => {
    // GET call to localhost:????/users
  }, []);

  useEffect(() => {
    if (validateForm()) setIsValidated(true);
    else setIsValidated(false);
  }, [newUser, passwordCheck]);

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
    setUsers([...users, newUser]);
    setUser(emptyUserObject);
    setPasswordCheck("");
    setIsModalOpen(false);
    setIsValidated(false);
    // props.postUser(postNewUser()) // send new newUser object to App component to be POSTed to API
  };

  const handleChange = e => {
    if (e.target.name === "password") {
      setUser({
        ...newUser,
        credentials: {
          username: newUser.credentials.username,
          admin: newUser.credentials.admin,
          password: e.target.value,
        },
      });
    } else if (e.target.name === "admin") {
      setUser({
        ...newUser,
        credentials: {
          username: newUser.credentials.username,
          password: newUser.credentials.password,
          admin: e.target.value,
        },
      });
    } else {
      setUser({ ...newUser, [e.target.name]: e.target.value });
    }
  };

  const cancelSubmit = newUser => {
    setUser(emptyUserObject);
    setPasswordCheck("");
    setIsModalOpen(false);
    setIsValidated(false);
  };

  const validateForm = () => {
    return (
      newUser.firstName.trim() &&
      newUser.lastName.trim() &&
      newUser.email.trim() &&
      newUser.credentials.password.trim() &&
      newUser.credentials.password.trim() === passwordCheck
    );
  };

  const postNewUser = () => {
    return {
      credentials: {
        username: newUser.firstName + newUser.lastName,
        password: newUser.credentials.password,
        admin: newUser.credentials.admin,
      },
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      email: newUser.email,
      phone: "000-000-0000",
    };
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
            {users.map(newUser => (
              <TableRow key={newUser.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component="th" scope="row" align="center">
                  {newUser.firstName + " " + newUser.lastName}
                </TableCell>
                <TableCell align="center">
                  <Link href={`mailto:${newUser.email}`}>{newUser.email}</Link>
                </TableCell>
                <TableCell align="center">{newUser.team.name}</TableCell>
                <TableCell
                  align="center"
                  style={{
                    fontWeight: "bold",
                    color: newUser.active ? "green" : "red",
                  }}
                >
                  {newUser.active ? "YES" : "NO"}
                </TableCell>
                <TableCell
                  align="center"
                  style={{
                    fontWeight: "bold",
                    color: newUser.credentials.admin ? "green" : "red",
                  }}
                >
                  {newUser.credentials.admin ? "YES" : "NO"}
                </TableCell>
                <TableCell align="center">{newUser.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div style={{ textAlign: "left" }}>
        <Button
          onClick={() => setIsModalOpen(true)}
          variant="contained"
          size="small"
          style={{ backgroundColor: "teal", color: "white", marginTop: 20 }}
        >
          Add User
        </Button>
      </div>
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Box sx={modalStyle} component="form">
          <TextField
            value={newUser.firstName}
            onChange={handleChange}
            size="small"
            required
            label="First Name"
            name="firstName"
            style={{ paddingBottom: 20 }}
          />
          <TextField
            value={newUser.lastName}
            onChange={handleChange}
            name="lastName"
            size="small"
            required
            label="Last Name"
          />
          <TextField
            value={newUser.email}
            type="email"
            onChange={handleChange}
            fullWidth
            size="small"
            required
            label="Email"
            name="email"
            style={{ paddingBottom: 20 }}
          />
          <TextField
            value={newUser.credentials.password}
            onChange={handleChange}
            size="small"
            required
            type="password"
            label="Password"
            name="password"
          />
          <TextField
            value={passwordCheck}
            onChange={e => setPasswordCheck(e.target.value)}
            size="small"
            required
            type="password"
            label="Confirm Password"
            error={newUser.credentials.password !== passwordCheck}
          />
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <Typography component="h6">Make newUser admin?</Typography>
            <Select size="small" value={false} onChange={handleChange} label="Pick an option" name="admin">
              <MenuItem value={true}>True</MenuItem>
              <MenuItem value={false}>False</MenuItem>
            </Select>
          </div>
          <div style={{ textAlign: "center", marginTop: 20 }}>
            <Button
              style={{ marginRight: 10 }}
              variant="contained"
              color="success"
              disabled={!isValidated}
              onClick={handleSubmit}
            >
              Submit
            </Button>
            <Button variant="contained" color="secondary" onClick={cancelSubmit}>
              Cancel
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Users;
