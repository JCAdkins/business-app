import { styled } from "@mui/material/styles";
import MuiButton from "@mui/material/Button";
import { createTheme } from '@mui/material';

export const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: "rgb(6, 22, 30)",
            constrastText: "#fff"
        },
        secondary: {
            main: "#1BA098"
        },
        success: {
            main: "#DEB992"
        },
        info: {
            main: "#FFFFFF"
        }
    },
});

export const Button = styled(MuiButton)(({ pill }) => ({
    color: "info",
    borderRadius: pill ? 50 : 4,
    border: '2px solid',
    borderColor: "#1BA098",
    margin: '5%',
    padding: '.5em 2.5em'
}));

export const container = {
    display: "flex",
    flexDirection: "column",
    padding: 45,
    justifyContent: "center",
    alignItems: "center",
    background: "rgb(6, 22, 30)",
    width: "100vhw",
    height: "100vh"
};

export const Card = {
    // border: '5px solid #DEB992',
    // boxShadow: "8px 8px 8px #DEB992",
    // borderRadius: 6,
    display: "flex",
    flexDirection: "column",
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    margin: "5% 20%",

}

export const input = {
    borderBottom: "white solid",
    color: "#1BA098",
    margin: "2%",
    background: "rgb(6, 22, 30)",
};

export const select = {
    width: "400px",
    // background: "#FFFFFF",
    // color: "#1BA098"
};