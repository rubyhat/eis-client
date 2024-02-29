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
}

// Попытка добавить разряды для чисел стоимости, но есть проблема
// для редактирования значения нужен скрытый инпут, где будетз значение реакт хук формы
// но тогда в этих инпутах в интерфейсе не будут проставляться значения из урла на странице каталога (фильтры)
// так как значения проставляются в скрытый инпут, плюс на мобильный девайсах будет открываться клавиатура с текстом
// а лучше бы с числом
export const CustomInputTemp = (props: CustomInputProps) => {
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
  } = props;
  const theme = useTheme();
  const [formattedValue, setFormattedValue] = React.useState("");
  // Получаем пропсы от react-hook-form's register
  const { ref, onChange, onBlur, name } = register(id, { required });

  // Функция для форматирования числа с разрядами
  const formatNumber = (value: string) => {
    if (value === "0") return "";
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    // return Number(value.replace(/ /g, "")).toLocaleString("ru");
    // return new Intl.NumberFormat("ru-RU").format(Number(value));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (type === "number") {
      const unformattedValue = value.replace(/\D/g, "");
      setFormattedValue(formatNumber(unformattedValue));
    } else {
      setFormattedValue(e.target.value);
    }

    const newEvent = {
      target: {
        name: name,
        value: value.replace(/ /g, ""), // Используем неформатированное значение для react-hook-form
      },
    };

    console.log(newEvent);
    onChange(newEvent);
  };

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
        ref={ref}
        name={name}
        sx={{
          display: "none",
          zIndex: -1,
        }}
      />
      <Box
        component="input"
        min={min}
        type={type === "number" ? "text" : type}
        disabled={disabled}
        required={required}
        placeholder={placeholder}
        value={formattedValue}
        onChange={(e) => handleInputChange(e)}
        id={id}
        onBlur={onBlur}
        sx={{
          width: "100%",
          border: `1px solid`,
          borderColor: errors[id]
            ? theme.palette.customColors?.colorsRed
            : theme.palette.customColors?.labelsQuaternary,
          borderRadius: "5px",
          fontSize: "16px",
          padding: "8px",
          outlineColor: "customColors.colorsBlue",
          "&::placeholder": {
            fontSize: 16,
            color: theme.palette.customColors?.labelsTertiary,
          },
        }}
      />
    </Box>
  );
};
