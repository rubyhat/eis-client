import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { TbCurrencyTenge } from "react-icons/tb";

// interface CustomInputProps extends TextFieldProps {}

interface CustomInputProps {
  id: string;
  errors: FieldErrors;
  label?: string;
  register: UseFormRegister<FieldValues>;
  type?: string;
  disabled?: boolean;
  formatPrice: boolean;
  required?: boolean;
  placeholder?: string;
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
  } = props;

  return (
    <Box>
      {formatPrice && <TbCurrencyTenge />}
      {label && (
        <Typography sx={errors[id] ? { color: "var(--colors-red)" } : {}}>
          {label}
        </Typography>
      )}
      <Box
        component="input"
        id={id}
        type={type}
        disabled={disabled}
        required={required}
        {...register(id, { required })}
        placeholder={placeholder}
        sx={{
          width: "100%",
          border: `1px solid`,
          borderColor: errors[id]
            ? "var(--colors-red)"
            : "var(--labels-tertiary)",
          borderRadius: "5px",
          fontSize: "16px",
          padding: "8px",
          // outline: "none",
          // transition: "all 333ms ease",
          // "&:focus": {
          //   borderColor: "var(--colors-blue)",
          // },
          "&::placeholder": {
            color: "var(--labels-secondary)",
          },
        }}
      />
    </Box>
  );
};

// export const CustomInput = (props: TextFieldProps) => {
//   const { ...otherProps } = props;
//   return (
//     <TextField
//       {...otherProps}
//       sx={{
//         "& fieldset": {
//           borderColor: "var(--labels-tertiary)",
//           borderRadius: "5px",
//         },
//       }}
//       inputProps={{
//         sx: {
//           backgroundColor: "white",
//           fontSize: 16,
//           padding: 1,
//         },
//       }}
//     />
//   );
// };
