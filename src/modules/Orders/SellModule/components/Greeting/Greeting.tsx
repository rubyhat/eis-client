import React from "react";
import { Box, Typography } from "@mui/material";

import { CustomButton } from "../../../../../components/CustomButton";
import { SellFormDrawer } from "../SellFormDrawer";
import { useSellModuleStore } from "../../store/useSellModuleStore";

export const Greeting = () => {
  const { setIsDrawerOpen } = useSellModuleStore();
  return (
    <Box>
      <Typography component="h1" variant="titleFirstRegular">
        Подача заявки
      </Typography>
      <Typography>Приветствие</Typography>
      <Typography>Описание сотрудничества и его этапов</Typography>
      <CustomButton onClick={() => setIsDrawerOpen(true)}>
        Приступить
      </CustomButton>
      <SellFormDrawer />
    </Box>
  );
};
