import React from "react";
import TextField from "@mui/material/TextField";

const CustomTextField = ({
  error,
  helperText,
  value = "",
  variant = "outlined",
  size = "small",
  onChange = {},
  ...rest
}) => {
  return (
    <TextField
      error={error}
      id={"outlined-error-helper-text"}
      value={value}
      required={true}
      size={size}
      onChange={onChange}
      variant={variant}
      sx={{ width: "50%", innerHeight: "10%" }}
      helperText={error && helperText}
      {...rest}
    />
  );
};

export default CustomTextField;
