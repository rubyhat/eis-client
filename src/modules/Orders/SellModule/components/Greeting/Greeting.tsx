import React from "react";
import { Link } from "react-router-dom";

import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";

import { SellFormDrawer } from "../SellFormDrawer";
import { useSellModuleStore } from "../../store/useSellModuleStore";
import { useAnalytics } from "../../../../../hooks/useAnalytics";

export const Greeting = () => {
  const { trackEvent } = useAnalytics();
  const { setIsDrawerOpen } = useSellModuleStore();
  const [isPolicyChecked, setIsPolicyChecked] = React.useState(true);
  const [isDealChecked, setIsDealChecked] = React.useState(true);

  const handleDealInfoClick = () => {};

  const handleClickPolicyInfo = () =>
    trackEvent({
      category: "FeedbackForm",
      action: "Click on policy info",
    });

  return (
    <Box>
      <Typography component="h1" variant="titleFirstRegular">
        Подача заявки
      </Typography>
      <Typography component="p" variant="textBodyRegular" my={1}>
        Для того, чтобы начать сотрудничество, необходимо заполнить заявку с
        описанием Вашей недвижимости, а также принять{" "}
        <Typography
          component="span"
          variant="textBodyEmphasized"
          color="primary"
          sx={{ textDecoration: "underline", cursor: "pointer" }}
          onClick={handleDealInfoClick}
        >
          условия сотрудничества
        </Typography>
      </Typography>
      <Typography component="p" variant="titleSecondRegular" mb={1} mt={2}>
        Основные пункты сотрудничества:
      </Typography>
      <Box component="ul">
        <Box component="li" mb={1}>
          <Typography component="p" variant="textBodyRegular">
            <Typography
              component="span"
              variant="textBodyEmphasized"
              color="customColors.colorsOrange"
              mr={0.5}
            >
              1.
            </Typography>
            Оплата за нашу работу производится после полного завершения сделки,{" "}
            <Typography
              component="span"
              variant="textBodyEmphasized"
              color="primary"
            >
              мы не берем предоплату
            </Typography>
          </Typography>
        </Box>
        <Box component="li" mb={1}>
          <Typography component="p" variant="textBodyRegular">
            <Typography
              component="span"
              variant="textBodyEmphasized"
              color="customColors.colorsOrange"
              mr={0.5}
            >
              2.
            </Typography>
            Мы работаем{" "}
            <Typography
              component="span"
              variant="textBodyEmphasized"
              color="primary"
            >
              только эксклюзивно
            </Typography>
            , во время нашего сотрудничества{" "}
            <Typography
              component="span"
              variant="textBodyEmphasized"
              color="primary"
            >
              Вы не можете работать с другими агентами и продавать
              самостоятельно
            </Typography>
          </Typography>
        </Box>
        <Box component="li" mb={1}>
          <Typography component="p" variant="textBodyRegular">
            <Typography
              component="span"
              variant="textBodyEmphasized"
              color="customColors.colorsOrange"
              mr={0.5}
            >
              3.
            </Typography>
            Первый выезд нашего агента на Ваш объект недвижимости{" "}
            <Typography
              component="span"
              variant="textBodyEmphasized"
              color="primary"
            >
              платный - от 15.000тг
            </Typography>
            , а стоимость полной нашей услуги -{" "}
            <Typography
              component="span"
              variant="textBodyEmphasized"
              color="primary"
            >
              от 1.3%
            </Typography>
          </Typography>
        </Box>
        <Box component="li" mb={1}>
          <Typography component="p" variant="textBodyRegular">
            <Typography
              component="span"
              variant="textBodyEmphasized"
              color="customColors.colorsOrange"
              mr={0.5}
            >
              4.
            </Typography>
            Раз в месяц необходимо пополнять рекламный бюджет, для размещения на
            Крыша.kz -{" "}
            <Typography
              component="span"
              variant="textBodyEmphasized"
              color="primary"
            >
              от 6.000тг
            </Typography>
            , размещение на сайте Roze.kz, создание видеообзора, размещение в
            социальных сетях -{" "}
            <Typography
              component="span"
              variant="textBodyEmphasized"
              color="primary"
            >
              входит в стоимость наших услуг, дополнительных оплат нет
            </Typography>
          </Typography>
        </Box>
        <Box component="li" mb={1}>
          <FormControlLabel
            sx={{ marginRight: 0 }}
            control={
              <Checkbox
                defaultChecked
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
                  to="/docs/policy" // todo: может вместо открытия новой страницы, показаывать модалку с условиями, чтобы пользователя не уводить с целевой страницы?
                  onClick={handleClickPolicyInfo}
                >
                  политикой обработки данных
                </Box>
              </Typography>
            }
          />
          <FormControlLabel
            sx={{ marginRight: 0 }}
            control={
              <Checkbox
                defaultChecked
                value={isDealChecked}
                onChange={(e) => setIsDealChecked(e.target.checked)}
              />
            }
            label={
              <Typography component="p" variant="textCalloutRegular">
                Нажимая кнопку Приступить, Вы соглашаетесь с{" "}
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
                  условиями сотрудничества
                </Box>{" "}
                и обязуетесь ответственно относиться к сотрудничеству
              </Typography>
            }
          />
        </Box>
      </Box>
      <Button
        fullWidth
        size="large"
        onClick={() => setIsDrawerOpen(true)}
        sx={{ mt: 2, textTransform: "none" }}
        disabled={!isDealChecked || !isPolicyChecked}
        variant="contained"
      >
        Приступить
      </Button>
      <SellFormDrawer />
    </Box>
  );
};
