import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const primaryColor = "#1976d2";
const secondaryColor = "#f50057";
const backgroundColor = "#f9f9f9";

let theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
      light: "#63a4ff",
      dark: "#004ba0",
      contrastText: "#fff",
    },
    secondary: {
      main: secondaryColor,
      light: "#ff5983",
      dark: "#bb002f",
      contrastText: "#fff",
    },
    background: {
      default: backgroundColor,
      paper: "#ffffff",
    },
    text: {
      primary: "#212121",
      secondary: "#555555",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
    },
    body2: {
      fontSize: "0.9rem",
      lineHeight: 1.5,
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: "8px 20px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export { theme };
