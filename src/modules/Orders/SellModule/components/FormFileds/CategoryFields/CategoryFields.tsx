import React from "react";
import toast from "react-hot-toast";
import { useFormContext } from "react-hook-form";
import { Box, Typography } from "@mui/material";

import { LivingSpaceFields } from "./LivingSpaceFields";
import { HomeFields } from "./HomeFields";
import { useSellModuleStore } from "../../../store/useSellModuleStore";
import { BasicFields } from "./BasicFields";
import { LandFields } from "./LandFields";
import { HouseFields } from "./HouseFields";
import {
  arrsForHouseProperties,
  arrsForKitchen,
  arrsForLand,
  arrsForTotalFloor,
  basicTriggerList,
  housePropertiesTriggerList,
  livingSpaces,
  spacesWithLand,
} from "../../../constants/SellModuleConstants";
import { SubmitButton } from "../SubmitButton";
import { containerWrapperStyles } from "../assets";

interface CategoryFieldsProps {
  isLoading: boolean;
}

export const CategoryFields = ({ isLoading }: CategoryFieldsProps) => {
  const { step, setStep } = useSellModuleStore();
  const { formState, getValues, trigger } = useFormContext();

  const currentCategory = getValues().category;

  const isApartment = currentCategory === "apartment";
  const requiredKitchenSquareField = arrsForKitchen.includes(currentCategory);
  const showTargetFloor = isApartment;
  const requiredTotalFloor = arrsForTotalFloor.includes(currentCategory);
  const showApartmentComplexTitle = isApartment;
  const requiredLand = arrsForLand.includes(currentCategory);
  const showHouseProperties = arrsForHouseProperties.includes(currentCategory);

  const handleClickSubmitButton = async () => {
    let triggerList = basicTriggerList;

    if (getValues().roomCount === "custom") triggerList.push("customRoomCount");
    if (requiredKitchenSquareField) triggerList.push("kitchenSquare");
    if (showTargetFloor) triggerList.push("targetFloor");
    if (requiredTotalFloor) triggerList.push("totalFloor");
    if (requiredLand) triggerList.push("plotSquare");
    if (showHouseProperties)
      triggerList = [...triggerList, ...housePropertiesTriggerList];

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
