import {
  Box,
  FormControlLabel,
  MenuItem,
  Select,
  Switch,
  Typography,
} from "@mui/material";
import React from "react";
import { FormInputLabel } from "../../../FormInputLabel";
import { Controller, useFormContext } from "react-hook-form";
import {
  selectInputProps,
  selectStyles,
} from "../../../../../../../shared/styles/select";

interface HouseFieldsProps {
  isLoading: boolean;
}

export const HouseFields = ({ isLoading }: HouseFieldsProps) => {
  const { formState, control } = useFormContext();
  return (
    <React.Fragment>
      <Box marginBottom={1.5}>
        <FormInputLabel label="Тип дома" required />
        <Controller
          name="houseType"
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
                  Например: Часть дома
                </Typography>
              </MenuItem>
              <MenuItem value="part">Часть дома</MenuItem>
              <MenuItem value="full">Отдельностоящий</MenuItem>
              <MenuItem value="other">Другое</MenuItem>
            </Select>
          )}
        />
        {formState.errors.houseType && (
          <Typography variant="textFootnoteRegular" color="error">
            {formState.errors.houseType.message as string}
          </Typography>
        )}
      </Box>
      <Box marginBottom={1.5}>
        <FormInputLabel label="Электричество" required />
        <Controller
          name="electricType"
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
                  Например: Чаcтично
                </Typography>
              </MenuItem>
              <MenuItem value="part">Частично</MenuItem>
              <MenuItem value="full">Есть</MenuItem>
              <MenuItem value="none">Нет</MenuItem>
            </Select>
          )}
        />
        {formState.errors.electricType && (
          <Typography variant="textFootnoteRegular" color="error">
            {formState.errors.electricType.message as string}
          </Typography>
        )}
      </Box>
      <Box marginBottom={1.5}>
        <FormInputLabel label="Отопление" required />
        <Controller
          name="heatingType"
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
                  Например: Центральное
                </Typography>
              </MenuItem>
              <MenuItem value="central">Центральное</MenuItem>
              <MenuItem value="gas">Газовое</MenuItem>
              <MenuItem value="solid">Твердое топливо</MenuItem>
              <MenuItem value="liquid">Жидкое топливо</MenuItem>
              <MenuItem value="none">Нет</MenuItem>
            </Select>
          )}
        />
        {formState.errors.heatingType && (
          <Typography variant="textFootnoteRegular" color="error">
            {formState.errors.heatingType.message as string}
          </Typography>
        )}
      </Box>
      <Box marginBottom={1.5}>
        <FormInputLabel label="Газ" required />
        <Controller
          name="gasType"
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
                  Например: Центральный
                </Typography>
              </MenuItem>
              <MenuItem value="central">Центральный</MenuItem>
              <MenuItem value="auto">Автономный</MenuItem>
              <MenuItem value="canConnect">Можно подключить</MenuItem>
              <MenuItem value="none">Нет</MenuItem>
            </Select>
          )}
        />
        {formState.errors.gasType && (
          <Typography variant="textFootnoteRegular" color="error">
            {formState.errors.gasType.message as string}
          </Typography>
        )}
      </Box>
      <Box marginBottom={1.5}>
        <FormInputLabel label="Канализация" required />
        <Controller
          name="sewerType"
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
                  Например: Центральная
                </Typography>
              </MenuItem>
              <MenuItem value="central">Центральная</MenuItem>
              <MenuItem value="septic">Септик</MenuItem>
              <MenuItem value="canConnect">Можно подключить</MenuItem>
              <MenuItem value="none">Нет</MenuItem>
            </Select>
          )}
        />
        {formState.errors.sewerType && (
          <Typography variant="textFootnoteRegular" color="error">
            {formState.errors.sewerType.message as string}
          </Typography>
        )}
      </Box>
      <Box marginBottom={1.5}>
        <FormInputLabel label="Туалет" required />
        <Controller
          name="toiletType"
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
                  Например: Внутри
                </Typography>
              </MenuItem>

              <MenuItem value="in">Внутри</MenuItem>
              <MenuItem value="out">Снаружи</MenuItem>
              <MenuItem value="none">Нет</MenuItem>
            </Select>
          )}
        />
        {formState.errors.toiletType && (
          <Typography variant="textFootnoteRegular" color="error">
            {formState.errors.toiletType.message as string}
          </Typography>
        )}
      </Box>
      <Box marginBottom={1.5}>
        <FormInputLabel label="Водопровод" required />
        <Controller
          name="waterType"
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
                  Например: Центральный
                </Typography>
              </MenuItem>
              <MenuItem value="central">Центральный</MenuItem>
              <MenuItem value="borehole">Скважина</MenuItem>
              <MenuItem value="canConnect">Можно подключить</MenuItem>
              <MenuItem value="none">Нет</MenuItem>
            </Select>
          )}
        />
        {formState.errors.waterType && (
          <Typography variant="textFootnoteRegular" color="error">
            {formState.errors.waterType.message as string}
          </Typography>
        )}
      </Box>
      <Box marginBottom={1.5}>
        <Controller
          name="hasBasement"
          control={control}
          render={({ field }) => (
            <FormControlLabel
              {...field}
              control={<Switch />}
              label="Есть цокольный этаж"
            />
          )}
        />
        <Controller
          name="hasMansard"
          control={control}
          render={({ field }) => (
            <FormControlLabel
              {...field}
              control={<Switch />}
              label="Есть мансарда"
            />
          )}
        />
      </Box>
    </React.Fragment>
  );
};
