import React from "react";
import {
  Alert,
  Box,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useAnalytics } from "../../../../../../hooks/useAnalytics";

interface FinalFieldProps {
  isChecked: boolean;
  setIsChecked: (v: boolean) => void;
}

export const FinalField = ({ isChecked, setIsChecked }: FinalFieldProps) => {
  const { trackEvent } = useAnalytics();
  const handleClickPolicyInfo = () => {
    trackEvent({
      category: "FeedbackForm",
      action: "Click on policy info",
    });
  };

  return (
    <Box>
      <Typography component="h6" variant="titleSecondRegular" mb={1.5}>
        Почти готово!
      </Typography>
      <Typography component="p" variant="textBodyRegular">
        Подача заявки происходит в несколько этапов:
      </Typography>
      <Box component="ol" sx={{ padding: 0 }}>
        <Box component="li" sx={{ display: "flex", gap: 1, marginBottom: 1.5 }}>
          <Typography
            component="p"
            variant="textBodyEmphasized"
            sx={{
              color: "customColors.colorsOrange",
            }}
          >
            1
          </Typography>
          <Typography component="p" variant="textBodyRegular" lineHeight={1.35}>
            После отправки данной заявки наши сотрудники ознакомятся с
            информацией о Вашем объекте
          </Typography>
        </Box>
        <Box component="li" sx={{ display: "flex", gap: 1, marginBottom: 1.5 }}>
          <Typography
            component="p"
            variant="textBodyEmphasized"
            sx={{
              color: "customColors.colorsOrange",
            }}
          >
            2
          </Typography>
          <Typography component="p" variant="textBodyRegular" lineHeight={1.35}>
            Менеджер связывается по указанному Вами раннее номеру телефона в
            WhatsApp'e
          </Typography>
        </Box>
        <Box component="li" sx={{ display: "flex", gap: 1, marginBottom: 1.5 }}>
          <Typography
            component="p"
            variant="textBodyEmphasized"
            sx={{
              color: "customColors.colorsOrange",
            }}
          >
            3
          </Typography>
          <Typography component="p" variant="textBodyRegular" lineHeight={1.35}>
            Обговариваем детали сотрудничества и заключаем договор, назначаем
            дату выезда специалиста на ваш объект
          </Typography>
        </Box>
        <Box component="li" sx={{ display: "flex", gap: 1 }}>
          <Typography
            component="p"
            variant="textBodyEmphasized"
            sx={{
              color: "customColors.colorsOrange",
            }}
          >
            4
          </Typography>
          <Typography component="p" variant="textBodyRegular" lineHeight={1.35}>
            Проводим фото и видео съемку, монтируем и озвучиваем видеообзор,
            публикуем в наших социальных сетях и запускаем рекламу
          </Typography>
        </Box>
      </Box>
      <Alert severity="info">
        Обработка заявок происходит в порядке очереди согласно нашему рабочему
        графику, в среднем не более одного дня
      </Alert>
      <Box mt={1.5} mb={2}>
        <FormControlLabel
          sx={{ marginRight: 0 }}
          control={
            <Checkbox
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
    </Box>
  );
};
