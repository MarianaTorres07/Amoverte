import {createTheme} from "@mui/material/styles";

const theme = createTheme({
    palette: {
        background:{
            default: '#FAFAF8',
        },
        text:{
            primary: '#1B1B1B', 
            secondary: '#55566B',
        },
        primary:{
            main: '#5B52E2',
            dark: '#423AC4',
        },
        secondary:{
            main: '#C6F135',
            dark: '#9FC71E',
        },
    },

    typography:{
        fontFamily: "'Inter', sans-serif",
        h1:{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 600,
            letterSpacing: '-0.01em',
        },
        h2:{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 600,
        },
    },
    shape:{
        borderRadius: 20,
    },
});

export default theme;