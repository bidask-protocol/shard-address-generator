import { styled } from "@mui/material";

export const Container = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  gap: "20px",
  padding: "20px 0",
  zIndex: 2,
  position: "absolute",
  bottom: 0,
}));

export const Block = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "5px",
  justifyContent: "space-around",
  width: "40px",
  height: "40px",
  border: `1px solid ${theme.palette.secondary.main}`,
  borderRadius: "12px",
  cursor: "pointer",
  transition: "opacity 0.3s ease",
  zIndex: 2,
  background: "#9494A8",
  "&:hover": {
    opacity: 0.4,
  },
}));

export const Image = styled("img")(({ theme }) => ({
  width: "20px",
  [theme.breakpoints.down("md")]: {
    width: "20px",
  },
}));
