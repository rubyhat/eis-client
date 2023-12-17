import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useScreenSize } from "../../../../hooks/useScreenSize";

export const AboutBlock = () => {
  const { isMobile } = useScreenSize();
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
            <Typography variant="textBodyRegular" component="p">
              Здесь нужно донести текстом, в чем отличия представленной
              недвижимости здесь, от той что на Крыше выставляется. Что здесь
              недвижимость конкретно только от агентства недвижимости, что
              каждый желающий здесь выставить объявление не может, тем самым
              исключен факт мошенничества и других нюансов
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
              Каждая недвижимость представленная на данной платформе была
              проверена нашими агентами по недвижимости. Все документы в
              порядке, с собственниками заключен договор.
            </Typography>
            <Typography variant="textBodyRegular" component="p">
              Здесь нужно донести текстом, в чем отличия представленной
              недвижимости здесь, от той что на Крыше выставляется. Что здесь
              недвижимость конкретно только от агентства недвижимости, что
              каждый желающий здесь выставить объявление не может, тем самым
              исключен факт мошенничества и других нюансов
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
              Графический контент
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
            <Typography variant="textBodyRegular" component="p">
              Здесь нужно донести текстом, в чем отличия представленной
              недвижимости здесь, от той что на Крыше выставляется. Что здесь
              недвижимость конкретно только от агентства недвижимости, что
              каждый желающий здесь выставить объявление не может, тем самым
              исключен факт мошенничества и других нюансов
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
