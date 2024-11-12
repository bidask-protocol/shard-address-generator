import React, { forwardRef } from "react";
import { TextFieldProps } from "@mui/material/TextField";
import { StyledTextField } from "./styles";

export interface InputProps extends Omit<TextFieldProps, "variant"> {
  title?: string;
  id?: string;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  isActive?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    title,
    id,
    placeholder,
    type = "text",
    disabled = false,
    onChange,
    isActive,
    ...rest
  } = props;

  return (
    <StyledTextField
      id={id}
      placeholder={placeholder}
      type={type}
      disabled={disabled}
      onChange={onChange}
      inputRef={ref}
      autoComplete="off"
      sx={{
        width: "100%",
        "& .MuiInputBase-input.Mui-disabled": {
          WebkitTextFillColor: "#000000",
        },
      }}
      isActive={isActive}
      {...rest}
    />
  );
});

Input.displayName = "Input";
