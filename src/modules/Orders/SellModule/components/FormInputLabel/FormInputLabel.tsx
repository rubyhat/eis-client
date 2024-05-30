import { Typography } from "@mui/material";
import React from "react";

interface FormInputLabelProps {
  label: string;
  required?: boolean;
}

export const FormInputLabel = ({ label, required }: FormInputLabelProps) => {
  return (
    <>
      <Typography
        component="p"
        color="customColors.labelsSecondary"
        variant="textCalloutRegular"
        marginBottom={0.5}
      >
        {label}
        {required && (
          <Typography
            component="span"
            color="customColors.colorsRed"
            variant="textCalloutRegular"
            marginLeft={0.5}
          >
            *
          </Typography>
        )}
      </Typography>
    </>
  );
};
