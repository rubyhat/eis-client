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
}

export const LivingSpaceFields = ({ isLoading }: LivingSpaceFieldsProps) => {
  const { step, setStep, roomTypes, setActiveRoomType } = useSellModuleStore();
  const { formState, setValue, trigger, register, getValues } =
    useFormContext();

  const handleRoomTypeClick = (room: RoomButtonChip) => {
    setValue("roomCount", room.value);
    setActiveRoomType(room.value);
  };

  const handleClickSubmitButton = async () => {
    const triggerList =
      getValues().roomCount === "custom"
        ? ["roomCount", "customRoomCount"]
        : ["roomCount"];
    const isValid = await trigger(triggerList);
    if (isValid) {
      setStep(step + 1);
    } else {
      toast.error("Пожалуйста, заполните все поля, чтобы продолжить!");
      console.log("Форма невалидна:", formState.errors);
    }
  };

  console.log(roomTypes);

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
