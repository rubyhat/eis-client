import React from "react";
import { Box, Button, Typography } from "@mui/material";
import {
  CityButtonChip,
  useSellModuleStore,
} from "../../../store/useSellModuleStore";
import { FormInputLabel } from "../../FormInputLabel";
import { useFormContext } from "react-hook-form";
import { buttonStyles } from "../assets";
import toast from "react-hot-toast";
import { CustomInput } from "../../../../../../components/CustomInput";

interface GeopositionProps {
  isLoading: boolean;
}
export const Geoposition = ({ isLoading }: GeopositionProps) => {
  const { step, setStep, cityTypes, setActiveCityType } = useSellModuleStore();
  const { formState, setValue, trigger, register } = useFormContext();

  const handleCityTypeClick = (service: CityButtonChip) => {
    setValue("city", service.value);
    setActiveCityType(service.value);
  };

  const handleClickSubmitButton = async () => {
    const isValid = await trigger([
      "city",
      "street",
      "houseNumber",
      "apartmentNumber",
    ]);
    if (isValid) {
      setStep(step + 1);
    } else {
      toast.error("Пожалуйста, заполните все поля, чтобы продолжить!");
      console.log("Форма невалидна:", formState.errors);
    }
  };

  return (
    <Box>
      <Typography component="h6" variant="titleSecondRegular" mb={1.5}>
        Местоположение
      </Typography>
      <Box mb={1.5}>
        <FormInputLabel label="Укажите город" required />
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1.25,
          }}
        >
          {cityTypes.map((city, index) => (
            <Box
              key={index}
              onClick={() => handleCityTypeClick(city)}
              sx={{
                ...buttonStyles,
                backgroundColor: city.isActive
                  ? "hsla(32,100%,55%,0.25)"
                  : "#fff",
                borderColor: city.isActive
                  ? "customColors.colorsOrange"
                  : "customColors.labelsQuaternary",
              }}
            >
              <Typography component="p" variant="textCalloutRegular">
                {city.label}
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
        <FormInputLabel label="Улица" required />
        <CustomInput
          required
          id="street"
          register={register}
          errors={formState.errors}
          disabled={isLoading}
          formatPrice={false}
          placeholder="Например: ул. Гоголя"
        />
        {formState.errors.ownerName && (
          <Typography variant="textFootnoteRegular" color="error">
            {formState.errors.ownerName.message as string}
          </Typography>
        )}
      </Box>
      <Box sx={{ display: "flex", gap: 2, marginBottom: 1.5 }}>
        <Box>
          <FormInputLabel label="Номер дома" required />
          <CustomInput
            required
            id="houseNumber"
            register={register}
            errors={formState.errors}
            disabled={isLoading}
            formatPrice={false}
            placeholder="Например: 42"
            type="number"
          />
          {formState.errors.ownerName && (
            <Typography variant="textFootnoteRegular" color="error">
              {formState.errors.ownerName.message as string}
            </Typography>
          )}
        </Box>
        <Box>
          <FormInputLabel label="Номер квартиры" required />
          <CustomInput
            required
            id="apartmentNumber"
            register={register}
            errors={formState.errors}
            disabled={isLoading}
            formatPrice={false}
            placeholder="Например: 24"
            type="number"
          />
          {formState.errors.ownerName && (
            <Typography variant="textFootnoteRegular" color="error">
              {formState.errors.ownerName.message as string}
            </Typography>
          )}
        </Box>
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
