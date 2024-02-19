import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useScreenSize } from "../../../../hooks/useScreenSize";
import { Link, useNavigate } from "react-router-dom";
import { CustomButton } from "../../../../components/CustomButton";

export const AboutBlock = () => {
  const { isMobile } = useScreenSize();
  const navigate = useNavigate();
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="/static/images/about/img-about-secured.svg"
            alt="Проверенная недвижимость"
            width="100%"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            height="100%"
          >
            <Typography
              variant="titleFirstRegular"
              component="h5"
              marginBottom={1.5}
            >
              Проверенная недвижимость
            </Typography>
            <Typography
              variant="textBodyRegular"
              component="p"
              marginBottom={2}
            >
              Каждая недвижимость представленная на данной платформе была
              проверена нашими агентами по недвижимости. Все документы в
              порядке, с собственниками заключен договор.
            </Typography>
            <Typography
              variant="textBodyRegular"
              component="p"
              marginBottom={2}
            >
              По каждому из наших объявлений Вы можете посмотреть видеообзор в
              нашем{" "}
              <Typography
                component="a"
                href="https://www.instagram.com/roze.nedvizhimost.krg"
                target="_blank"
                sx={{
                  color: "customColors.colorsBlue",
                  textDecoration: "underline",
                }}
              >
                Instagram
              </Typography>{" "}
              аккаунте!
            </Typography>
            <Typography variant="textBodyRegular" component="p">
              Мы очень стараемся делать качественные фотографии, заранее готовим
              объект, чтобы вы лучше понимали его реальные преимущества,
              планировку или явные недостатки.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box component="div" marginBottom="96px" />
        </Grid>
        {isMobile && (
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/static/images/about/img-about-house.svg"
              alt="Проверенная недвижимость"
              width="100%"
            />
          </Grid>
        )}
        <Grid item xs={12} md={6}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            height="100%"
          >
            <Typography
              variant="titleFirstRegular"
              component="h5"
              marginBottom={1.5}
            >
              Удобные фильтры для поиска
            </Typography>
            <Typography
              variant="textBodyRegular"
              component="p"
              marginBottom={2}
            >
              Мы каждый день работаем над платформой, чтобы сделать ее еще более
              удобной и уникальной для наших посетителей
            </Typography>
            <Typography
              variant="textBodyRegular"
              component="p"
              marginBottom={2}
            >
              На{" "}
              <Box
                component={Link}
                to="/catalog"
                sx={{
                  color: "customColors.colorsBlue",
                  textDecoration: "underline",
                }}
              >
                странице каталога
              </Box>
              , Вы можете воспользоваться фильтрами для поиска недвижимости под
              Ваш запрос, а также поделиться получившийся подборкой с Вашими
              близкими!
            </Typography>
            <Typography variant="textBodyRegular" component="p">
              Просто выберите необходимые параметры в фильтрах и нажмите на
              кнопку{" "}
              <Box component="span" color="customColors.colorsBlue">
                Поделиться подборкой
              </Box>
              , ссылка на страницу с выбранными насройками автоматически
              скопируется и Вы сможете ее отправить в любом месте!
            </Typography>
          </Box>
        </Grid>
        {!isMobile && (
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/static/images/about/img-about-house.svg"
              alt="Проверенная недвижимость"
              width="100%"
            />
          </Grid>
        )}
        <Grid item xs={12}>
          <Box component="div" marginBottom="96px" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="/static/images/about/img-about-content.svg"
            alt="Проверенная недвижимость"
            width="100%"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            height="100%"
          >
            <Typography
              variant="titleFirstRegular"
              component="h5"
              marginBottom={1.5}
            >
              О нас
            </Typography>
            <Typography
              variant="textBodyRegular"
              component="p"
              marginBottom={2}
            >
              Агентство Недвижимости Розе предоставляет современный подход к
              поиску и продаже Вашей недвижимости, используя современные
              инструменты и технологии, а также{" "}
              <Box component="span" color="customColors.colorsBlue">
                действительно индивидуальный подход к каждому клиенту
              </Box>
            </Typography>
            <Typography
              variant="textBodyRegular"
              component="p"
              marginBottom={2}
            >
              Чтобы познакомиться с нами по-ближе и узнать больше об агентстве и
              его основателе, приглашаем на страницу{" "}
              <Box
                component={Link}
                to="/about"
                sx={{
                  color: "customColors.colorsBlue",
                  textDecoration: "underline",
                }}
              >
                О нас
              </Box>{" "}
              :)
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <CustomButton fullWidth onClick={() => navigate("/about")}>
                О нас
              </CustomButton>
              <CustomButton fullWidth onClick={() => navigate("/help")}>
                Вопрос/Ответ
              </CustomButton>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
