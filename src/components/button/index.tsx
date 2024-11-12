import { FC } from "react";
import { ButtonProps as MuiButtonProps } from "@mui/material/Button";
import { Typography, CircularProgress } from "@mui/material";
import clsx from "clsx";
import { StyledButton } from "./styles";

interface ButtonProps extends Omit<MuiButtonProps, "variant" | "color"> {
  color?: string;
  textColor?: string;
  label?: string | React.ReactNode;
  isLoading?: boolean;
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({
  color = "primary",
  textColor = "#fff",
  size = "medium",
  onClick,
  disabled = false,
  isLoading = false,
  label = "",
  ...rest
}) => {
  const buttonClass =
    color === "primary" || color === "secondary" ? color : "customColor";

  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled || isLoading}
      className={clsx(buttonClass, size)}
      disableRipple
      {...rest}
      style={{
        ...(color !== "primary" && color !== "error"
          ? { backgroundColor: color }
          : {}),
      }}
    >
      {isLoading ? (
        <CircularProgress size={24} sx={{ color: textColor }} />
      ) : (
        <Typography
          sx={{
            whiteSpace: "nowrap",
          }}
          color={textColor}
          fontWeight={800}
          fontSize={"inherit"}
        >
          {label}
        </Typography>
      )}
    </StyledButton>
  );
};
