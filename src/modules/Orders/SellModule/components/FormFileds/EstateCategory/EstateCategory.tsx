import { useFormContext } from "react-hook-form";
import { Box, Typography } from "@mui/material";
import toast from "react-hot-toast";

import { FormInputLabel } from "../../FormInputLabel";
import {
  EstateButtonChip,
  ServiceButtonChip,
  useSellModuleStore,
} from "../../../store/useSellModuleStore";
import {
  buttonStyles,
  buttonWrapperStyles,
  containerWrapperStyles,
} from "../assets";
import { SubmitButton } from "../SubmitButton";

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
      toast.error("Пожалуйста, заполните все поля, чтобы продолжить!");
    }
  };

  return (
    <Box sx={containerWrapperStyles}>
      <Box flexGrow={1}>
        <Typography component="h6" variant="titleSecondRegular" mb={1.5}>
          Подача заявки
        </Typography>
        <Box mb={1.5}>
          <FormInputLabel label="Тип услуги" required />
          <Box sx={buttonWrapperStyles}>
            {serviceTypes.map((service, index) => (
              <Box
                key={index}
                onClick={() => handleServiceTypeClick(service)}
                sx={buttonStyles(service.isActive)}
              >
                <Typography component="p" variant="textCalloutRegular">
                  {service.label}
                </Typography>
              </Box>
            ))}
          </Box>
          {formState.errors.type &&
            !serviceTypes.find((service) => service.isActive) && (
              <Typography variant="textFootnoteRegular" color="error">
                {formState.errors.type.message as string}
              </Typography>
            )}
        </Box>
        <Box mb={1.5}>
          <FormInputLabel label="Тип недвижимости" required />
          <Box sx={buttonWrapperStyles}>
            {estateTypes.map((estate, index) => (
              <Box
                key={index}
                onClick={() => handleEstateTypeClick(estate)}
                sx={buttonStyles(estate.isActive)}
              >
                <Typography component="p" variant="textCalloutRegular">
                  {estate.label}
                </Typography>
              </Box>
            ))}
          </Box>
          {formState.errors.category &&
            !estateTypes.find((estate) => estate.isActive) && (
              <Typography variant="textFootnoteRegular" color="error">
                {formState.errors.category.message as string}
              </Typography>
            )}
        </Box>
      </Box>
      <Box>
        <SubmitButton
          isLoading={isLoading}
          handleClickSubmitButton={handleClickSubmitButton}
        />
      </Box>
    </Box>
  );
};
