import React from "react";

import { Alert, Typography } from "@mui/material";

export const ImagesInfo = () => {
  return (
    <React.Fragment>
      <Typography component="p" variant="textBodyRegular" mb={1.5}>
        Эти фотографии увидят только сотрудники Roze Agency.
      </Typography>
      <Typography component="p" variant="textBodyRegular" mb={1.5}>
        Они необходимы, чтобы провести{" "}
        <Typography
          component="span"
          variant="textBodyEmphasized"
          color="primary"
        >
          первичную оценку недвижимости
        </Typography>{" "}
        и ознакомить специалистов с предстоящей работой.
      </Typography>
      <Typography component="p" variant="textBodyRegular" mb={1.5}>
        Для рекламы Вашей недвижимости мы будем использовать{" "}
        <Typography
          component="span"
          variant="textBodyEmphasized"
          color="primary"
        >
          свои фотографии
        </Typography>
        , которые будут сделаны во время съемки Вашей недвижимости.
      </Typography>
      <Typography component="p" variant="textBodyRegular" mb={1.5}>
        Пожалуйста, приберитесь, включите свет и сделайте несколько фото
        основных комнат или помещений.
      </Typography>
      <Typography component="p" variant="textBodyRegular" mb={1.5}>
        Для частных домов и коммерческих помещений также{" "}
        <Typography
          component="span"
          variant="textBodyEmphasized"
          color="primary"
        >
          необходимы фото вида снаружи.
        </Typography>
      </Typography>
      <Typography component="p" variant="textBodyRegular" mb={1.5}>
        Эти фото помогут нашим специалистам{" "}
        <Typography
          component="span"
          variant="textBodyEmphasized"
          color="primary"
        >
          лучше понять
        </Typography>
        , с чем предстоит работать.
      </Typography>
      <Alert severity="success" sx={{ mb: 2 }}>
        Пожалуйста, загрузите до 6 фотографий Вашей недвижимости
      </Alert>
      <Alert severity="error" sx={{ mb: 2 }}>
        Не используйте скриншоты, коллажи, мутные или темные фотографии
      </Alert>
    </React.Fragment>
  );
};
