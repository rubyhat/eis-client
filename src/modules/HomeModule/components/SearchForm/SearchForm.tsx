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
import { MenuItem, Select, Typography } from "@mui/material";
import { useScreenSize } from "../../../../hooks/useScreenSize";
import { useNavigate } from "react-router-dom";
import { useFilterStore } from "../../../FilterModule/store";
import { useAnalytics } from "../../../../hooks/useAnalytics";

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
  const { trackEvent } = useAnalytics();
  const { setFilterState, filterState } = useFilterStore((state) => state);
  const { isMobile, isTablet } = useScreenSize();
  const formWrapperTotalStyles =
    isMobile || isTablet
      ? { ...formWrapperStyles, ...formWrapperMobileStyles }
      : { ...formWrapperStyles, ...formWrapperDesktopStyles };
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = React.useState(false);
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      city: "",
      category: "apartment",
      type: "sell",
      roomCount: "",
      priceStart: "",
      priceEnd: "",
    },
  });

  const handleFormSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(false);

    const filteredData = Object.fromEntries(
      Object.entries(data).filter(([, value]) => value !== ""),
    );

    setFilterState({ ...filterState, ...filteredData });
    const queryParams = new URLSearchParams(filteredData).toString();
    trackEvent({
      category: "SearchForm",
      action: "Click Search Button",
      label: "Search form on Home Page",
    });
    navigate(`/catalog?${queryParams}`);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(handleFormSubmit)}
      sx={formWrapperTotalStyles}
    >
      {isMobile && (
        <Box marginBottom={1.5}>
          <Controller
            name="city"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                displayEmpty
                sx={{
                  height: "36px",
                  width: "100%",
                  fontSize: "15px",
                  "&:hover": {
                    "& fieldset": {
                      borderColor: "hsla(213, 100%, 53%, 1) !important",
                    },
                  },
                  "& fieldset": {
                    borderColor: "customColors.labelsQuaternary",
                  },
                }}
                inputProps={{ sx: selectInputProps }}
              >
                <MenuItem disabled value="">
                  <Typography
                    variant="textCalloutRegular"
                    color="customColors.labelsSecondary"
                  >
                    Например: Караганда
                  </Typography>
                </MenuItem>
                <MenuItem value="Караганда">Караганда</MenuItem>
                <MenuItem value="Пришахтинск">Пришахтинск</MenuItem>
                <MenuItem value="Абай">Абай</MenuItem>
                <MenuItem value="Сарань">Сарань</MenuItem>
                {/* <MenuItem value="Темиртау">Темиртау</MenuItem>
                <MenuItem value="Абай">Абай</MenuItem>
                <MenuItem value="Шахтинск">Шахтинск</MenuItem>
                <MenuItem value="Пришахтинск">Пришахтинск</MenuItem>
                <MenuItem value="Астана">Астана</MenuItem>
                <MenuItem value="Алмата">Алмата</MenuItem> */}
              </Select>
            )}
          />
        </Box>
      )}
      <Box
        display="grid"
        alignItems="center"
        gap={isMobile ? 1.5 : 2}
        gridTemplateColumns={
          isMobile || isTablet ? "" : "1.75fr 2fr 2.25fr 1fr"
        }
      >
        <Controller
          defaultValue="apartment"
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
              displayEmpty
            >
              <MenuItem value="apartment">Квартира</MenuItem>
              <MenuItem value="house">Дом</MenuItem>
              <MenuItem value="townhouse">Таунхаус</MenuItem>
              <MenuItem value="cottage">Дача</MenuItem>
              <MenuItem value="land">Земельный участок</MenuItem>
              <MenuItem value="business">Коммерческая недвижимость</MenuItem>
              <MenuItem value="">Показать все</MenuItem>
              {/* <MenuItem value="factory">Заводы, фабрики</MenuItem>
              <MenuItem value="other">Другое</MenuItem> */}
            </Select>
          )}
        />

        <Box
          display="grid"
          gridTemplateColumns="1fr 1fr"
          gap={isMobile ? 1.5 : 2}
        >
          <Controller
            name="type"
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
                <MenuItem value="sell">Купить</MenuItem>
                <MenuItem value="rent">Арендовать</MenuItem>
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
                displayEmpty
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
                <MenuItem disabled value="">
                  <Typography
                    variant="textCalloutRegular"
                    color="customColors.labelsSecondary"
                  >
                    Например: 1 ком.
                  </Typography>
                </MenuItem>
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
              formatPrice={false}
              placeholder={isMobile || isTablet ? "цена от" : "от"}
              type="number"
              min="0"
            />
          }
          EndPrice={
            <CustomInput
              id="priceEnd"
              register={register}
              errors={errors}
              disabled={isLoading}
              formatPrice={false}
              placeholder={isMobile || isTablet ? "цена до" : "до"}
              type="number"
              min="0"
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
