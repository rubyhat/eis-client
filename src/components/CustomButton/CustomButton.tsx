import clsx from "clsx";
import React from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import { useTheme } from "@mui/material";

interface CustomButtonProps extends ButtonProps {
  // Здесь вы можете добавить свои собственные пропсы, если нужно
  isCancelVariant?: boolean;
}

export const CustomButton: React.FC<CustomButtonProps> = (props) => {
  const { isCancelVariant, children, className, sx, ...otherProps } = props;
  const theme = useTheme();

  return (
    <Button
      sx={{
        background: isCancelVariant
          ? theme.palette.customColors?.colorsWhite
          : theme.palette.customColors?.gradientPrimary,
        textTransform: "none",
        color: isCancelVariant ? "customColors.colorsRedDark" : "#fff",
        "&:hover": isCancelVariant
          ? {
              background: theme.palette.customColors?.colorsWhite,
            }
          : {},
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
