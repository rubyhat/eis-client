import React from "react";
import { Link } from "react-router-dom";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import {
  Alert,
  Box,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";

import { CustomInput } from "../../../../components/CustomInput";
import { CustomButton } from "../../../../components/CustomButton";
import { useScreenSize } from "../../../../hooks/useScreenSize";
import { EstateAgentInfo } from "../../../CatalogModule/store";
import { apiFeedbackModule } from "../../api/apiFeedbackModule";

interface FeedbackFormProps {
  estateId?: string;
  estateAgent?: EstateAgentInfo;
}

export const FeedbackForm = ({ estateAgent, estateId }: FeedbackFormProps) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState<boolean | null>(null);
  const { isMobile } = useScreenSize();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      phone: "",
    },
  });

  React.useEffect(() => {
    setTimeout(() => setIsSuccess(null), 10000);
  }, [isSuccess]);

  const handleFormSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);

    try {
      await apiFeedbackModule.create({
        name: data.name,
        phone: data.phone.split(" ").join(""),
        estateId,
      });
      setIsSuccess(true);
    } catch (error) {
      console.log("feedback error", error);
      setIsSuccess(false);
    } finally {
      reset();
      setIsLoading(false);
    }
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

    setValue("phone", formattedValue, { shouldValidate: true });
  };

  return (
    <Box>
      <Box>
        <Typography component="h6" variant="titleThirdRegular">
          Форма обратной связи
        </Typography>
        <Typography
          component="p"
          variant="textSubheadlineRegular"
          color="customColors.labelsSecondary"
        >
          Оставьте контактные данные и мы свяжемся с Вами в ближайшее время
        </Typography>
        {isSuccess !== null && (
          <Alert
            severity={isSuccess ? "success" : "error"}
            sx={{ marginTop: 1 }}
          >
            {isSuccess
              ? `Спасибо, заявка успешно отправлена! ${
                  estateAgent?.name || "Агент по недвижимости"
                } свяжется с Вами в ближайшее время!`
              : "К сожалению, что-то пошло не так, заявка не была отправлена. Пожалуйста, позвоните или напишите на WhatsApp!"}
          </Alert>
        )}
      </Box>
      <Box
        component="form"
        onSubmit={handleSubmit(handleFormSubmit)}
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(3, 1fr)",
          },
          gap: 1.5,
          padding: "12px 0",
        }}
      >
        <Box>
          <Typography
            component="p"
            variant="textSubheadlineRegular"
            color="customColors.labelsSecondary"
            marginBottom={0.5}
          >
            Ваше имя
          </Typography>
          <CustomInput
            id="name"
            register={register}
            errors={errors}
            disabled={isLoading}
            placeholder="Введите имя"
            sx={{ "& input": { height: 42.25 } }}
            required
          />
        </Box>
        <Box>
          <Typography
            component="p"
            variant="textSubheadlineRegular"
            color="customColors.labelsSecondary"
            marginBottom={0.5}
          >
            Ваш телефон
          </Typography>
          <CustomInput
            id="phone"
            type="tel"
            register={register}
            onInput={handlePhoneInput}
            errors={errors}
            disabled={isLoading}
            placeholder="Введите телефон"
            sx={{ "& input": { height: 42.25 } }}
            required
          />
        </Box>
        <CustomButton
          type="submit"
          size="medium"
          sx={{ alignSelf: "flex-end" }}
        >
          Отправить
        </CustomButton>
      </Box>
      <Box>
        <FormControlLabel
          sx={{ marginRight: 0 }}
          control={<Checkbox defaultChecked />}
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
              >
                политикой обработки данных
              </Box>
            </Typography>
          }
        />
        {estateAgent && (
          <>
            <Box
              sx={{
                width: 1,
                height: "1px",
                backgroundColor: "customColors.labelsQuaternary",
                margin: "16px 0",
                display: {
                  xs: "none",
                  md: "inherit",
                },
              }}
            />
            <Typography
              component="p"
              variant="textBodyRegular"
              sx={{
                marginBottom: 1.5,
                display: {
                  xs: "none",
                  md: "inherit",
                },
              }}
            >
              или позвоните/напишите нам
            </Typography>
            <Box
              sx={{
                width: 1,
                gap: 1,
                display: "grid",
                position: {
                  xs: "fixed",
                  md: "inherit",
                },
                bottom: 0,
                left: 0,
                padding: { xs: 2, md: 0 },
                zIndex: 2,
                gridTemplateColumns: "1fr 1fr",
              }}
            >
              <Box component="a" href={`tel:${estateAgent.phone}`}>
                <CustomButton size="medium" fullWidth>
                  Позвонить
                </CustomButton>
              </Box>
              <Box
                component="a"
                href={`https://api.whatsapp.com/send?phone=${estateAgent.phone.slice(
                  1,
                )}&text=Здравствуйте, меня интересует недвижимость на Вашем сайте.`}
                target="_blank"
                rel="noreferrer"
              >
                <CustomButton fullWidth size="medium" isGreenButton>
                  {isMobile ? "Написать" : "Написать в WhatsApp"}
                </CustomButton>
              </Box>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};
