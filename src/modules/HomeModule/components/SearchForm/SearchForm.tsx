import Box from "@mui/material/Box";
import {
  useForm,
  FieldValues,
  SubmitHandler,
  Controller,
} from "react-hook-form";
import { CustomInput } from "../../../../components/CustomInput";
import React from "react";
import { CustomButton } from "../../../../components/CustomButton";
import { PriceFields } from "../PriceFields";
import { MenuItem, Select } from "@mui/material";
import { useScreenSize } from "../../../../hooks/useScreenSize";

const selectInputProps = {
  padding: 1,
  fontSize: 16,
};
const formWrapperStyles = {
  backgroundColor: "customColors.colorsWhite",
  borderRadius: 2,
};
const formWrapperMobileStyles = {
  padding: 2,
  border: "1px solid",
  borderColor: "customColors.labelsQuaternary",
};
const formWrapperDesktopStyles = {
  padding: 4,
  margin: "0 50px",
};

export const SearchForm = () => {
  const { isMobile, isTablet } = useScreenSize();
  const formWrapperTotalStyles =
    isMobile || isTablet
      ? { ...formWrapperStyles, ...formWrapperMobileStyles }
      : { ...formWrapperStyles, ...formWrapperDesktopStyles };

  const [isLoading, setIsLoading] = React.useState(false);
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      category: "apart",
      searchType: "buy",
      roomCount: "1",
      priceStart: "",
      priceENd: "",
    },
  });

  const handleFormSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    setIsLoading(false);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(handleFormSubmit)}
      sx={formWrapperTotalStyles}
    >
      <Box
        display="grid"
        alignItems="center"
        gap={isMobile ? 1.5 : 2}
        gridTemplateColumns={
          isMobile || isTablet ? "" : "1.75fr 2fr 2.25fr 1fr"
        }
      >
        <Controller
          defaultValue="apart"
          name="category"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              sx={{
                height: "36px",
                width: "100%",
                fontSize: "15px",
                "& fieldset": {
                  borderColor: "customColors.labelsQuaternary",
                },
              }}
              inputProps={{ sx: selectInputProps }}
            >
              <MenuItem value="apart">Квартира</MenuItem>
              <MenuItem value="house">Дома и дачи</MenuItem>
              <MenuItem value="earth">Земельный участок</MenuItem>
              <MenuItem value="dachya">Коммерческая недвижимость</MenuItem>
            </Select>
          )}
        />

        <Box
          display="grid"
          gridTemplateColumns="1fr 1fr"
          gap={isMobile ? 1.5 : 2}
        >
          <Controller
            defaultValue="buy"
            name="searchType"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                sx={{
                  fontSize: "15px",
                  height: "36px",
                  width: "100%",
                  "& fieldset": {
                    borderColor: "customColors.labelsQuaternary",
                  },
                }}
                inputProps={{ sx: selectInputProps }}
              >
                <MenuItem value="buy">Купить</MenuItem>
                <MenuItem value="rent">Аренда</MenuItem>
              </Select>
            )}
          />
          <Controller
            defaultValue="1"
            name="roomCount"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                sx={{
                  fontSize: "15px",
                  height: "36px",
                  width: "100%",
                  "& fieldset": {
                    borderColor: "customColors.labelsQuaternary",
                  },
                }}
                inputProps={{ sx: selectInputProps }}
              >
                <MenuItem value="1">1 ком.</MenuItem>
                <MenuItem value="2">2-х ком.</MenuItem>
                <MenuItem value="3">3-х ком.</MenuItem>
                <MenuItem value="4">4-х ком.</MenuItem>
                <MenuItem value="5">5 и более</MenuItem>
              </Select>
            )}
          />
        </Box>
        <PriceFields
          StartPrice={
            <CustomInput
              id="priceStart"
              register={register}
              errors={errors}
              disabled={isLoading}
              required
              formatPrice={false}
              placeholder={isMobile || isTablet ? "цена от" : "от"}
            />
          }
          EndPrice={
            <CustomInput
              id="priceEnd"
              register={register}
              errors={errors}
              disabled={isLoading}
              required
              formatPrice={false}
              placeholder={isMobile || isTablet ? "цена до" : "до"}
            />
          }
        />
        <CustomButton
          type="submit"
          size={isMobile || isTablet ? "large" : "small"}
          sx={{ height: "100%" }}
        >
          Найти
        </CustomButton>
      </Box>
    </Box>
  );
};
