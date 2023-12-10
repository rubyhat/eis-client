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

const selectInputProps = { padding: 1, fontSize: 16 };

export const SearchForm = () => {
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
      rooms: "1",
      startPrice: "",
      endPrice: "",
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
      sx={{
        background: "#fff",
        padding: 4,
        borderRadius: 1,
        margin: "0 50px",
      }}
    >
      <Box
        display="grid"
        columnGap={2}
        gridTemplateColumns="1.75fr 1.25fr 0.75fr 2.25fr 1fr"
      >
        <Controller
          defaultValue="apart"
          name="category"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              sx={{ width: "100%" }}
              inputProps={{ sx: selectInputProps }}
            >
              <MenuItem value="apart">Квартиру</MenuItem>
              <MenuItem value="house">Дом</MenuItem>
              <MenuItem value="dachya">Дача</MenuItem>
              <MenuItem value="earth">Земельный участок</MenuItem>
            </Select>
          )}
        />

        <Controller
          defaultValue="buy"
          name="searchType"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              sx={{ width: "100%" }}
              inputProps={{ sx: selectInputProps }}
            >
              <MenuItem value="buy">Купить</MenuItem>
              <MenuItem value="rent">Аренда</MenuItem>
            </Select>
          )}
        />
        <Controller
          defaultValue="1"
          name="rooms"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              sx={{ width: "100%" }}
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
        <PriceFields
          StartPrice={
            <CustomInput
              id="startPrice"
              register={register}
              errors={errors}
              disabled={isLoading}
              required
              formatPrice={false}
              placeholder="от"
            />
          }
          EndPrice={
            <CustomInput
              id="endPrice"
              register={register}
              errors={errors}
              disabled={isLoading}
              required
              formatPrice={false}
              placeholder="до"
            />
          }
        />
        <CustomButton type="submit">Найти</CustomButton>
      </Box>
    </Box>
  );
};
