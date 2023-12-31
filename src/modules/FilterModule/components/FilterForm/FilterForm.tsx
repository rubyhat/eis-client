import {
  Box,
  FormControlLabel,
  MenuItem,
  Select,
  Switch,
  Typography,
} from "@mui/material";
import React from "react";
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import toast from "react-hot-toast";
import { CustomButton } from "../../../../components/CustomButton";
import { CustomInput } from "../../../../components/CustomInput";
import { useLocation } from "react-router-dom";
import { FilterState, initialFilterState, useFilterStore } from "../../store";

const selectStyles = {
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
};

const selectInputProps = {
  padding: 1,
  fontSize: 16,
};

export const FilterForm = () => {
  const { filterState, setIsMobileFilterModalOpen, setFilterState } =
    useFilterStore((state) => state);
  const [isLoading, setIsLoading] = React.useState(false);
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      ...filterState,
    },
  });
  const location = useLocation();

  React.useEffect(() => {
    const fetchData = async () => {
      // Получаем параметры из URL
      const searchParams = new URLSearchParams(location.search);

      // Преобразуем их в объект
      const params = Object.fromEntries(searchParams.entries());
      const newFilterValues = { ...initialFilterState, ...params };
      setFilterState(newFilterValues); // обновляем стейт в стейт менеджере
      reset(newFilterValues); // обновляем стейт в react-hook-form
      console.log("params: ", params);
    };

    // Проверяем, есть ли параметры в URL
    if (location.search) {
      fetchData();
    }
  }, [location, setFilterState, reset]);

  const handleFormSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(false);

    const filteredData = Object.fromEntries(
      Object.entries(data).filter(([, value]) => value !== ""),
    );

    setFilterState({ ...data } as FilterState);
    const queryParams = new URLSearchParams(filteredData).toString();
    // Получение текущего URL
    const currentUrl = new URL(window.location.href);

    // Добавление параметров запроса к текущему URL
    currentUrl.search = queryParams;

    // Обновление URL без перезагрузки страницы
    window.history.pushState({}, "", currentUrl);

    toast.success("Фльтры успешно включены!");

    console.log(queryParams); //todo: create request
    setIsMobileFilterModalOpen(false);
  };

  const handleFormReset = () => {
    reset();
    setFilterState(initialFilterState);
    toast.success("Фльтры успешно сброшены!");
    setIsMobileFilterModalOpen(false);
  };

  return (
    <Box component="form" onSubmit={handleSubmit(handleFormSubmit)}>
      <Box padding="12px 16px">
        <Typography component="h6" variant="titleSecondRegular">
          Фильтры
        </Typography>
      </Box>
      <Box padding="0px 16px">
        <Box marginBottom={1.5}>
          <Typography
            component="p"
            color="customColors.labelsSecondary"
            variant="textFootnoteRegular"
            marginBottom={0.5}
          >
            Тип
          </Typography>
          <Controller
            name="type"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                displayEmpty
                sx={selectStyles}
                inputProps={{ sx: selectInputProps }}
              >
                <MenuItem value="sell">Продажа</MenuItem>
                <MenuItem value="rent">Аренда</MenuItem>
              </Select>
            )}
          />
        </Box>
        <Box marginBottom={1.5}>
          <Typography
            component="p"
            color="customColors.labelsSecondary"
            variant="textFootnoteRegular"
            marginBottom={0.5}
          >
            Город
          </Typography>
          <Controller
            name="city"
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
                    Например: Караганда
                  </Typography>
                </MenuItem>
                <MenuItem value="krg">Караганда</MenuItem>
                <MenuItem value="ast">Астана</MenuItem>
                <MenuItem value="alm">Аламата</MenuItem>
              </Select>
            )}
          />
        </Box>
        <Box marginBottom={1.5}>
          <Typography
            component="p"
            color="customColors.labelsSecondary"
            variant="textFootnoteRegular"
            marginBottom={0.5}
          >
            Категория
          </Typography>
          <Controller
            name="category"
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
                    Например: Квартира
                  </Typography>
                </MenuItem>
                <MenuItem value="apartment">Квартира</MenuItem>
                <MenuItem value="house">Дом</MenuItem>
                <MenuItem value="cottage">Дача</MenuItem>
                <MenuItem value="land">Земельный участок</MenuItem>
                <MenuItem value="business">Коммерческая недвижимость</MenuItem>
                <MenuItem value="factory">Заводы, фабрики</MenuItem>
                <MenuItem value="other">Другое</MenuItem>
              </Select>
            )}
          />
        </Box>
        <Box marginBottom={1.5}>
          <Typography
            component="p"
            color="customColors.labelsSecondary"
            variant="textFootnoteRegular"
            marginBottom={0.5}
          >
            Материал стен
          </Typography>
          <Controller
            name="houseWallMaterial"
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
                    Например: Кирпич
                  </Typography>
                </MenuItem>
                <MenuItem value="brick">Кирпич</MenuItem>
                <MenuItem value="wood">Дерево</MenuItem>
                <MenuItem value="gasSilicateBlock">
                  Газосиликатный блок
                </MenuItem>
                <MenuItem value="heatBlock">Теплоблок</MenuItem>
                <MenuItem value="panel">Каркасно-щитовой</MenuItem>
                <MenuItem value="monolith">Монолит</MenuItem>
                <MenuItem value="saman">Саман</MenuItem>
                <MenuItem value="gasConcreteBlock">Газобетонный блок</MenuItem>
                <MenuItem value="foamBlock">Пеноблок</MenuItem>
              </Select>
            )}
          />
        </Box>
        <Box marginBottom={1.5}>
          <Typography
            component="p"
            color="customColors.labelsSecondary"
            variant="textFootnoteRegular"
            marginBottom={0.5}
          >
            Состояние
          </Typography>
          <Controller
            name="houseCondition"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                placeholder="Выбрать состояние"
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
                <MenuItem value="bad">Без ремонта</MenuItem>
                <MenuItem value="free">Свободная планировка</MenuItem>
                <MenuItem value="build">Черновая отделка</MenuItem>
              </Select>
            )}
          />
        </Box>
        <Box marginBottom={1.5}>
          <Typography
            component="p"
            color="customColors.labelsSecondary"
            variant="textFootnoteRegular"
            marginBottom={0.5}
          >
            Количество комнат
          </Typography>
          <Controller
            name="roomCount"
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
        <Box marginBottom={1.5}>
          <Typography
            component="p"
            color="customColors.labelsSecondary"
            variant="textFootnoteRegular"
            marginBottom={0.5}
          >
            Стоимость
          </Typography>
          <CustomInput
            id="priceStart"
            register={register}
            errors={errors}
            disabled={isLoading}
            formatPrice={false}
            placeholder="цена от"
            sx={{ marginBottom: 1.5 }}
          />
          <CustomInput
            id="priceEnd"
            register={register}
            errors={errors}
            disabled={isLoading}
            formatPrice={false}
            placeholder="цена до"
          />
        </Box>
        <Box marginBottom={1.5}>
          <Typography
            component="p"
            color="customColors.labelsSecondary"
            variant="textFootnoteRegular"
            marginBottom={0.5}
          >
            Площадь общая, от м²
          </Typography>
          <CustomInput
            id="houseSquare"
            register={register}
            errors={errors}
            disabled={isLoading}
            formatPrice={false}
            placeholder="Например: 42"
            sx={{ marginBottom: 1.5 }}
          />
        </Box>
        <Box marginBottom={1.5}>
          <Typography
            component="p"
            color="customColors.labelsSecondary"
            variant="textFootnoteRegular"
            marginBottom={0.5}
          >
            Площадь кухни, от м²
          </Typography>
          <CustomInput
            id="kitchenSquare"
            register={register}
            errors={errors}
            disabled={isLoading}
            formatPrice={false}
            placeholder="Например: 15"
            sx={{ marginBottom: 1.5 }}
          />
        </Box>
        <Box marginBottom={1.5}>
          <Typography
            component="p"
            color="customColors.labelsSecondary"
            variant="textFootnoteRegular"
            marginBottom={0.5}
          >
            Год постройки от
          </Typography>
          <CustomInput
            id="houseBuildingYear"
            register={register}
            errors={errors}
            disabled={isLoading}
            formatPrice={false}
            placeholder="Например: 2023"
            sx={{ marginBottom: 1.5 }}
          />
        </Box>
        <Box marginBottom={1.5}>
          <Controller
            name="mortgage"
            control={control}
            render={({ field }) => (
              <FormControlLabel
                {...field}
                control={<Switch />}
                label="Есть ипотека"
              />
            )}
          />
          <Controller
            name="hasSwap"
            control={control}
            render={({ field }) => (
              <FormControlLabel
                {...field}
                control={<Switch />}
                label="Есть обмен"
              />
            )}
          />
        </Box>
      </Box>
      <Box padding="0px 16px 12px 16px" display="flex" gap={2}>
        <CustomButton
          isCancelVariant
          size="medium"
          fullWidth
          onClick={handleFormReset}
        >
          Сбросить
        </CustomButton>
        <CustomButton
          size="medium"
          fullWidth
          type="submit"
          disabled={isLoading}
        >
          Применить
        </CustomButton>
      </Box>
    </Box>
  );
};
