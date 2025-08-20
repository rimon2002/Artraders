import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2', // Example: Blue primary color
        },
        secondary: {
            main: '#ff5722', // Example: Orange secondary color
        },
    },
    typography: {
        fontFamily: 'Roboto, sans-serif',
    },
});

export default theme;