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

interface GeopositionFieldsProps {
  isLoading: boolean;
  showApartmentNumberField: boolean;
}
export const GeopositionFields = ({
  isLoading,
  showApartmentNumberField,
}: GeopositionFieldsProps) => {
  const { step, setStep, cityTypes, setActiveCityType } = useSellModuleStore();
  const { formState, setValue, trigger, register } = useFormContext();

  const handleCityTypeClick = (service: CityButtonChip) => {
    setValue("city", service.value);
    setActiveCityType(service.value);
  };

  const handleClickSubmitButton = async () => {
    const triggerList = ["city", "street", "houseNumber"];
    if (showApartmentNumberField) triggerList.push("apartmentNumber");
    const isValid = await trigger(triggerList);
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
        {formState.errors.city && !cityTypes.find((city) => city.isActive) && (
          <Typography variant="textFootnoteRegular" color="error">
            {formState.errors.city.message as string}
          </Typography>
        )}
      </Box>
      <Box mb={1.5}>
        <FormInputLabel label="Улица" required />
        <CustomInput
          // required
          id="street"
          register={register}
          errors={formState.errors}
          disabled={isLoading}
          formatPrice={false}
          placeholder="Например: ул. Гоголя"
        />
        {formState.errors.street && (
          <Typography variant="textFootnoteRegular" color="error">
            {formState.errors.street.message as string}
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
          {formState.errors.houseNumber && (
            <Typography variant="textFootnoteRegular" color="error">
              {formState.errors.houseNumber.message as string}
            </Typography>
          )}
        </Box>
        {showApartmentNumberField && (
          <Box>
            <FormInputLabel
              label="Номер квартиры"
              required={showApartmentNumberField}
            />
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
            {formState.errors.apartmentNumber && (
              <Typography variant="textFootnoteRegular" color="error">
                {formState.errors.apartmentNumber.message as string}
              </Typography>
            )}
          </Box>
        )}
      </Box>
      {showApartmentNumberField && (
        <Box sx={{ display: "flex", gap: 2, marginBottom: 1.5 }}>
          <Box>
            <FormInputLabel label="Номер подъезда" required />
            <CustomInput
              required
              id="entranceNumber"
              register={register}
              errors={formState.errors}
              disabled={isLoading}
              formatPrice={false}
              placeholder="Например: 42"
              type="number"
            />
            {formState.errors.houseNumber && (
              <Typography variant="textFootnoteRegular" color="error">
                {formState.errors.houseNumber.message as string}
              </Typography>
            )}
          </Box>

          <Box>
            <FormInputLabel label="Номер домофона" />
            <CustomInput
              id="intercomNumber"
              register={register}
              errors={formState.errors}
              disabled={isLoading}
              formatPrice={false}
              placeholder="Например: 24"
              type="number"
            />
            {formState.errors.apartmentNumber && (
              <Typography variant="textFootnoteRegular" color="error">
                {formState.errors.apartmentNumber.message as string}
              </Typography>
            )}
          </Box>
        </Box>
      )}
      <Box>
        <Button
          variant="contained"
          fullWidth
          size="large"
          disabled={isLoading}
          sx={{
            bottom: 16,
            textTransform: "none",
            position: "absolute",
            width: {
              xs: "calc(100% - 32px)",
              sm: 568,
            },
          }}
          onClick={handleClickSubmitButton}
        >
          Продолжить
        </Button>
      </Box>
    </Box>
  );
};
