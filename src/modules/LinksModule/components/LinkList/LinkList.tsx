import React from "react";
import { Box } from "@mui/material";
import { CustomButton } from "../../../../components/CustomButton";
import { useNavigate } from "react-router-dom";

export const LinkList = () => {
  const navigate = useNavigate();

  return (
    <Box component="ul" paddingBottom={6}>
      <Box component="li" marginBottom={2} onClick={() => navigate("/catalog")}>
        <CustomButton size="large" fullWidth>
          Посмотреть недвижимость
        </CustomButton>
      </Box>
      <Box component="li" marginBottom={2}>
        <Box
          component="a"
          href="https://api.whatsapp.com/send?phone=77752813783&amp;text=Здравствуйте, я хочу подать заявку на размещение моей недвижимости на сайте Roze.kz"
        >
          <CustomButton variant="outlined" size="large" fullWidth>
            Оставить заявку
          </CustomButton>
        </Box>
      </Box>
      <Box component="li">
        <Box
          component="a"
          href="https://api.whatsapp.com/send?phone=77752813783&amp;text=Здравствуйте, мне нужна консультация специалиста по недвижимости"
        >
          <CustomButton size="large" fullWidth>
            Написать менеджеру
          </CustomButton>
        </Box>
      </Box>
    </Box>
  );
};
