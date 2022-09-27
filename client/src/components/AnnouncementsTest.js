import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { Box, Button, Paper, Card, Modal } from "@mui/material";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { width } from "@mui/system";
import Menu from "./NavBar";

const AnnouncementsTest = () => {


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

    const container = {
        display: "flex",
        flexDirection: "column",
        padding: 35,
        justifyContent: "center",
        alignItems: "center",
        margin: "20% 20%",
        //    background: "rgb(6, 22, 30)"
    };

    const cardStyle = {
        display: "flex",
        flexDirection: "column",
        padding: 25,
        minWidth: "50%",
        marginBottom: "5%",
    };

    return (
            <Paper style={container}>
                <h1>Announcements</h1>

            </Paper>
    );
};

export default AnnouncementsTest;
