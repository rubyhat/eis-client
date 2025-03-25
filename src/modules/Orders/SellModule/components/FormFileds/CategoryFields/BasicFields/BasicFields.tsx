import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Box, MenuItem, Select, Typography } from "@mui/material";

import { FormInputLabel } from "../../../FormInputLabel";
import {
  selectInputProps,
  selectStyles,
} from "../../../../../../../shared/styles/select";

interface BasicFieldsProps {
  isLoading: boolean;
}

export const BasicFields = ({ isLoading }: BasicFieldsProps) => {
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
              disabled={isLoading}
            >
              <MenuItem value="" disabled>
                <Typography
                  variant="textCalloutRegular"
                  color="customColors.labelsSecondary"
                >
                  Есть залог или арест?
                </Typography>
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
      <Box marginBottom={1.5} pb={2}>
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
              disabled={isLoading}
            >
              <MenuItem value="" disabled>
                <Typography
                  variant="textCalloutRegular"
                  color="customColors.labelsSecondary"
                >
                  Укажите состояние документов
                </Typography>
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
    </React.Fragment>
  );
};
