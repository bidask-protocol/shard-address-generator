import { styled } from "@mui/material/styles";
import MuiButton, { ButtonProps as MuiButtonProps } from "@mui/material/Button";

export const StyledButton = styled(MuiButton)<MuiButtonProps>(({ theme }) => ({
  "&.MuiButton-root": {
    borderRadius: "12px",
    boxShadow: "none",
    textTransform: "none",
  },
  "&.primary": {
    backgroundColor: "rgba(112, 55, 201, 0.15)",
    color: theme.palette.grey[50],
    border: `1px solid ${theme.palette.secondary.main}`,
    background: theme.palette.secondary.main,
    transition: "ease 0.5s",
    "&.Mui-disabled": {
      backgroundColor: theme.palette.primary.main,
      opacity: 0.4,
    },
    ":hover": {
      opacity: 0.8,
    },
  },
  "&.secondary": {
    backgroundColor: "rgba(112, 55, 201, 0.15)",
    color: theme.palette.grey[50],
    border: `1px solid ${theme.palette.secondary.main}`,

    "&.Mui-disabled": {
      backgroundColor: theme.palette.primary.main,
      opacity: 0.4,
    },
  },
  "&.text": {
    backgroundColor: theme.palette.text.primary,
    color: theme.palette.grey[50],
    border: "none",
    "&:hover": {
      background: "#1735A0",
    },
  },
  "&.error": {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.common.white,
    "&:hover": {
      background: "#990404",
    },
  },
  "&.small": {
    padding: "22px",
    minWidth: "44px",
    height: "32px",
    borderRadius: "14px",
    [theme.breakpoints.between("sm", "md")]: {
      padding: "16px 4px",
      minWidth: "40px",
      height: "28px",
      borderRadius: "12px",
    },
  },
  "&.medium": {
    padding: "12px 30px",
    minWidth: "140px",
    height: "72px",
    fontSize: "18px !important",
    [theme.breakpoints.down("md")]: {
      padding: "12px",
    },
  },
}));
