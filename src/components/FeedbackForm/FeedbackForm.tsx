import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";
import React from "react";
import { CustomInput } from "../CustomInput";
import { CustomButton } from "../CustomButton";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { EstateAgentInfo } from "../../modules/CatalogModule/store";

interface FeedbackFormProps {
  estateAgent: EstateAgentInfo;
}
// todo: add request for feedback form
export const FeedbackForm = ({ estateAgent }: FeedbackFormProps) => {
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
            sx={{ "& input": { height: 42.25 } }}
          />
        </Box>
        <CustomButton size="medium" sx={{ alignSelf: "flex-end" }}>
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
                  color: "customColors.colorsBlue",
                  textDecoration: "underline",
                }}
                component={Link}
                to="/"
              >
                политикой обработки данных
              </Box>
            </Typography>
          }
        />
        <Box
          sx={{
            width: 1,
            height: "1px",
            backgroundColor: "customColors.labelsQuaternary",
            margin: "16px 0",
          }}
        />
        <Typography
          component="p"
          variant="textBodyRegular"
          sx={{ marginBottom: 1.5 }}
        >
          или позвоните/напишите нам
        </Typography>
        <Box
          sx={{
            display: {
              xs: "grid",
              gap: 8,
            },
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
            },
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
              Написать в WhatsApp
            </CustomButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
