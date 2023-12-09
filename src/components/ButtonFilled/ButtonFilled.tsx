import React from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import clsx from "clsx";

import styles from "./styles.module.scss";

interface CustomButtonProps extends ButtonProps {
  // Здесь вы можете добавить свои собственные пропсы, если нужно
}

export const CustomButton: React.FC<CustomButtonProps> = (props) => {
  const { children, className, ...otherProps } = props;

  return (
    <Button className={clsx(styles.root, className)} {...otherProps}>
      {children}
    </Button>
  );
};
