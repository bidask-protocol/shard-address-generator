import { styled } from "@mui/material/styles";

export const Container = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  position: "relative",
  cursor: "pointer",
  padding: "8px",
  borderRadius: "4px",
  width: "100%",
  transition: "background-color 0.2s",
  backgroundColor: "transparent",
  "&:hover": {
    backgroundColor: theme.palette.secondary.light,
  },
}));

export const Title = styled("p")({
  margin: 0,
  marginRight: "8px",
  color: "#fff",
});

export const ValueContainer = styled("div")({
  display: "flex",
  alignItems: "center",
});

export const Value = styled("div")(({ theme }) => ({
  margin: 0,
  marginRight: "8px",
  color: "#fff",
  maxWidth: "400px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  [theme.breakpoints.down("md")]: {
    width: "200px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "150px",
  },
}));
