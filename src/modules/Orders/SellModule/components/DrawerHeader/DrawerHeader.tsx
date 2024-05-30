import React from "react";
import { useFormContext } from "react-hook-form";

import { Box, IconButton, Typography, LinearProgress } from "@mui/material";
import { IoIosArrowForward } from "react-icons/io";

import { useSellModuleStore } from "../../store/useSellModuleStore";

export const DrawerHeader = () => {
  const { formState } = useFormContext();
  const { step, setStep } = useSellModuleStore();

  const totalSteps = 12;
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
        <IconButton
          disabled={step === 1}
          color="primary"
          sx={{ rotate: "180deg" }}
          onClick={() => setStep(step - 1)}
        >
          <IoIosArrowForward />
        </IconButton>
        <Typography component="h6" variant="titleThirdRegular">
          Подача заявки
        </Typography>
        <IconButton
          disabled={step === totalSteps || !formState.isValid}
          color="primary"
          onClick={() => setStep(step + 1)}
        >
          <IoIosArrowForward />
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
