import React from "react";

import { Box, IconButton, Typography, LinearProgress } from "@mui/material";
import { IoIosArrowForward } from "react-icons/io";
import { IoClose } from "react-icons/io5";

import { useSellModuleStore } from "../../store/useSellModuleStore";
import { Logotype } from "../../../../../components/Logotype";

export const DrawerHeader = () => {
  const { step, setStep, setIsDrawerOpen } = useSellModuleStore();

  const totalSteps = 8;
  const progressValue = (step / totalSteps) * 100;

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingY: 1,
        }}
      >
        {step !== 8 && (
          <IconButton
            disabled={step === 1}
            color="primary"
            sx={{ rotate: "180deg" }}
            onClick={() => setStep(step - 1)}
          >
            <IoIosArrowForward />
          </IconButton>
        )}
        {step === 8 ? (
          <Logotype />
        ) : (
          <Typography component="h6" variant="titleThirdRegular">
            Подача заявки
          </Typography>
        )}

        <IconButton color="primary" onClick={() => setIsDrawerOpen(false)}>
          <IoClose />
        </IconButton>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ width: "100%" }}>
          <LinearProgress
            variant="determinate"
            value={progressValue}
            sx={{ borderRadius: 2 }}
          />
        </Box>
      </Box>
    </Box>
  );
};
