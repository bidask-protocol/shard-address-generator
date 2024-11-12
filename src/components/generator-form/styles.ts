import { styled } from "@mui/material";

export const Container = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
}));

export const Form = styled("form")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "20px",
  zIndex: 2,
  background: theme.palette.primary.dark,
  padding: "40px",
  width: "700px",
  borderRadius: "20px",

  [theme.breakpoints.down("md")]: {
    width: "100%",
    padding: "20px",
  },
}));
