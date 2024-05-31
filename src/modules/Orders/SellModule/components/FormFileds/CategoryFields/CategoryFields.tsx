import React from "react";

import { Box, Button, Typography } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { LivingSpaceFields } from "./LivingSpaceFields";
import { HomeFields } from "./HomeFields";
import toast from "react-hot-toast";
import { useSellModuleStore } from "../../../store/useSellModuleStore";

interface CategoryFieldsProps {
  isLoading: boolean;
}

const livingSpaces = ["apartment", "house", "townhouse", "cottage", "business"];

export const CategoryFields = ({ isLoading }: CategoryFieldsProps) => {
  const { step, setStep } = useSellModuleStore();
  const { formState, getValues, trigger } = useFormContext();

  const isApartment = getValues().category === "apartment";
  const requiredKitchenSquareField = [
    "apartment",
    "house",
    "townhouse",
  ].includes(getValues().category);
  const showTargetFloor = isApartment;
  const requiredTotalFloor = ["apartment", "house", "townhouse"].includes(
    getValues().category,
  );
  const showApartmentComplexTitle = isApartment;

  const handleClickSubmitButton = async () => {
    const triggerList = [
      "roomCount",
      "houseSquare",
      "ceilingHeight",
      "houseBuildingYear",
      "documents",
      "pledge",
      "houseCondition",
      "houseWallMaterial",
      "houseRoofMaterial",
      "furniture",
      "ethernet",
      "garage",
      "toiletCount",
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
    <Box>
      <Typography component="h6" variant="titleSecondRegular" mb={1.5}>
        Описание
      </Typography>
      {livingSpaces.includes(getValues().category) && (
        <LivingSpaceFields
          isLoading={isLoading}
          livingSpaces={livingSpaces}
          requiredKitchenSquareField={requiredKitchenSquareField}
          showTargetFloor={showTargetFloor}
          requiredTotalFloor={requiredTotalFloor}
          showApartmentComplexTitle={showApartmentComplexTitle}
        />
      )}
      <HomeFields isLoading={isLoading} />
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
