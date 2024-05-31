import React from "react";
import { Link } from "react-router-dom";
import { useFormContext } from "react-hook-form";

import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";

import { CustomInput } from "../../../../../../components/CustomInput";
import { useAnalytics } from "../../../../../../hooks/useAnalytics";
import { useSellModuleStore } from "../../../store/useSellModuleStore";
import { FormInputLabel } from "../../FormInputLabel";

interface UserInfoFieldsProps {
  isLoading: boolean;
}

export const UserInfoFields = ({ isLoading }: UserInfoFieldsProps) => {
  const { register, formState, setValue, trigger } = useFormContext();
  const { trackEvent } = useAnalytics();
  const [isChecked, setIsChecked] = React.useState(true);
  const { step, setStep } = useSellModuleStore();

  const handleClickPolicyInfo = () => {
    trackEvent({
      category: "FeedbackForm",
      action: "Click on policy info",
    });
  };

  const handlePhoneInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    let { value } = event.target;
    if (!value.startsWith("+7")) {
      value = "+7" + value.replace(/[^\d]/g, ""); // Убедимся, что номер начинается с +7
    }
    const cleanValue = value.replace(/[^\d+]/g, ""); // Удаляем все, кроме цифр и знака +
    // Форматируем номер, убираем лишние символы, если они есть
    let formattedValue = cleanValue
      .replace(/(\+\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, "$1 $2 $3 $4 $5")
      .trim(); // Убираем лишние пробелы

    if (formattedValue.length > 16) {
      formattedValue = formattedValue.substring(0, 16);
    }

    setValue("ownerPhone", formattedValue, { shouldValidate: true });
  };

  const handleClickSubmitButton = async () => {
    const isValid = await trigger(["ownerName", "ownerPhone"]);
    if (isValid) {
      setStep(step + 1);
    } else {
      console.log("Форма невалидна:", formState.errors);
    }
  };

  return (
    <Box>
      <Typography component="h6" variant="titleSecondRegular" mb={1.5}>
        Давайте познакомимся!
      </Typography>
      <Box mb={1.5}>
        <FormInputLabel label="Ваше имя" required />
        <CustomInput
          required
          id="ownerName"
          register={register}
          errors={formState.errors}
          disabled={isLoading}
          formatPrice={false}
          placeholder="Введите Ваше Имя"
        />
        {formState.errors.ownerName && (
          <Typography variant="textFootnoteRegular" color="error">
            {formState.errors.ownerName.message as string}
          </Typography>
        )}
      </Box>
      <Box>
        <FormInputLabel label="Ваш телефон" required />
        <CustomInput
          required
          id="ownerPhone"
          type="tel"
          onInput={handlePhoneInput}
          register={register}
          errors={formState.errors}
          disabled={isLoading}
          formatPrice={false}
          placeholder="Введите Ваш номер телефона"
        />
        {formState.errors.ownerPhone && (
          <Typography variant="textFootnoteRegular" color="error">
            {formState.errors.ownerPhone.message as string}
          </Typography>
        )}
      </Box>
      <Box mb={1.5}>
        <FormControlLabel
          sx={{ marginRight: 0 }}
          control={
            <Checkbox
              defaultChecked
              value={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
            />
          }
          label={
            <Typography component="p" variant="textCalloutRegular">
              Я согласен с{" "}
              <Box
                sx={{
                  color: "customColors.colorsOrange",
                  textDecoration: "underline",
                }}
                component={Link}
                target="_blank"
                to="/docs/policy" // todo: может вместо открытия новой страницы, показаывать модалку с условиями, чтобы пользователя не уводить с целевой страницы?
                onClick={handleClickPolicyInfo}
              >
                политикой обработки данных
              </Box>
            </Typography>
          }
        />
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Button
          variant="contained"
          fullWidth
          size="large"
          disabled={!isChecked || isLoading}
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
