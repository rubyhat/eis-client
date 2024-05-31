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
        <FormInputLabel label="Залог" required />
        <Controller
          name="pledge"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              displayEmpty
              sx={selectStyles}
              inputProps={{ sx: selectInputProps }}
            >
              <MenuItem value="" disabled>
                Есть залог или арест?
              </MenuItem>
              <MenuItem value="none">Нет</MenuItem>
              <MenuItem value="bank">Да, у банка</MenuItem>
              <MenuItem value="police">Да, арест</MenuItem>
            </Select>
          )}
        />
        {formState.errors.pledge && (
          <Typography variant="textFootnoteRegular" color="error">
            {formState.errors.pledge.message as string}
          </Typography>
        )}
      </Box>
      <Box marginBottom={1.5}>
        <FormInputLabel label="Документы" required />
        <Controller
          name="documents"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              displayEmpty
              sx={selectStyles}
              inputProps={{ sx: selectInputProps }}
            >
              <MenuItem value="" disabled>
                Укажите состояние документов
              </MenuItem>
              <MenuItem value="good">В порядке</MenuItem>
              <MenuItem value="needUpdate">Нужна корректировка</MenuItem>
              <MenuItem value="needCheck">Нужна проверка</MenuItem>
              <MenuItem value="bad">Есть проблемы</MenuItem>
            </Select>
          )}
        />
        {formState.errors.documents && (
          <Typography variant="textFootnoteRegular" color="error">
            {formState.errors.documents.message as string}
          </Typography>
        )}
      </Box>
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
      <Box marginBottom={1.5}>
        <FormInputLabel label="Материал крыши" required />
        <Controller
          name="houseRoofMaterial"
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
                  Например: Черепица
                </Typography>
              </MenuItem>
              <MenuItem value="slate">Шифер</MenuItem>
              <MenuItem value="corrugatedSheetRoof">Профлист</MenuItem>
              <MenuItem value="tile">Черепица</MenuItem>
              <MenuItem value="soft">Мягкая кровля</MenuItem>
              <MenuItem value="metal">Металл</MenuItem>
              <MenuItem value="ondulin">Ондулин</MenuItem>
              <MenuItem value="metalTile">Металлочерепица</MenuItem>
            </Select>
          )}
        />
        {formState.errors.houseRoofMaterial && (
          <Typography variant="textFootnoteRegular" color="error">
            {formState.errors.houseRoofMaterial.message as string}
          </Typography>
        )}
      </Box>
      <Box marginBottom={1.5}>
        <FormInputLabel label="Квартира меблирована" required />
        <Controller
          name="furniture"
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
                  Например: Частично
                </Typography>
              </MenuItem>
              <MenuItem value="full">Полностью</MenuItem>
              <MenuItem value="part">Частично</MenuItem>
              <MenuItem value="none">Без мебели</MenuItem>
            </Select>
          )}
        />
        {formState.errors.furniture && (
          <Typography variant="textFootnoteRegular" color="error">
            {formState.errors.furniture.message as string}
          </Typography>
        )}
      </Box>
      <Box marginBottom={1.5}>
        <FormInputLabel label="Интернет" required />
        <Controller
          name="ethernet"
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
                  Например: Подключен
                </Typography>
              </MenuItem>
              <MenuItem value="connected">Подключен</MenuItem>
              <MenuItem value="toConnect">Можно подключить</MenuItem>
              <MenuItem value="none">Без интернета</MenuItem>
            </Select>
          )}
        />
        {formState.errors.ethernet && (
          <Typography variant="textFootnoteRegular" color="error">
            {formState.errors.ethernet.message as string}
          </Typography>
        )}
      </Box>
      <Box marginBottom={1.5}>
        <FormInputLabel label="Гараж" required />
        <Controller
          name="garage"
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
                  Например: Есть, входит в стоимость
                </Typography>
              </MenuItem>
              <MenuItem value="none">Нет</MenuItem>
              <MenuItem value="has">Есть</MenuItem>
              <MenuItem value="full">Есть, входит в стоимость</MenuItem>
              <MenuItem value="part">Есть, обсуждается отдельно</MenuItem>
            </Select>
          )}
        />
        {formState.errors.garage && (
          <Typography variant="textFootnoteRegular" color="error">
            {formState.errors.garage.message as string}
          </Typography>
        )}
      </Box>
    </React.Fragment>
  );
};
