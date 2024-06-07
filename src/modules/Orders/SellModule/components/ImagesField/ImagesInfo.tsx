import React from "react";

import { Alert, Typography } from "@mui/material";

export const ImagesInfo = () => {
  return (
    <React.Fragment>
      <Typography component="p" variant="textBodyRegular" mb={1.5}>
        Эти фотографии увидят только сотрудники Roze Agency.
      </Typography>
      <Typography component="p" variant="textBodyRegular" mb={1.5}>
        Они необходимы, чтобы провести первичную оценку недвижимости. Для
        рекламы Вашей недвижимости будут использоваться фотографии сделанные
        нашими специалистами
      </Typography>
      <Typography component="p" variant="textBodyRegular" mb={1.5}>
        Пожалуйста, приберитесь, включите свет и сделайте несколько фото всех
        комнат или помещений, это поможет нашим специалистам лучше понять, с чем
        предстоит работать
      </Typography>
      <Alert severity="success" sx={{ mb: 2 }}>
        Пожалуйста, загрузите до 10 фотографий Вашей недвижимости
      </Alert>
      <Alert severity="error" sx={{ mb: 2 }}>
        Не используйте скриншоты, коллажи, мутные или темные фотографии
      </Alert>
    </React.Fragment>
  );
};
