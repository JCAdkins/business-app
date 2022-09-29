import * as React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import BusinessIcon from "@mui/icons-material/Business";
import { MenuItem } from "@mui/material";

const NavBar = () => {
  let userData = localStorage.getItem("userData");
  let user = JSON.parse(userData);

  const navigate = useNavigate();


  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = e => {
    setAnchorEl(e.currentTarget);

  };
  const handleClose = e => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    navigate("/")
    localStorage.removeItem("userData")
    localStorage.removeItem("admin")
    localStorage.removeItem("company")
  }

  return (
    <Box>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <BusinessIcon />
          <IconButton
              size="large"
              color="inherit"
              id="demo-positioned-button"
              aria-controls={open ? "demo-positioned-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}>
            <MenuIcon />
          </IconButton>

          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >

            {user.credentials.admin ? (
              <>
                <MenuItem>
                  <Link to="/" style={{ textDecoration: 'none' }}>Home</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/teamoverview" style={{ textDecoration: 'none' }}>Teams</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/users" style={{ textDecoration: 'none' }}>Users</Link>
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                  Logout
                </MenuItem>
              </>
            ) : (
              <>
                <MenuItem>
                  <Link to="/" style={{ textDecoration: 'none' }}>Home</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/projects" style={{ textDecoration: 'none' }}>projects</Link>
                </MenuItem>
                
                <MenuItem onClick={handleLogout}>
                  Logout
                </MenuItem>
              </>
            )}
          </Menu>

        </Toolbar>
      </AppBar>
    </Box>
  );
};


export default NavBar;

