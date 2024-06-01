import React from "react";
import { useFormContext } from "react-hook-form";

import { Box, Typography } from "@mui/material";

import { FormInputLabel } from "../../../FormInputLabel";
import {
  RoomButtonChip,
  useSellModuleStore,
} from "../../../../store/useSellModuleStore";
import { buttonStyles } from "../../assets";
import { CustomInput } from "../../../../../../../components/CustomInput";

interface LivingSpaceFieldsProps {
  isLoading: boolean;
  livingSpaces: string[];
  requiredKitchenSquareField: boolean;
  showTargetFloor: boolean;
  requiredTotalFloor: boolean;
  showApartmentComplexTitle: boolean;
}

export const LivingSpaceFields = ({
  isLoading,
  livingSpaces,
  requiredKitchenSquareField,
  showTargetFloor,
  requiredTotalFloor,
  showApartmentComplexTitle,
}: LivingSpaceFieldsProps) => {
  const { roomTypes, setActiveRoomType } = useSellModuleStore();
  const { formState, setValue, register, getValues } = useFormContext();

  const showKitchenSquareField = livingSpaces.includes(getValues().category);

  const handleRoomTypeClick = (room: RoomButtonChip) => {
    setValue("roomCount", room.value);
    setActiveRoomType(room.value);
  };

  return (
    <React.Fragment>
      <Box mb={1.5}>
        <FormInputLabel label="Количество комнат" required />
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1.25,
          }}
        >
          {roomTypes.map((room, index) => (
            <Box
              key={index}
              onClick={() => handleRoomTypeClick(room)}
              sx={{
                ...buttonStyles,
                backgroundColor: room.isActive
                  ? "hsla(32,100%,55%,0.25)"
                  : "#fff",
                borderColor: room.isActive
                  ? "customColors.colorsOrange"
                  : "customColors.labelsQuaternary",
              }}
            >
              <Typography component="p" variant="textCalloutRegular">
                {room.label}
              </Typography>
            </Box>
          ))}
        </Box>
        {formState.errors.roomCount &&
          !roomTypes.find((room) => room.isActive) && (
            <Typography variant="textFootnoteRegular" color="error">
              {formState.errors.roomCount.message as string}
            </Typography>
          )}
      </Box>
      {getValues().roomCount === "custom" && (
        <Box mb={1.5}>
          <FormInputLabel label="Укажите количество комнат" required />
          <CustomInput
            required
            id="customRoomCount"
            register={register}
            errors={formState.errors}
            disabled={isLoading}
            formatPrice={false}
            placeholder="Например: 7"
            type="number"
            min="1"
            max="1000"
          />
          {formState.errors.customRoomCount && (
            <Typography variant="textFootnoteRegular" color="error">
              {formState.errors.customRoomCount.message as string}
            </Typography>
          )}
        </Box>
      )}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 2,
          marginBottom: 1.5,
        }}
      >
        <Box>
          <FormInputLabel label="Общая площадь, м²" required />
          <CustomInput
            required
            id="houseSquare"
            register={register}
            errors={formState.errors}
            disabled={isLoading}
            formatPrice={false}
            placeholder="Например: 42.5"
            type="number"
            min="0"
            max="100000"
          />
          {formState.errors.houseSquare && (
            <Typography variant="textFootnoteRegular" color="error">
              {formState.errors.houseSquare.message as string}
            </Typography>
          )}
        </Box>

        {showKitchenSquareField && (
          <Box>
            <FormInputLabel
              label="Площадь кухни, м²"
              required={requiredKitchenSquareField}
            />
            <CustomInput
              required={requiredKitchenSquareField}
              id="kitchenSquare"
              register={register}
              errors={formState.errors}
              disabled={isLoading}
              formatPrice={false}
              placeholder="Например: 9.5"
              type="number"
              min="0"
              max="1000"
            />
            {formState.errors.kitchenSquare && (
              <Typography variant="textFootnoteRegular" color="error">
                {formState.errors.kitchenSquare.message as string}
              </Typography>
            )}
          </Box>
        )}
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: showTargetFloor ? "1fr 10px 1fr" : "1fr",
          alignItems: "center",
          gap: 1,
          marginBottom: 1.5,
        }}
      >
        {showTargetFloor && (
          <React.Fragment>
            <Box>
              <FormInputLabel label="Этаж" required />
              <CustomInput
                required
                id="targetFloor"
                register={register}
                errors={formState.errors}
                disabled={isLoading}
                formatPrice={false}
                placeholder="Например: 2"
                type="number"
                min="0"
                max="100"
              />
              {formState.errors.targetFloor && (
                <Typography variant="textFootnoteRegular" color="error">
                  {formState.errors.targetFloor.message as string}
                </Typography>
              )}
            </Box>
            <Box
              textAlign="center"
              marginTop={2.75}
              color="customColors.labelsSecondary"
            >
              {" "}
              /{" "}
            </Box>
          </React.Fragment>
        )}
        <Box>
          <FormInputLabel label="Этажей в доме" required={requiredTotalFloor} />
          <CustomInput
            required={requiredTotalFloor}
            id="totalFloor"
            register={register}
            errors={formState.errors}
            disabled={isLoading}
            formatPrice={false}
            placeholder="Например: 9"
            type="number"
            min="1"
            max="100"
          />
          {formState.errors.totalFloor && (
            <Typography variant="textFootnoteRegular" color="error">
              {formState.errors.totalFloor.message as string}
            </Typography>
          )}
        </Box>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 2,
          marginBottom: 1.5,
        }}
      >
        <Box>
          <FormInputLabel label="Высота потолков" required />
          <CustomInput
            required
            id="ceilingHeight"
            register={register}
            errors={formState.errors}
            disabled={isLoading}
            formatPrice={false}
            placeholder="Например: 2.5"
            type="number"
            min="0"
            max="100"
          />
          {formState.errors.ceilingHeight && (
            <Typography variant="textFootnoteRegular" color="error">
              {formState.errors.ceilingHeight.message as string}
            </Typography>
          )}
        </Box>

        <Box>
          <FormInputLabel label="Год постройки" required />
          <CustomInput
            required
            id="houseBuildingYear"
            register={register}
            errors={formState.errors}
            disabled={isLoading}
            formatPrice={false}
            placeholder="Например: 2020"
            type="number"
            min="1900"
            max={new Date().getFullYear().toString() + 1}
          />
          {formState.errors.houseBuildingYear && (
            <Typography variant="textFootnoteRegular" color="error">
              {formState.errors.houseBuildingYear.message as string}
            </Typography>
          )}
        </Box>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 2,
          marginBottom: 1.5,
        }}
      >
        <Box>
          <FormInputLabel label="Количество сан.узлов" required />
          <CustomInput
            required
            id="toiletCount"
            register={register}
            errors={formState.errors}
            disabled={isLoading}
            formatPrice={false}
            placeholder="Например: 1"
            type="number"
            min="0"
            max="100"
          />
          {formState.errors.toiletCount && (
            <Typography variant="textFootnoteRegular" color="error">
              {formState.errors.toiletCount.message as string}
            </Typography>
          )}
        </Box>

        <Box>
          <FormInputLabel label="Парковочных мест" />
          <CustomInput
            id="parkingSeat"
            register={register}
            errors={formState.errors}
            disabled={isLoading}
            formatPrice={false}
            placeholder="Например: 1"
            type="number"
            min="0"
            max="100"
          />
          {formState.errors.parkingSeat && (
            <Typography variant="textFootnoteRegular" color="error">
              {formState.errors.parkingSeat.message as string}
            </Typography>
          )}
        </Box>
      </Box>
      {showApartmentComplexTitle && (
        <Box mb={1.5}>
          <FormInputLabel label="Название ЖК" />
          <CustomInput
            id="apartmentComplexTitle"
            register={register}
            errors={formState.errors}
            disabled={isLoading}
            formatPrice={false}
            placeholder="Например: Green City Park"
          />
          {formState.errors.apartmentComplexTitle && (
            <Typography variant="textFootnoteRegular" color="error">
              {formState.errors.apartmentComplexTitle.message as string}
            </Typography>
          )}
        </Box>
      )}
    </React.Fragment>
  );
};
