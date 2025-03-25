import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Menu, MenuItem, Typography } from "@mui/material";

import { SellFormDrawer } from "../SellFormDrawer";
import { useSellModuleStore } from "../../store/useSellModuleStore";
import { useAnalytics } from "../../../../../hooks/useAnalytics";
import { linkStyles } from "./styles";
import { agreementLinks } from "../../constants/SellModuleConstants";

export const Greeting = () => {
  const { trackEvent } = useAnalytics();
  const { setIsDrawerOpen } = useSellModuleStore();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickPolicyInfo = (label: string) => {
    trackEvent({
      category: "Order/Sell",
      action: "Открыли условия сотрудничества - " + label,
    });
    handleClose();
  };

  const handleStartButtonClick = () => {
    setIsDrawerOpen(true);
    trackEvent({
      category: "Order/Sell",
      action: "Открыли форму заявки на продажу",
    });
  };

  return (
    <Box>
      <Typography component="h1" variant="titleFirstRegular">
        Подача заявки
      </Typography>
      <Typography component="p" variant="textBodyRegular" my={1}>
        Для того, чтобы начать сотрудничество, необходимо заполнить заявку с
        описанием Вашей недвижимости, а также принять{" "}
        <Typography
          id="agreementInfo"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          component="span"
          variant="textBodyEmphasized"
          color="primary"
          sx={{ textDecoration: "underline", cursor: "pointer" }}
          onClick={handleClick}
        >
          условия сотрудничества
        </Typography>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "agreementInfo",
          }}
        >
          {agreementLinks.map(({ link, label }, index) => (
            <MenuItem
              onClick={() => handleClickPolicyInfo(label)}
              sx={{ p: 0 }}
              key={index}
            >
              <Box component={Link} sx={linkStyles} to={link} target="_blank">
                {label}
              </Box>
            </MenuItem>
          ))}
        </Menu>
      </Typography>
      <Typography component="p" variant="titleSecondRegular" mb={1} mt={2}>
        Основные пункты сотрудничества:
      </Typography>
      <Box component="ul">
        <Box component="li" mb={2}>
          <Typography component="p" variant="textBodyRegular">
            <Typography
              component="span"
              variant="textBodyEmphasized"
              color="customColors.colorsOrange"
              mr={0.5}
            >
              1.
            </Typography>
            Наша услуга оплачивается только после продажи вашей недвижимости и
            полного расчёта между продавцом и покупателем.
            <br />
            <br />
            Комиссия составляет{" "}
            <Typography
              component="span"
              variant="textBodyEmphasized"
              color="primary"
            >
              1.3%
            </Typography>{" "}
            от итоговой стоимости, но не менее 400 000 тенге,{" "}
            <Typography
              component="span"
              variant="textBodyEmphasized"
              color="primary"
            >
              мы не берем предоплату.
            </Typography>
          </Typography>
        </Box>
        <Box component="li" mb={2}>
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
              Вы не можете самостоятельно выставлять объявления или работать с
              другими специалистами
            </Typography>
          </Typography>
        </Box>
        <Box component="li" mb={2}>
          <Typography component="p" variant="textBodyRegular">
            <Typography
              component="span"
              variant="textBodyEmphasized"
              color="customColors.colorsOrange"
              mr={0.5}
            >
              3.
            </Typography>
            Выезд нашего специалиста на фото и видеосъемку платный -{" "}
            <Typography
              component="span"
              variant="textBodyEmphasized"
              color="primary"
            >
              10.000 тенге
            </Typography>
          </Typography>
        </Box>
        <Box component="li" mb={2}>
          <Typography component="p" variant="textBodyRegular">
            <Typography
              component="span"
              variant="textBodyEmphasized"
              color="customColors.colorsOrange"
              mr={0.5}
            >
              4.
            </Typography>
            Раз в месяц мы запрашиваем у клиентов деньги на рекламу вашего
            объявления на сайте Крыша.kz -{" "}
            <Typography
              component="span"
              variant="textBodyEmphasized"
              color="primary"
            >
              10.000 тенге
            </Typography>
            <br />
            <br />
            Размещение объявлений на сайтах и в социальных сетях, видеосъемка и
            создание видеообзора - входит в стоимость наших услуг.
            <br />
            <br />
            Если мы не продали недвижимость, фото и видеообзоры{" "}
            <Typography
              component="span"
              variant="textBodyEmphasized"
              color="primary"
            >
              остаются у вас бесплатно
            </Typography>
          </Typography>
        </Box>
        {/* <Box component="li" mb={1}>
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
        </Box> */}
      </Box>
      <Button
        fullWidth
        size="large"
        onClick={handleStartButtonClick}
        sx={{ mt: 2, textTransform: "none" }}
        variant="contained"
      >
        Приступить
      </Button>
      <SellFormDrawer />
    </Box>
  );
};
