import React from "react";
import toast from "react-hot-toast";
import { useFormContext } from "react-hook-form";

import { Box, Button, Typography } from "@mui/material";

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
}

export const LivingSpaceFields = ({
  isLoading,
  livingSpaces,
}: LivingSpaceFieldsProps) => {
  const { step, setStep, roomTypes, setActiveRoomType } = useSellModuleStore();
  const { formState, setValue, trigger, register, getValues } =
    useFormContext();

  const showKitchenSquareField = livingSpaces.includes(getValues().category);
  const requiredKitchenSquareField = [
    "apartment",
    "house",
    "townhouse",
  ].includes(getValues().category);
  const showTargetFloor = getValues().category === "apartment";
  const requiredTotalFloor = ["apartment", "house", "townhouse"].includes(
    getValues().category,
  );

  const handleRoomTypeClick = (room: RoomButtonChip) => {
    setValue("roomCount", room.value);
    setActiveRoomType(room.value);
  };

  const handleClickSubmitButton = async () => {
    const triggerList = [
      "roomCount",
      "houseSquare",
      "ceilingHeight",
      "houseBuildingYear",
    ];

    if (getValues().roomCount === "custom") triggerList.push("customRoomCount");
    if (requiredKitchenSquareField) triggerList.push("kitchenSquare");
    if (showTargetFloor) triggerList.push("targetFloor");
    if (requiredTotalFloor) triggerList.push("totalFloor");

    const isValid = await trigger(triggerList);
    if (isValid) {
      setStep(step + 1);
    } else {
      toast.error("Пожалуйста, заполните все поля, чтобы продолжить!");
      console.log("Форма невалидна:", formState.errors);
    }
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
        {formState.errors.type && (
          <Typography variant="textFootnoteRegular" color="error">
            {formState.errors.type.message as string}
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
              required
              id="kitchenSquare"
              register={register}
              errors={formState.errors}
              disabled={isLoading}
              formatPrice={false}
              placeholder="Например: 9.5"
              type="number"
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
          gridTemplateColumns: "1fr 1fr",
          gap: 2,
          marginBottom: 1.5,
        }}
      >
        {showTargetFloor && (
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
            />
            {formState.errors.targetFloor && (
              <Typography variant="textFootnoteRegular" color="error">
                {formState.errors.targetFloor.message as string}
              </Typography>
            )}
          </Box>
        )}

        <Box>
          <FormInputLabel label="Этажей в доме" required={requiredTotalFloor} />
          <CustomInput
            required
            id="totalFloor"
            register={register}
            errors={formState.errors}
            disabled={isLoading}
            formatPrice={false}
            placeholder="Например: 9"
            type="number"
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
            max={new Date().getFullYear().toString()}
          />
          {formState.errors.houseBuildingYear && (
            <Typography variant="textFootnoteRegular" color="error">
              {formState.errors.houseBuildingYear.message as string}
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
    </React.Fragment>
  );
};
