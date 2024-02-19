import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { SocialMediaIconLinks } from "../../components/SocialMediaIconLinks";
import { CustomButton } from "../../components/CustomButton";
import { useScreenSize } from "../../hooks/useScreenSize";
import { useNavigate } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

export const AboutModule = () => {
  useTitle("О нас - Roze Agency");
  const { isMobile } = useScreenSize();
  const navigate = useNavigate();
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8} lg={6}>
          <Typography component="h1" variant="titleFirstRegular">
            Агентство Недвижимости «Розе»
          </Typography>
          <Box padding="16px 0">
            <Typography
              component="h6"
              variant="titleSecondRegular"
              marginBottom={1}
            >
              Артур Розе
            </Typography>
            <Typography
              component="p"
              variant="textBodyRegular"
              marginBottom={1.5}
            >
              Артур Розе - риэлтор, первые два года своей карьеры (с 2019 - 2021
              год) он провёл в одном из крупных агентств города.
            </Typography>
            <Typography component="p" variant="textBodyRegular">
              С 2021 года открыл свою компанию с целью создать особенное
              Агентство Недвижимости, в котором слова будут нераздельно связаны
              с делом и результатом.
            </Typography>
          </Box>
          <Box padding="16px 0">
            <Typography
              component="h6"
              variant="titleSecondRegular"
              marginBottom={1}
            >
              Для чего нужна платформа Roze Agency
            </Typography>
            <Typography
              component="p"
              variant="textBodyRegular"
              marginBottom={1.5}
            >
              Данная платформа была создана с целью предоставить покупателям уже
              проверенную недвижимость.
            </Typography>
            <Typography component="p" variant="textBodyRegular">
              Каждая недвижимость представленная на данной платформе была
              проверена нашими агентами по недвижимости.
            </Typography>
            <Typography component="p" variant="textBodyRegular">
              Мы знаем с кем мы работаем.
            </Typography>
            <Typography component="p" variant="textBodyRegular">
              По всей недвижимости установлена личность продавца, принадлежность
              ему недвижимости, также проверено наличие обременений или долгов.
            </Typography>
            <Typography component="p" variant="textBodyRegular">
              Права на выставление и модерацию объявлений на платформе Roze.kz
              есть только у старших сотрудников АН «Розе», любой желающий не
              может здесь выставить своё объявление.
            </Typography>
          </Box>
          <Box padding="16px 0">
            <Typography
              component="h6"
              variant="titleSecondRegular"
              marginBottom={1}
            >
              Преимущества Платформы
            </Typography>
            <Box component="ol" type="1">
              <Box component="li" sx={{ listStyle: "inherit" }}>
                <Typography
                  component="p"
                  variant="textBodyRegular"
                  marginBottom={1.5}
                >
                  Мы продаем только то, что проверяли и видели сами, все
                  представленные фотографии были сделаны сотрудниками компании.
                </Typography>
              </Box>
              <Box component="li" sx={{ listStyle: "inherit" }}>
                <Typography
                  component="p"
                  variant="textBodyRegular"
                  marginBottom={1.5}
                >
                  По каждому объявлению вы можете в формате реального времени,
                  нажав на кнопку, посмотреть видеообзор.
                </Typography>
              </Box>
              <Box component="li" sx={{ listStyle: "inherit" }}>
                <Typography
                  component="p"
                  variant="textBodyRegular"
                  marginBottom={1.5}
                >
                  Все цены по нашим объектам согласованы с руководителем
                  Агентства и близки к рыночным.
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box padding="16px 0">
            <Typography
              component="h6"
              variant="titleSecondRegular"
              marginBottom={1}
            >
              Каких результатов мы добились за последние годы работы?
            </Typography>
            <Box component="ol" type="1">
              <Box component="li" sx={{ listStyle: "inherit" }}>
                <Typography
                  component="p"
                  variant="textBodyRegular"
                  marginBottom={1.5}
                >
                  Мы разработали собственную методику продажи недвижимости.
                </Typography>
              </Box>
              <Box component="li" sx={{ listStyle: "inherit" }}>
                <Typography
                  component="p"
                  variant="textBodyRegular"
                  marginBottom={1.5}
                >
                  Мы создали уникальные условия сотрудничества с собственниками
                  объектов.
                </Typography>
              </Box>
              <Box component="li" sx={{ listStyle: "inherit" }}>
                <Typography
                  component="p"
                  variant="textBodyRegular"
                  marginBottom={1.5}
                >
                  Мы активно развиваемся в социальных сетях, с целью создания
                  лучших каналов продаж в городе, за последний год наша
                  аудитория выросла в + 30 000 пользователей, а видеообзоры
                  собирают сотни тысяч просмотров.
                </Typography>
              </Box>
              <Box component="li" sx={{ listStyle: "inherit" }}>
                <Typography
                  component="p"
                  variant="textBodyRegular"
                  marginBottom={1.5}
                >
                  Посмотреть на нашу работу в живую можно в наших аккаунтах в
                  социальных сетях 👇
                </Typography>
              </Box>
            </Box>

            <SocialMediaIconLinks size="1.25em" />
          </Box>
          <CustomButton
            size="large"
            fullWidth={isMobile}
            onClick={() => navigate("/catalog")}
          >
            Перейти в каталог недвижимости
          </CustomButton>
        </Grid>
      </Grid>
    </Container>
  );
};
