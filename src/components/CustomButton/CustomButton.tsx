import clsx from "clsx";
import React from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import { useTheme } from "@mui/material";

interface CustomButtonProps extends ButtonProps {
  // Здесь вы можете добавить свои собственные пропсы, если нужно
}

export const CustomButton: React.FC<CustomButtonProps> = (props) => {
  const { children, className, sx, ...otherProps } = props;
  const theme = useTheme();

  return (
    <Button
      sx={{
        background: theme.palette.customColors?.gradientPrimary,
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
