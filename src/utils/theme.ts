import "@fontsource/mulish";
import { createTheme, Theme } from "@mui/material/styles";

export const theme: Theme = createTheme({
  typography: {
    fontFamily: "Mulish, Arial, sans-serif",
    h1: {
      fontFamily: "Mulish, Arial, sans-serif",
      fontSize: "72px",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "normal",
    },
    h2: {
      fontFamily: "Mulish, Arial, sans-serif",
      fontSize: "32px",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "normal",
    },
    h3: {
      fontFamily: "Mulish, Arial, sans-serif",
      fontSize: "24px",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "normal",
    },
    h4: {
      fontFamily: "Mulish, Arial, sans-serif",
      fontSize: "22px",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "normal",
    },
    h5: {
      fontFamily: "Mulish, Arial, sans-serif",
      fontSize: "20px",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "normal",
    },
    h6: {
      fontFamily: "Mulish, Arial, sans-serif",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "normal",
    },
  },
  palette: {
    background: {
      default: "#09040F",
    },
    text: {
      primary: "#ffffff",
    },
    primary: {
      main: "#09040F",
      dark: "#0C0514",
    },
    secondary: {
      main: "#7037C9",
      light: "#2c283B",
      dark: "#1F1C29",
    },
    grey: {
      "100": "#9494A8",
      "200": "#373249",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 641,
      md: 721,
      lg: 961,
      xl: 1281,
    },
  },
});
