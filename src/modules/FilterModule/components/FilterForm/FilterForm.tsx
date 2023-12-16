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
import { CustomButton } from "../../../../components/CustomButton";
import { CustomInput } from "../../../../components/CustomInput";

const selectInputProps = {
  padding: 1,
  fontSize: 16,
};

export const FilterForm = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      category: "",
      houseWallMaterial: "",
      houseCondition: "",
      roomCount: "",
      priceStart: "",
      priceEnd: "",
      houseSquare: "",
      kitchenSquare: "",
      houseBuildingYear: "",
      mortgage: false,
      hasSwap: false,
    },
  });

  const handleFormSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    setIsLoading(false);
  };
  return (
    <Box component="form" onSubmit={handleSubmit(handleFormSubmit)}>
      <Box padding="12px 16px">
        <Typography component="h6" variant="titleSecondRegular">
          Фильтры
        </Typography>
      </Box>
      <Box padding="12px 16px">
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
                    Например: Квартира
                  </Typography>
                </MenuItem>
                <MenuItem value="apart">Квартира</MenuItem>
                <MenuItem value="house">Дома и дачи</MenuItem>
                <MenuItem value="earth">Земельный участок</MenuItem>
                <MenuItem value="dachya">Коммерческая недвижимость</MenuItem>
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
                    Например: Хорошее
                  </Typography>
                </MenuItem>
                <MenuItem value="perfect">Хорошее</MenuItem>
                <MenuItem value="good">Среднее</MenuItem>
                <MenuItem value="bad">Требует ремонта</MenuItem>
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
            name="mortage"
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
      <Box padding="12px 16px" display="flex" gap={2}>
        <CustomButton isCancelVariant size="small" fullWidth>
          Сбросить
        </CustomButton>
        <CustomButton size="small" fullWidth type="submit" disabled={isLoading}>
          Применить
        </CustomButton>
      </Box>
    </Box>
  );
};
