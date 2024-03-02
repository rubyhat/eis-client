import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Checkbox,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { CustomHr } from "../../components/CustomHr";

const iQuarter = [
  {
    title: "Проектирование и планирование платформы",
    checked: true,
  },
  {
    title: "Разработка и тестирование платформы",
    checked: true,
  },
  {
    title: "Запуск Beta версии платформы Roze Agency",
    checked: true,
  },
];

const iiQuarter = [
  {
    title: "Форма для подачи заявки на продажу и аренду недвижимости",
    checked: false,
  },
  {
    title: "Форма для подачи заявки на поиск и подбор недвижимости",
    checked: false,
  },
  {
    title: "Публичные отчеты о проданных объектах недвижимости в Roze Agency",
    checked: false,
  },
];

const iiiQuarter = [
  {
    title: "Раздел для новостроек",
    checked: false,
  },
  {
    title: "Калькулятор ипотечных программ",
    checked: false,
  },
  {
    title: "Расширенные фильтры для удобного поиска в Каталоге",
    checked: false,
  },
];

const ivQuarter = [
  {
    title: "Усовершенствование раздела с коммерческой недвижимостью",
    checked: false,
  },
  {
    title: "Интерактивная карта для удобного поиска недвижимости",
    checked: false,
  },
];

export const RoadmapModule = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            <Typography
              component="h1"
              variant="titleFirstRegular"
              marginRight={1}
            >
              План разработки платформы
            </Typography>
            <Typography
              component={Link}
              to="/"
              variant="titleFirstRegular"
              color="customColors.labelsPrimary"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                width: 1,
                justifyContent: "center",
                marginTop: { xs: 1, sm: 0 },
              }}
            >
              Roze
              <Typography
                variant="titleFirstRegular"
                color="customColors.colorsBlue"
                marginLeft={0.5}
              >
                Agency
              </Typography>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box paddingTop={2}>
            <Typography component="h6" variant="titleThirdRegular">
              I Quarter 2024
            </Typography>
            <List dense>
              {iQuarter.map(({ title, checked }, index) => (
                <ListItem key={index}>
                  <ListItemIcon sx={{ minWidth: "inherit" }}>
                    <Checkbox size="small" color="primary" checked={checked} />
                  </ListItemIcon>
                  <ListItemText primary={title} />
                </ListItem>
              ))}
            </List>
          </Box>
          <Box paddingTop={2}>
            <Typography component="h6" variant="titleThirdRegular">
              II Quarter 2024
            </Typography>
            <List dense>
              {iiQuarter.map(({ title, checked }, index) => (
                <ListItem key={index}>
                  <ListItemIcon sx={{ minWidth: "inherit" }}>
                    <Checkbox size="small" color="primary" checked={checked} />
                  </ListItemIcon>
                  <ListItemText primary={title} />
                </ListItem>
              ))}
            </List>
          </Box>
          <Box paddingTop={2}>
            <Typography component="h6" variant="titleThirdRegular">
              III Quarter 2024
            </Typography>
            <List dense>
              {iiiQuarter.map(({ title, checked }, index) => (
                <ListItem key={index}>
                  <ListItemIcon sx={{ minWidth: "inherit" }}>
                    <Checkbox size="small" color="primary" checked={checked} />
                  </ListItemIcon>
                  <ListItemText primary={title} />
                </ListItem>
              ))}
            </List>
          </Box>
          <Box paddingTop={2}>
            <Typography component="h6" variant="titleThirdRegular">
              IV Quarter 2024
            </Typography>
            <List dense>
              {ivQuarter.map(({ title, checked }, index) => (
                <ListItem key={index}>
                  <ListItemIcon sx={{ minWidth: "inherit" }}>
                    <Checkbox size="small" color="primary" checked={checked} />
                  </ListItemIcon>
                  <ListItemText primary={title} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <CustomHr sx={{ margin: "0 0 16px" }} />
          <Typography
            component="h6"
            variant="textBodyEmphasized"
            marginBottom={2}
          >
            Разработка информационной системы для сотрудников
          </Typography>
          <Typography component="p">
            Кроме улучшения платформы{" "}
            <Typography
              component="span"
              color="customColors.colorsBlue"
              fontWeight={700}
            >
              Roze.kz
            </Typography>
            {", "}
            мы каждый день трудимся над улучшением внутренних процессов
            компании, создаем мощную внутреннию систему для наших сотрудников
            тем самым повышая качество наших услуг, скорость и эффективность
            всей компании на благо Казахстанцев!
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};
