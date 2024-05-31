import React from "react";
import { useFormContext } from "react-hook-form";

import { Box, Typography } from "@mui/material";

import { FormInputLabel } from "../../../FormInputLabel";
import { CustomInput } from "../../../../../../../components/CustomInput";

interface LandFieldsProps {
  isLoading: boolean;
  requiredLand: boolean;
}

export const LandFields = ({ isLoading, requiredLand }: LandFieldsProps) => {
  const { formState, register } = useFormContext();
  return (
    <React.Fragment>
      <Box mb={1.5}>
        <FormInputLabel label="Земельный участок" required={requiredLand} />
        <CustomInput
          required={requiredLand}
          id="plotSquare"
          register={register}
          errors={formState.errors}
          disabled={isLoading}
          formatPrice={false}
          placeholder="Например: 8 соток"
          maxLength={300}
        />
        {formState.errors.plotSquare && (
          <Typography variant="textFootnoteRegular" color="error">
            {formState.errors.plotSquare.message as string}
          </Typography>
        )}
      </Box>
    </React.Fragment>
  );
};
