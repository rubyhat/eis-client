import { Box, MenuItem, Select, Typography } from "@mui/material";
import React from "react";
import { FormInputLabel } from "../../../FormInputLabel";
import { Controller, useFormContext } from "react-hook-form";
import {
  selectInputProps,
  selectStyles,
} from "../../../../../../../shared/styles/select";

interface InfoSelectsProps {
  isLoading: boolean;
}

export const InfoSelects = ({ isLoading }: InfoSelectsProps) => {
  const { formState, control } = useFormContext();

  return (
    <React.Fragment>
      <Box marginBottom={1.5}>
        <FormInputLabel label="Состояние" required />
        <Controller
          name="houseCondition"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              displayEmpty
              sx={selectStyles}
              inputProps={{ sx: selectInputProps }}
            >
              <MenuItem disabled value="">
                <Typography
                  variant="textCalloutRegular"
                  color="customColors.labelsSecondary"
                >
                  Например: Евроремонт
                </Typography>
              </MenuItem>
              <MenuItem value="perfect">Евроремонт</MenuItem>
              <MenuItem value="good">Косметический ремонт</MenuItem>
              <MenuItem value="medium">Средний ремонт</MenuItem>
              <MenuItem value="bad">Без ремонта</MenuItem>
              <MenuItem value="clean">Предчистовая отделка</MenuItem>
              <MenuItem value="free">Свободная планировка</MenuItem>
              <MenuItem value="build">Черновая отделка</MenuItem>
            </Select>
          )}
        />
        {formState.errors.houseCondition && (
          <Typography variant="textFootnoteRegular" color="error">
            {formState.errors.houseCondition.message as string}
          </Typography>
        )}
      </Box>
      <Box marginBottom={1.5}>
        <FormInputLabel label="Материал стен" required />
        <Controller
          name="houseWallMaterial"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              displayEmpty
              sx={selectStyles}
              inputProps={{ sx: selectInputProps }}
              disabled={isLoading}
            >
              <MenuItem disabled value="">
                <Typography
                  variant="textCalloutRegular"
                  color="customColors.labelsSecondary"
                >
                  Например: Кирпич
                </Typography>
              </MenuItem>
              <MenuItem value="brick">Кирпич</MenuItem>
              <MenuItem value="panel">Панельный</MenuItem>
              <MenuItem value="foamBlock">Пеноблок</MenuItem>
              <MenuItem value="cinderBlock">Шлакоблок</MenuItem>
              <MenuItem value="gasSilicateBlock">Газосиликатный блок</MenuItem>
              <MenuItem value="gasConcreteBlock">Газобетонный блок</MenuItem>
              <MenuItem value="heatBlock">Теплоблок</MenuItem>
              <MenuItem value="monolith">Монолит</MenuItem>
              <MenuItem value="saman">Саман</MenuItem>
              <MenuItem value="wood">Дерево</MenuItem>
            </Select>
          )}
        />
        {formState.errors.houseWallMaterial && (
          <Typography variant="textFootnoteRegular" color="error">
            {formState.errors.houseWallMaterial.message as string}
          </Typography>
        )}
      </Box>
    </React.Fragment>
  );
};
