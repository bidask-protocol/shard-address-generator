import { styled } from "@mui/material/styles";

export const Wrapper = styled("div")(() => ({
  display: "flex",
  position: "fixed",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  width: "100%",
  gap: "50px",
}));

export const LightCircle = styled("div")(({ theme }) => ({
  position: "absolute",
  borderRadius: "50%",
  background: "rgba(107, 18, 246, 0.30)",
  filter: "blur(285.4284973144531px)",
  width: "740px",
  height: "740px",
  zIndex: 1,
  [theme.breakpoints.down("md")]: {
    width: "500px",
    height: "500px",
  },
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));
