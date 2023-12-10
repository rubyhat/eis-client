import React from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import clsx from "clsx";

interface CustomButtonProps extends ButtonProps {
  // Здесь вы можете добавить свои собственные пропсы, если нужно
}

export const CustomButton: React.FC<CustomButtonProps> = (props) => {
  const { children, className, ...otherProps } = props;

  return (
    <Button
      sx={{
        background: "var(--button-gradient-primary)",
        textTransform: "none",
        color: "#fff",
      }}
      className={clsx(className)}
      {...otherProps}
    >
      {children}
    </Button>
  );
};
