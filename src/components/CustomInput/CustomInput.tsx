import { SxProps, Typography, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { TbCurrencyTenge } from "react-icons/tb";

interface CustomInputProps {
  id: string;
  errors: FieldErrors;
  label?: string;
  register: UseFormRegister<FieldValues>;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  placeholder?: string;
  sx?: SxProps;
  min?: string;
  max?: string;
  onInput?: React.ChangeEventHandler<HTMLInputElement>;
  maxLength?: number;
  minLength?: number;
}

export const CustomInput = (props: CustomInputProps) => {
  const {
    id,
    label,
    errors,
    register,
    type = "text",
    disabled,
    formatPrice,
    required,
    placeholder,
    sx,
    min,
    max,
    onInput,
    maxLength,
    minLength,
  } = props;
  const theme = useTheme();

  return (
    <Box sx={sx}>
      {formatPrice && <TbCurrencyTenge />}
      {label && (
        <Typography
          component="p"
          variant="textCalloutRegular"
          sx={
            errors[id] ? { color: theme.palette.customColors?.colorsRed } : {}
          }
        >
          {label}
        </Typography>
      )}
      <Box
        component="input"
        id={id}
        min={min}
        max={max}
        type={type}
        disabled={disabled}
        required={required}
        placeholder={placeholder}
        {...register(id, { required })}
        sx={{
          width: "100%",
          border: `1px solid`,
          borderColor: errors[id]
            ? theme.palette.customColors?.colorsRed
            : theme.palette.customColors?.labelsQuaternary,
          borderRadius: "5px",
          fontSize: "16px",
          padding: "8px",
          outlineColor: "customColors.colorsOrange",
          "&::placeholder": {
            fontSize: 16,
            color: theme.palette.customColors?.labelsTertiary,
          },
        }}
        onInput={onInput}
        maxLength={maxLength}
        minLength={minLength}
      />
    </Box>
  );
};
