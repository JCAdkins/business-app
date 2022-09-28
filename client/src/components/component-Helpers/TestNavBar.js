import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import BusinessIcon from '@mui/icons-material/Business';
import { MenuItem } from '@mui/material';

const TestNavBar = () =>{

    const [Link, setLink] = useState(null);
    const open = Boolean(Link);
    const handleClick = (e) =>{
        setLink(e.currentTarget);
    }

    const handleClose = (e) =>{
        setLink()
    }

    return(

    );
}