import { Toolbar as MuiToolbar } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Toolbar = styled(MuiToolbar)(({ theme }) => ({
  minHeight: "auto !important",
  padding: "40px 40px 10px 40px",
  gap: "64px",
  justifyContent: "center",
  [theme.breakpoints.down("lg")]: {
    gap: "24px",
  },
}));
