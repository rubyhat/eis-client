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
import { FilterState, initialFilterState, useFilterStore } from "../../store";
import { useQueryClient } from "@tanstack/react-query";
import { apiCatalogModule } from "../../../CatalogModule/api/apiCatalogModule";
import { useCatalogStore } from "../../../CatalogModule/store";
import { useNavigate } from "react-router-dom";

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

// todo: в полях с числами сделать валидацию на использование только точек, без запятых
export const FilterForm = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState(false);
  const { setEstateObjects } = useCatalogStore((state) => state);
  const { filterState, setIsMobileFilterModalOpen, setFilterState } =
    useFilterStore((state) => state);

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

  React.useEffect(() => {
    const updateFilterState = async () => {
      // Получаем параметры из URL
      const searchParams = new URLSearchParams(location.search);

      // Преобразуем их в объект
      const params = Object.fromEntries(searchParams.entries());
      const newFilterValues = { ...initialFilterState, ...params };
      setFilterState(newFilterValues); // обновляем стейт в стейт менеджере
      reset(newFilterValues); // обновляем стейт в react-hook-form
    };

    // Проверяем, есть ли параметры в URL
    if (location.search) {
      updateFilterState();
    }
  }, [setFilterState, reset, queryClient]);

  const fetchData = async (queryParams: string = "") => {
    setIsLoading(true);
    try {
      const response = await queryClient.fetchQuery({
        queryFn: () => apiCatalogModule.fetchCatalog(queryParams),
        queryKey: ["catalogItems", queryParams],
      });
      setEstateObjects(response);
      toast.success("Фильтры успешно обновлены!", { duration: 3000 });
    } catch (error) {
      toast.error("Извините, произошла ошибка, попробуйте повторить позднее.", {
        duration: 5000,
      });
      // eslint-disable-next-line no-console
      console.error("fetch data error", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const updateUrlParams = (data: FieldValues) => {
    // Очищаем от пустых значений
    const filteredData = Object.fromEntries(
      Object.entries(data).filter(
        ([, value]) => value !== "" && value !== null,
      ),
    );

    // Сохраняем стейт фильтра
    setFilterState({ ...data } as FilterState);

    // Создаем параметры для ссылки
    const queryParams = new URLSearchParams(filteredData).toString();

    // Получение текущего URL
    const currentUrl = new URL(window.location.href);

    // Добавляем параметры запроса к текущему URL
    currentUrl.search = queryParams;

    // Обновляем URL без перезагрузки страницы
    window.history.pushState({}, "", currentUrl);

    // Делаем запрос за данными на сервер
    fetchData(queryParams);

    // Обновляем стейт react-router-dom для получения актуального урл, для заголовков в компоненте CatalogModule
    navigate(`?${queryParams}`);
  };

  const handleFormSubmit: SubmitHandler<FieldValues> = (data) => {
    updateUrlParams(data);
    setIsMobileFilterModalOpen(false);
  };

  const handleFormReset = () => {
    reset(initialFilterState);
    setFilterState(initialFilterState);
    setIsMobileFilterModalOpen(false);
    updateUrlParams(initialFilterState);
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
            variant="textCalloutRegular"
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
                <MenuItem value="sell">Купить</MenuItem>
                <MenuItem value="rent">Арендовать</MenuItem>
              </Select>
            )}
          />
        </Box>
        <Box marginBottom={1.5}>
          <Typography
            component="p"
            color="customColors.labelsSecondary"
            variant="textCalloutRegular"
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
                <MenuItem value="townhouse">Таунхаус</MenuItem>
                <MenuItem value="cottage">Дача</MenuItem>
                <MenuItem value="land">Земельный участок</MenuItem>
                <MenuItem value="business">Коммерческая недвижимость</MenuItem>
                {/* <MenuItem value="factory">Заводы, фабрики</MenuItem> */}
                {/* <MenuItem value="other">Другое</MenuItem> */}
              </Select>
            )}
          />
        </Box>
        <Box marginBottom={1.5}>
          <Typography
            component="p"
            color="customColors.labelsSecondary"
            variant="textCalloutRegular"
            marginBottom={0.5}
          >
            Стоимость
          </Typography>
          <CustomInput
            id="priceStart"
            type="number"
            min="0"
            register={register}
            errors={errors}
            disabled={isLoading}
            formatPrice={false}
            placeholder="цена от"
            sx={{ marginBottom: 1.5 }}
          />
          <CustomInput
            id="priceEnd"
            type="number"
            min="0"
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
            variant="textCalloutRegular"
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
                <MenuItem value="">Не указывать</MenuItem>
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
        <Box marginBottom={1.5}>
          <Typography
            component="p"
            color="customColors.labelsSecondary"
            variant="textCalloutRegular"
            marginBottom={0.5}
          >
            Район
          </Typography>
          <Controller
            name="cityRegion"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                displayEmpty
                sx={selectStyles}
                inputProps={{ sx: selectInputProps }}
              >
                <MenuItem value="">Не указывать</MenuItem>
                <MenuItem value="Город">Город</MenuItem>
                <MenuItem value="Юго-Восток">Юго-Восток</MenuItem>
                <MenuItem value="Михайловка">Михайловка</MenuItem>
                <MenuItem value="Майкудук">Майкудук</MenuItem>
                <MenuItem value="Федоровка">Федоровка</MenuItem>
                <MenuItem value="Кунгей">Кунгей</MenuItem>
              </Select>
            )}
          />
        </Box>
        <Box marginBottom={1.5}>
          <Typography
            component="p"
            color="customColors.labelsSecondary"
            variant="textCalloutRegular"
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
                <MenuItem value="">Не указывать</MenuItem>
                <MenuItem value="brick">Кирпич</MenuItem>
                <MenuItem value="wood">Дерево</MenuItem>
                <MenuItem value="gasSilicateBlock">
                  Газосиликатный блок
                </MenuItem>
                <MenuItem value="heatBlock">Теплоблок</MenuItem>
                <MenuItem value="panel">Панельный</MenuItem>
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
            variant="textCalloutRegular"
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
                <MenuItem value="">Не указывать</MenuItem>
                <MenuItem value="perfect">Евроремонт</MenuItem>
                <MenuItem value="good">Косметический ремонт</MenuItem>
                <MenuItem value="medium">Средний ремонт</MenuItem>
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
            variant="textCalloutRegular"
            marginBottom={0.5}
          >
            Документы
          </Typography>
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
                <MenuItem value="">Не указывать</MenuItem>
                <MenuItem value="good">В порядке</MenuItem>
                <MenuItem value="needUpdate">Нужна корректировка</MenuItem>
                <MenuItem value="needCheck">Нужна проверка</MenuItem>
                <MenuItem value="bad">Есть проблемы</MenuItem>
              </Select>
            )}
          />
        </Box>
        <Box marginBottom={1.5}>
          <Typography
            component="p"
            color="customColors.labelsSecondary"
            variant="textCalloutRegular"
            marginBottom={0.5}
          >
            Залог
          </Typography>
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
                <MenuItem value="">Не указывать</MenuItem>
                <MenuItem value="none">Нет</MenuItem>
                <MenuItem value="bank">Да, у банка</MenuItem>
                <MenuItem value="police">Да, арест</MenuItem>
              </Select>
            )}
          />
        </Box>
        <Box marginBottom={1.5}>
          <Typography
            component="p"
            color="customColors.labelsSecondary"
            variant="textCalloutRegular"
            marginBottom={0.5}
          >
            Ипотека
          </Typography>
          <Controller
            name="mortgage"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                displayEmpty
                sx={selectStyles}
                inputProps={{ sx: selectInputProps }}
              >
                <MenuItem value="">Не указывать</MenuItem>
                <MenuItem value="accepted">Есть</MenuItem>
                <MenuItem value="declined">Нет</MenuItem>
                <MenuItem value="possibly">Под вопросом</MenuItem>
              </Select>
            )}
          />
        </Box>
        <Box marginBottom={1.5}>
          <Typography
            component="p"
            color="customColors.labelsSecondary"
            variant="textCalloutRegular"
            marginBottom={0.5}
          >
            Обмен
          </Typography>
          <Controller
            name="exchange"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                displayEmpty
                sx={selectStyles}
                inputProps={{ sx: selectInputProps }}
              >
                <MenuItem value="">Не указывать</MenuItem>
                <MenuItem value="yes">Есть</MenuItem>
                <MenuItem value="no">Нет</MenuItem>
              </Select>
            )}
          />
        </Box>
        <Box marginBottom={1.5}>
          <Typography
            component="p"
            color="customColors.labelsSecondary"
            variant="textCalloutRegular"
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
                <MenuItem value="">Не указывать</MenuItem>
                <MenuItem value="1">1 ком.</MenuItem>
                <MenuItem value="2">2-х ком.</MenuItem>
                <MenuItem value="3">3-х ком.</MenuItem>
                <MenuItem value="4">4-х ком.</MenuItem>
                <MenuItem value="5">5 и более</MenuItem>
              </Select>
            )}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            marginBottom: 1.5,
          }}
        >
          <Box>
            <Typography
              component="p"
              color="customColors.labelsSecondary"
              variant="textCalloutRegular"
              marginBottom={0.5}
            >
              Этаж
            </Typography>
            <CustomInput
              id="targetFloor"
              register={register}
              errors={errors}
              disabled={isLoading}
              formatPrice={false}
              placeholder="2"
              type="number"
              min="0"
            />
          </Box>
          <Typography
            component="p"
            color="customColors.labelsSecondary"
            variant="textCalloutRegular"
            marginTop={3}
          >
            /
          </Typography>
          <Box>
            <Typography
              component="p"
              color="customColors.labelsSecondary"
              variant="textCalloutRegular"
              marginBottom={0.5}
            >
              Всего
            </Typography>
            <CustomInput
              id="totalFloor"
              register={register}
              errors={errors}
              disabled={isLoading}
              formatPrice={false}
              placeholder="5"
              type="number"
              min="0"
            />
          </Box>
        </Box>
        <Box>
          <Controller
            name="notFirstFloor"
            control={control}
            render={({ field }) => (
              <FormControlLabel
                {...field}
                control={
                  <Switch
                    {...field}
                    checked={String(field.value) === "true"}
                    onChange={(e) =>
                      field.onChange(e.target.checked.toString())
                    }
                  />
                }
                label="Не первый этаж"
              />
            )}
          />
          <Controller
            name="notLastFloor"
            control={control}
            render={({ field }) => (
              <FormControlLabel
                {...field}
                control={
                  <Switch
                    {...field}
                    checked={String(field.value) === "true"}
                    onChange={(e) =>
                      field.onChange(e.target.checked.toString())
                    }
                  />
                }
                label="Не последний этаж"
              />
            )}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
          }}
        >
          <Box>
            <Typography
              component="p"
              color="customColors.labelsSecondary"
              variant="textCalloutRegular"
              marginBottom={0.5}
            >
              Площадь, от м²
            </Typography>
            <CustomInput
              id="houseSquare"
              register={register}
              errors={errors}
              disabled={isLoading}
              formatPrice={false}
              placeholder="42"
              sx={{ marginBottom: 1.5 }}
            />
          </Box>
          <Box>
            <Typography
              component="p"
              color="customColors.labelsSecondary"
              variant="textCalloutRegular"
              marginBottom={0.5}
            >
              Площадь, до м²
            </Typography>
            <CustomInput
              id="houseSquareEnd"
              register={register}
              errors={errors}
              disabled={isLoading}
              formatPrice={false}
              placeholder="142"
              sx={{ marginBottom: 1.5 }}
            />
          </Box>
        </Box>
        <Box marginBottom={1.5}>
          <Typography
            component="p"
            color="customColors.labelsSecondary"
            variant="textCalloutRegular"
            marginBottom={0.5}
          >
            Площадь кухни, от м²
          </Typography>
          <CustomInput
            id="kitchenSquare"
            type="number"
            min="0"
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
            variant="textCalloutRegular"
            marginBottom={0.5}
          >
            Год постройки от
          </Typography>
          <CustomInput
            id="houseBuildingYear"
            type="number"
            min="1900"
            register={register}
            errors={errors}
            disabled={isLoading}
            formatPrice={false}
            placeholder="Например: 2023"
            sx={{ marginBottom: 1.5 }}
          />
        </Box>
      </Box>
      <Box padding="0px 16px 12px 16px" display="flex" gap={2}>
        <CustomButton
          isCancelVariant
          size="medium"
          fullWidth
          onClick={handleFormReset}
          disabled={isLoading}
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
