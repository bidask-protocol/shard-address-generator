import { styled } from "@mui/material/styles";
import { TextField } from "@mui/material";

interface StyledTextFieldProps {
  fontSize?: string;
  fontWeight?: number;
  border?: string;
  padding?: string;
  isActive?: boolean;
}

export const StyledTextField = styled(TextField, {
  shouldForwardProp: (prop) => prop !== "isActive",
})<StyledTextFieldProps>(({ theme, border, padding, isActive }) => ({
  "& .MuiInputBase-root": {
    borderRadius: "12px",
    border: isActive
      ? `1px solid ${theme.palette.secondary.main}`
      : border || `1px solid ${theme.palette.grey[200]}`,
    height: "72px",
    "&.Mui-disabled": {
      WebkitTextFillColor: "black",
    },
    "& input[type=number]": {
      MozAppearance: "textfield",
    },
    "& input[type=number]::-webkit-outer-spin-button": {
      WebkitAppearance: "none",
      margin: 0,
    },
    "& input[type=number]::-webkit-inner-spin-button": {
      WebkitAppearance: "none",
      margin: 0,
    },
  },
  "& .MuiOutlinedInput-root": {
    padding: padding || "12px 16px",
    "& input": {
      borderRadius: "14px",
      padding: 0,
    },
    "&:hover fieldset": {
      borderWidth: 0,
    },
    "&.Mui-disabled": {
      WebkitTextFillColor: "black",
    },
    "&.Mui-disabled fieldset": {
      WebkitTextFillColor: "black",
    },
  },
  "& .MuiOutlinedInput-input": {
    height: "72px",
    fontSize: "20px",
    fontWeight: 600,
  },
  "& .MuiOutlinedInput-input::placeholder": {
    textOverflow: "ellipsis !important",
    color: theme.palette.grey[100],
    opacity: 0.4,
  },
}));
