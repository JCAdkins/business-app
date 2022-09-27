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

/**
 * UserResponseDto
 * {
  id: number,
  credentials: { //CredentialsResponseDto//}
    username: string,
    admin: boolean,
  },
  first: string,
  last: string,
  email: string,
  phone: string,
  active: boolean,
  team: { //TeamResponseDto object//
    id: number,
    name: string,
    description: string,
  },
  company: { //CompanyResponseDto//
    id: number,
    name: string,
    description: string,
  }
}

CredentialsRequestDto
{
  username: string,
  password: string
}

UserRequestDto
{
  CredentialsRequestDto  
  first: string,
  last: string,
  email: string,
  phone: string,
}
 */

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
    id: 2,
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
    id: 3,
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
};

const Users = props => {
  const [modalOpen, setModalOpen] = useState(false);
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [users, setUsers] = useState(usersArray); // array of user objects from the api
  const [user, setUser] = useState(emptyUserObject); // one user object created from modal

  useEffect(() => {
    // GET call to localhost:????/users
  }, []);

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
    setUsers([...users, user]);

    setModalOpen(false);
  };

  const handleChange = e => {
    if (e.target.name === "password") {
      setUser({
        ...user,
        credentials: { username: user.credentials.username, admin: user.credentials.admin, password: e.target.value },
      });
    } else if (e.target.name === "admin") {
      setUser({
        ...user,
        credentials: {
          username: user.credentials.username,
          password: user.credentials.password,
          admin: e.target.value,
        },
      });
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

  const cancelSubmit = user => {
    setUser(emptyUserObject);
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
                  {user.firstName + " " + user.lastName}
                </TableCell>
                <TableCell align="center">
                  <Link href={`mailto:${user.email}`}>{user.email}</Link>
                </TableCell>
                <TableCell align="center">{user.team.name}</TableCell>
                <TableCell
                  align="center"
                  style={{
                    fontWeight: "bold",
                    color: user.active ? "green" : "red",
                  }}
                >
                  {user.active ? "YES" : "NO"}
                </TableCell>
                <TableCell
                  align="center"
                  style={{
                    fontWeight: "bold",
                    color: user.admin ? "green" : "red",
                  }}
                >
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
      <div></div>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <Box sx={modalStyle} component="form">
          <TextField
            value={user.firstName}
            onChange={handleChange}
            size="small"
            required
            label="First Name"
            name="firstName"
            style={{ paddingRight: 10 }}
          />
          <TextField
            value={user.lastName}
            onChange={handleChange}
            name="lastName"
            size="small"
            required
            label="Last Name"
          />
          <TextField
            value={user.email}
            type="email"
            onChange={handleChange}
            fullWidth
            size="small"
            required
            label="Email"
            name="email"
            style={{ padding: "10px 0" }}
          />
          <TextField
            value={user.credentials.password}
            onChange={e => setPassword1(e.target.value)}
            size="small"
            required
            type="password"
            label="Password"
            name="password1"
            style={{ paddingRight: 10 }}
          />
          <TextField
            value={password2}
            onChange={e => setPassword2(e.target.value)}
            size="small"
            required
            type="password2"
            label="Confirm Password"
            error={password1 !== password2}
          />
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <Typography component="h6">Make user admin?</Typography>
            <Select size="small" value={false} onChange={handleChange} label="Pick an option" name="admin">
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
              {/*<Button variant="contained" color="secondary" onClick={cancelSubmit}>*/}
              Cancel
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Users;
