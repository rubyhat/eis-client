import toast from "react-hot-toast";
import { Controller, useFormContext } from "react-hook-form";
import { Box, MenuItem, Select, Typography } from "@mui/material";

import {
  CityButtonChip,
  useSellModuleStore,
} from "../../../store/useSellModuleStore";
import { FormInputLabel } from "../../FormInputLabel";
import {
  buttonStyles,
  buttonWrapperStyles,
  containerWrapperStyles,
} from "../assets";
import { CustomInput } from "../../../../../../components/CustomInput";
import { livingSpaces } from "../../../constants/SellModuleConstants";
import { SubmitButton } from "../SubmitButton";
import {
  selectInputProps,
  selectStyles,
} from "../../../../../../shared/styles/select";

interface GeopositionFieldsProps {
  isLoading: boolean;
  showApartmentNumberField: boolean;
}
export const GeopositionFields = ({
  isLoading,
  showApartmentNumberField,
}: GeopositionFieldsProps) => {
  const { step, setStep, cityTypes, setActiveCityType } = useSellModuleStore();
  const { formState, control, setValue, getValues, trigger, register } =
    useFormContext();

  const currentCity = getValues().city;
  const showCityRegion = currentCity === "Караганда";

  const handleCityTypeClick = (service: CityButtonChip) => {
    setValue("city", service.value);
    setActiveCityType(service.value);
  };

  const handleClickSubmitButton = async () => {
    const triggerList = ["city", "street", "houseNumber"];
    if (showApartmentNumberField) {
      triggerList.push("apartmentNumber");
      triggerList.push("entranceNumber");
    }
    if (showCityRegion) triggerList.push("cityRegion");
    const isValid = await trigger(triggerList);
    if (isValid) {
      setStep(step + 1);
    } else {
      toast.error("Пожалуйста, заполните все поля, чтобы продолжить!");
      console.log("Форма невалидна:", formState.errors);
    }
  };

  return (
    <Box sx={containerWrapperStyles}>
      <Box flexGrow={1}>
        <Typography component="h6" variant="titleSecondRegular" mb={1.5}>
          Местоположение
        </Typography>
        <Box mb={1.5}>
          <FormInputLabel label="Укажите город" required />
          <Box sx={buttonWrapperStyles}>
            {cityTypes.map((city, index) => (
              <Box
                key={index}
                onClick={() => handleCityTypeClick(city)}
                sx={buttonStyles(city.isActive)}
              >
                <Typography component="p" variant="textCalloutRegular">
                  {city.label}
                </Typography>
              </Box>
            ))}
          </Box>
          {formState.errors.city &&
            !cityTypes.find((city) => city.isActive) && (
              <Typography variant="textFootnoteRegular" color="error">
                {formState.errors.city.message as string}
              </Typography>
            )}
        </Box>
        {getValues().city === "Караганда" && (
          <Box marginBottom={1.5}>
            <FormInputLabel label="Район города" required />
            <Controller
              name="cityRegion"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  displayEmpty
                  sx={selectStyles}
                  inputProps={{ sx: selectInputProps }}
                  disabled={isLoading}
                >
                  <MenuItem value="" disabled>
                    <Typography
                      variant="textCalloutRegular"
                      color="customColors.labelsSecondary"
                    >
                      Выберите район
                    </Typography>
                  </MenuItem>
                  <MenuItem value="Город">Город</MenuItem>
                  <MenuItem value="Юго-Восток">Юго-Восток</MenuItem>
                  <MenuItem value="Михайловка">Михайловка</MenuItem>
                  <MenuItem value="Майкудук">Майкудук</MenuItem>
                  <MenuItem value="Федоровка">Федоровка</MenuItem>
                  <MenuItem value="Кунгей">Кунгей</MenuItem>
                  <MenuItem value="other">Другой</MenuItem>
                </Select>
              )}
            />
            {formState.errors.cityRegion && (
              <Typography variant="textFootnoteRegular" color="error">
                {formState.errors.cityRegion.message as string}
              </Typography>
            )}
          </Box>
        )}
        <Box mb={1.5}>
          <FormInputLabel label="Улица" required />
          <CustomInput
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
            <FormInputLabel
              label="Номер дома"
              required={livingSpaces.includes(getValues().category)}
            />
            <CustomInput
              required
              id="houseNumber"
              register={register}
              errors={formState.errors}
              disabled={isLoading}
              formatPrice={false}
              placeholder="Например: 42"
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
              {formState.errors.entranceNumber && (
                <Typography variant="textFootnoteRegular" color="error">
                  {formState.errors.entranceNumber.message as string}
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
              {formState.errors.intercomNumber && (
                <Typography variant="textFootnoteRegular" color="error">
                  {formState.errors.intercomNumber.message as string}
                </Typography>
              )}
            </Box>
          </Box>
        )}
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
