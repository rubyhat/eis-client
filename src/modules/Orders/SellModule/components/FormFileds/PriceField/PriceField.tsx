import { Controller, useFormContext } from "react-hook-form";
import toast from "react-hot-toast";

import { Box, MenuItem, Select, Typography } from "@mui/material";

import { FormInputLabel } from "../../FormInputLabel";
import { CustomInput } from "../../../../../../components/CustomInput";
import { useSellModuleStore } from "../../../store/useSellModuleStore";
import {
  selectInputProps,
  selectStyles,
} from "../../../../../../shared/styles/select";
import { SubmitButton } from "../SubmitButton";
import { containerWrapperStyles } from "../assets";

interface PriceFieldProps {
  isLoading: boolean;
}
export const PriceField = ({ isLoading }: PriceFieldProps) => {
  const { step, setStep } = useSellModuleStore();
  const { formState, control, trigger, register, getValues } = useFormContext();

  const handleClickSubmitButton = async () => {
    const triggerList = ["price"];
    if (getValues().type !== "rent") triggerList.push("exchange");

    const isValid = await trigger(triggerList);
    if (isValid) {
      setStep(step + 1);
    } else {
      toast.error("Пожалуйста, заполните все поля, чтобы продолжить!");
      console.log("Форма невалидна:", formState.errors);
    }
  };

  return (
    <Box sx={containerWrapperStyles}>
      <Box flexGrow={1}>
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
        {getValues().type !== "rent" && (
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
        )}
      </Box>
      <Box>
        <SubmitButton
          isLoading={isLoading}
          handleClickSubmitButton={handleClickSubmitButton}
        />
      </Box>
    </Box>
  );
};
