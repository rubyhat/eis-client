import React from "react";

import { Box, Button, Typography } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { LivingSpaceFields } from "./LivingSpaceFields";
import { HomeFields } from "./HomeFields";
import toast from "react-hot-toast";
import { useSellModuleStore } from "../../../store/useSellModuleStore";
import { BasicFields } from "./BasicFields";
import { LandFields } from "./LandFields";
import { HouseFields } from "./HouseFields";

interface CategoryFieldsProps {
  isLoading: boolean;
}

const livingSpaces = ["apartment", "house", "townhouse", "cottage", "business"];
const spacesWithLand = ["house", "townhouse", "cottage", "business"];

export const CategoryFields = ({ isLoading }: CategoryFieldsProps) => {
  const { step, setStep } = useSellModuleStore();
  const { formState, getValues, trigger } = useFormContext();

  const currentCategory = getValues().category;
  const isApartment = currentCategory === "apartment";
  const requiredKitchenSquareField = [
    "apartment",
    "house",
    "townhouse",
  ].includes(currentCategory);
  const showTargetFloor = isApartment;
  const requiredTotalFloor = ["apartment", "house", "townhouse"].includes(
    currentCategory,
  );
  const showApartmentComplexTitle = isApartment;
  const requiredLand = ["house", "cottage"].includes(currentCategory);
  const showHouseProperties = ["house", "cottage", "townhouse"].includes(
    currentCategory,
  );

  const handleClickSubmitButton = async () => {
    let triggerList = [
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
    if (requiredLand) triggerList.push("plotSquare");
    if (showHouseProperties)
      triggerList = [
        ...triggerList,
        "houseType",
        "electricType",
        "heatingType",
        "gasType",
        "sewerType",
        "toiletType",
        "waterType",
      ];

    console.log(triggerList);

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
      {livingSpaces.includes(currentCategory) && (
        <React.Fragment>
          <LivingSpaceFields
            isLoading={isLoading}
            livingSpaces={livingSpaces}
            requiredKitchenSquareField={requiredKitchenSquareField}
            showTargetFloor={showTargetFloor}
            requiredTotalFloor={requiredTotalFloor}
            showApartmentComplexTitle={showApartmentComplexTitle}
          />
          <HomeFields isLoading={isLoading} />
        </React.Fragment>
      )}
      {spacesWithLand.includes(currentCategory) && (
        <React.Fragment>
          <LandFields isLoading={isLoading} requiredLand={requiredLand} />
        </React.Fragment>
      )}
      {showHouseProperties && <HouseFields isLoading={isLoading} />}
      <BasicFields isLoading={isLoading} />
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
