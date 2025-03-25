import React from "react";
import {
  Alert,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useFormContext } from "react-hook-form";

import { useAnalytics } from "../../../../../../hooks/useAnalytics";
import { containerWrapperStyles } from "../assets";

interface FinalFieldProps {
  isLoading: boolean;
}

export const FinalField = ({ isLoading }: FinalFieldProps) => {
  const [isPolicyChecked, setIsPolicyChecked] = React.useState(false);

  const { trackEvent } = useAnalytics();
  const { getValues } = useFormContext();

  const category = getValues().category;
  const type = getValues().type;
  const city = getValues().city;
  let agreementLink =
    city === "Караганда"
      ? "/static/docs/Продажа_недвижимости.pdf"
      : "/static/docs/Продажа_недвижимости_районы.pdf";

  if (["business", "factory"].includes(category)) {
    agreementLink = "/static/docs/Продажа_коммерческой_недвижимости.pdf";
  }

  if (type === "rent") {
    agreementLink = "/static/docs/Сдача_недвижимости_в_аренду.pdf";
  }

  const handleClickAgreementInfo = () => {
    trackEvent({
      category: "Order/Sekk",
      action: "Открыли условия сотрудничества",
    });
  };

  return (
    <Box sx={containerWrapperStyles}>
      <Box flexGrow={1}>
        <Typography component="h6" variant="titleSecondRegular" mb={1.5}>
          Почти готово!
        </Typography>
        <Typography component="p" variant="textBodyRegular">
          Подача заявки происходит в несколько этапов:
        </Typography>
        <Box component="ol" sx={{ padding: 0 }}>
          <Box
            component="li"
            sx={{ display: "flex", gap: 1, marginBottom: 1.5 }}
          >
            <Typography
              component="p"
              variant="textBodyEmphasized"
              sx={{ color: "customColors.colorsOrange" }}
            >
              1.
            </Typography>
            <Typography
              component="p"
              variant="textBodyRegular"
              lineHeight={1.35}
            >
              После отправки данной заявки мы ознакомимся с Вашей недвижимостью.
            </Typography>
          </Box>
          <Box
            component="li"
            sx={{ display: "flex", gap: 1, marginBottom: 1.5 }}
          >
            <Typography
              component="p"
              variant="textBodyEmphasized"
              sx={{ color: "customColors.colorsOrange" }}
            >
              2.
            </Typography>
            <Typography
              component="p"
              variant="textBodyRegular"
              lineHeight={1.35}
            >
              Наш менеджер свяжется с Вами по указанному ранее номеру телефона.
            </Typography>
          </Box>
          <Box
            component="li"
            sx={{ display: "flex", gap: 1, marginBottom: 1.5 }}
          >
            <Typography
              component="p"
              variant="textBodyEmphasized"
              sx={{ color: "customColors.colorsOrange" }}
            >
              3.
            </Typography>
            <Typography
              component="p"
              variant="textBodyRegular"
              lineHeight={1.35}
            >
              Мы обговорим детали встречи и договоримся о дате съемок вашей
              недвижимости.
            </Typography>
          </Box>
          <Box component="li" sx={{ display: "flex", gap: 1 }}>
            <Typography
              component="p"
              variant="textBodyEmphasized"
              sx={{ color: "customColors.colorsOrange" }}
            >
              4.
            </Typography>
            <Typography
              component="p"
              variant="textBodyRegular"
              lineHeight={1.35}
            >
              Договор о сотрудничестве вы будете подписывать на самой встрече с
              нашими специалистами.
            </Typography>
          </Box>
          <Box component="li" sx={{ display: "flex", gap: 1 }}>
            <Typography
              component="p"
              variant="textBodyEmphasized"
              sx={{ color: "customColors.colorsOrange" }}
            >
              5.
            </Typography>
            <Typography
              component="p"
              variant="textBodyRegular"
              lineHeight={1.35}
            >
              После встречи мы делаем видеообзор, обрабатываем фотографии,
              выставляем видео в наших социальных сетях, загружаем объявление на
              сайты Roze.kz, Krisha.kz и запускаем платную рекламу.
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
                value={isPolicyChecked}
                onChange={(e) => setIsPolicyChecked(e.target.checked)}
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
                  to={agreementLink} // todo: может вместо открытия новой страницы, показаывать модалку с условиями, чтобы пользователя не уводить с целевой страницы?
                  onClick={handleClickAgreementInfo}
                >
                  условиями сотрудничества
                </Box>
              </Typography>
            }
          />
        </Box>
      </Box>
      <Box>
        <Button
          type="submit"
          variant="contained"
          fullWidth
          size="large"
          disabled={isLoading || !isPolicyChecked}
          sx={{
            textTransform: "none",
            width: { xs: 1, md: 568 },
          }}
        >
          {isLoading ? "Загрузка..." : "Отправить заявку"}
        </Button>
      </Box>
    </Box>
  );
};
