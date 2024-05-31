import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import toast from "react-hot-toast";

import { Box, Button, MenuItem, Select, Typography } from "@mui/material";

import { FormInputLabel } from "../../FormInputLabel";
import { CustomInput } from "../../../../../../components/CustomInput";
import { useSellModuleStore } from "../../../store/useSellModuleStore";
import {
  selectInputProps,
  selectStyles,
} from "../../../../../../shared/styles/select";

interface PriceFieldProps {
  isLoading: boolean;
}
export const PriceField = ({ isLoading }: PriceFieldProps) => {
  const { step, setStep } = useSellModuleStore();
  const { formState, control, trigger, register } = useFormContext();

  const handleClickSubmitButton = async () => {
    const isValid = await trigger(["price", "exchange"]);
    if (isValid) {
      setStep(step + 1);
    } else {
      toast.error("Пожалуйста, заполните все поля, чтобы продолжить!");
      console.log("Форма невалидна:", formState.errors);
    }
  };

  return (
    <Box>
      <Typography component="h6" variant="titleSecondRegular" mb={1.5}>
        Стоимость
      </Typography>
      <Box mb={1.5}>
        <FormInputLabel label="Укажите сумму" required />
        <CustomInput
          required
          id="price"
          register={register}
          errors={formState.errors}
          disabled={isLoading}
          formatPrice={false}
          placeholder="Введите сумму"
          type="number"
        />
        {formState.errors.price && (
          <Typography variant="textFootnoteRegular" color="error">
            {formState.errors.price.message as string}
          </Typography>
        )}
      </Box>
      <Box marginBottom={1.5}>
        <FormInputLabel label="Обмен" required />
        <Controller
          name="exchange"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              displayEmpty
              sx={selectStyles}
              inputProps={{ sx: selectInputProps }}
            >
              <MenuItem value="" disabled>
                Укажите есть ли обмен
              </MenuItem>
              <MenuItem value="yes">Есть</MenuItem>
              <MenuItem value="no">Нет</MenuItem>
            </Select>
          )}
        />
        {formState.errors.exchange && (
          <Typography variant="textFootnoteRegular" color="error">
            {formState.errors.exchange.message as string}
          </Typography>
        )}
      </Box>
      <Box>
        <Button
          variant="contained"
          fullWidth
          size="large"
          disabled={isLoading}
          sx={{
            textTransform: "none",
            marginTop: "auto",
          }}
          onClick={handleClickSubmitButton}
        >
          Продолжить
        </Button>
      </Box>
    </Box>
  );
};
