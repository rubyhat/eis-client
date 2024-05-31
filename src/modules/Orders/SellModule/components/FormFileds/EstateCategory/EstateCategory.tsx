import React from "react";
import { useFormContext } from "react-hook-form";

import { Box, Button, Typography } from "@mui/material";

import { FormInputLabel } from "../../FormInputLabel";
import {
  EstateButtonChip,
  ServiceButtonChip,
  useSellModuleStore,
} from "../../../store/useSellModuleStore";
import { buttonStyles } from "../assets";

interface EstateCategoryProps {
  isLoading: boolean;
}

export const EstateCategory = ({ isLoading }: EstateCategoryProps) => {
  const {
    step,
    setStep,
    serviceTypes,
    setActiveServiceType,
    estateTypes,
    setActiveEstateType,
  } = useSellModuleStore();
  const { formState, setValue, trigger } = useFormContext();

  const handleServiceTypeClick = (service: ServiceButtonChip) => {
    setValue("type", service.value);
    setActiveServiceType(service.value);
  };

  const handleEstateTypeClick = (estate: EstateButtonChip) => {
    setValue("category", estate.value);
    setActiveEstateType(estate.value);
  };

  const handleClickSubmitButton = async () => {
    const isValid = await trigger(["type", "category"]);
    if (isValid) {
      setStep(step + 1);
    } else {
      console.log("Форма невалидна:", formState.errors);
    }
  };

  return (
    <Box>
      <Typography component="h6" variant="titleSecondRegular" mb={1.5}>
        Подача заявки
      </Typography>
      <Box mb={1.5}>
        <FormInputLabel label="Тип услуги" required />
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1.25,
          }}
        >
          {serviceTypes.map((service, index) => (
            <Box
              key={index}
              onClick={() => handleServiceTypeClick(service)}
              sx={{
                ...buttonStyles,
                backgroundColor: service.isActive
                  ? "hsla(32,100%,55%,0.25)"
                  : "#fff",
                borderColor: service.isActive
                  ? "customColors.colorsOrange"
                  : "customColors.labelsQuaternary",
              }}
            >
              <Typography component="p" variant="textCalloutRegular">
                {service.label}
              </Typography>
            </Box>
          ))}
        </Box>
        {formState.errors.type && (
          <Typography variant="textFootnoteRegular" color="error">
            {formState.errors.type.message as string}
          </Typography>
        )}
      </Box>
      <Box mb={1.5}>
        <FormInputLabel label="Тип недвижимости" required />
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1.25,
          }}
        >
          {estateTypes.map((estate, index) => (
            <Box
              key={index}
              onClick={() => handleEstateTypeClick(estate)}
              sx={{
                ...buttonStyles,
                backgroundColor: estate.isActive
                  ? "hsla(32,100%,55%,0.25)"
                  : "#fff",
                borderColor: estate.isActive
                  ? "customColors.colorsOrange"
                  : "customColors.labelsQuaternary",
              }}
            >
              <Typography component="p" variant="textCalloutRegular">
                {estate.label}
              </Typography>
            </Box>
          ))}
        </Box>
        {formState.errors.category && (
          <Typography variant="textFootnoteRegular" color="error">
            {formState.errors.category.message as string}
          </Typography>
        )}
      </Box>
      <Box>
        <Button
          variant="contained"
          fullWidth
          size="large"
          disabled={isLoading}
          sx={{
            textTransform: "none",
            marginTop: "auto",
          }}
          onClick={handleClickSubmitButton}
        >
          Продолжить
        </Button>
      </Box>
    </Box>
  );
};
