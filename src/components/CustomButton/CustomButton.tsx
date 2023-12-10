import clsx from "clsx";
import React from "react";
import Button, { ButtonProps } from "@mui/material/Button";

interface CustomButtonProps extends ButtonProps {
  // Здесь вы можете добавить свои собственные пропсы, если нужно
}

export const CustomButton: React.FC<CustomButtonProps> = (props) => {
  const { children, className, sx, ...otherProps } = props;

  return (
    <Button
      sx={{
        background: "var(--button-gradient-primary)",
        textTransform: "none",
        color: "#fff",
        ...sx,
      }}
      className={clsx(className)}
      {...otherProps}
      variant="contained"
    >
      {children}
    </Button>
  );
};
