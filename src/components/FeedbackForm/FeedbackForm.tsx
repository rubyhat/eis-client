import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";
import React from "react";
import { CustomInput } from "../CustomInput";
import { CustomButton } from "../CustomButton";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export const FeedbackForm = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      phone: "",
    },
  });

  const handleFormSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    setIsLoading(false);
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
      </Box>
      <Box
        component="form"
        onSubmit={handleSubmit(handleFormSubmit)}
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
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
            id="name"
            register={register}
            errors={errors}
            disabled={isLoading}
            placeholder="Введите телефон"
          />
        </Box>
        <CustomButton
          size="small"
          sx={{ height: "36px", alignSelf: "flex-end" }}
        >
          Отправить
        </CustomButton>
      </Box>
      <Box>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label={
            <Box>
              Я согласен с{" "}
              <Box
                sx={{
                  color: "customColors.colorsBlue",
                  textDecoration: "underline",
                }}
                component={Link}
                to="/"
              >
                политикой обработки данных
              </Box>
            </Box>
          }
        />
        <Typography
          component="p"
          variant="textBodyRegular"
          sx={{ marginBottom: 1.5 }}
        >
          или позвоните/напишите нам
        </Typography>
        <Box>
          <CustomButton size="small" sx={{ marginRight: 1 }}>
            Позвонить
          </CustomButton>
          <CustomButton size="small" isGreenButton>
            Написать в WhatsApp
          </CustomButton>
        </Box>
      </Box>
    </Box>
  );
};
