import * as yup from "yup";
import {
  arrsForHouseProperties,
  arrsForKitchen,
  arrsForLand,
  arrsForTotalFloor,
  livingSpaces,
} from "../constants/SellModuleConstants";

const currentYear = new Date().getFullYear();
const maxYear = currentYear + 5;

export const schema = yup.object().shape({
  ownerName: yup.string().required("Введите Ваше Имя"),
  ownerPhone: yup
    .string()
    .required("Введите Ваш номер телефона")
    .min(16, "Проверьте корректность введенного номера телефона")
    .max(16, "Проверьте корректность введенного номера телефона"),
  type: yup.string().required("Пожалуйста, выберите тип услуги"),
  category: yup.string().required("Пожалуйста, выберите тип недвижимости"),
  city: yup.string().required("Пожалуйста, укажите город"),
  cityRegion: yup.string().when("city", {
    is: (v: string) => v === "Караганда",
    then: (schema) => schema.required("Пожалуйста, укажите район города"),
    otherwise: (schema) => schema.notRequired(),
  }),
  street: yup.string().required("Пожалуйста, укажите улицу"),
  price: yup.string().required("Пожалуйста, укажите вашу стоимость"),
  ownerComment: yup.string(),
  exchange: yup.string().when("type", {
    is: (v: string) => v === "rent",
    then: (schema) =>
      schema.required("Пожалуйста, укажите рассматриваете ли обмен"),
    otherwise: (schema) => schema.notRequired(),
  }),
  pledge: yup.string().required("Пожалуйста, укажите состояние залога/ареста"),
  documents: yup.string().required("Пожалуйста, укажите состояние документов"),
  hasBasement: yup.boolean(),
  hasMansard: yup.boolean(),
  intercomNumber: yup.string(),
  houseNumber: yup.string().when("category", {
    is: (v: string) => livingSpaces.includes(v),
    then: (schema) => schema.required("Пожалуйста, укажите номер дома"),
    otherwise: (schema) => schema.notRequired(),
  }),
  apartmentNumber: yup.string().when("category", {
    is: (val: string) => val === "apartment",
    then: (schema) => schema.required("Пожалуйста, укажите номер квартиры"),
    otherwise: (schema) => schema.notRequired(),
  }),
  entranceNumber: yup.string().when("category", {
    is: (val: string) => val === "apartment",
    then: (schema) => schema.required("Пожалуйста, укажите номер подъезда"),
    otherwise: (schema) => schema.notRequired(),
  }),
  houseSquare: yup.string().when("category", {
    is: (v: string) => livingSpaces.includes(v),
    then: (schema) => schema.required("Пожалуйста, укажите площадь"),
    otherwise: (schema) => schema.notRequired(),
  }),
  kitchenSquare: yup.string().when("category", {
    is: (v: string) => arrsForKitchen.includes(v),
    then: (schema) =>
      schema.required(
        "Пожалуйста, укажите площадь. Если кухни нет, то укажите 0",
      ),
    otherwise: (schema) => schema.notRequired(),
  }),
  targetFloor: yup.string().when("category", {
    is: (val: string) => val === "apartment",
    then: (schema) => schema.required("Пожалуйста, укажите этаж"),
    otherwise: (schema) => schema.notRequired(),
  }),
  totalFloor: yup.string().when("category", {
    is: (v: string) => arrsForTotalFloor.includes(v),
    then: (schema) => schema.required("Пожалуйста, укажите количество этажей"),
    otherwise: (schema) => schema.notRequired(),
  }),
  ceilingHeight: yup.string().when("category", {
    is: (v: string) => livingSpaces.includes(v),
    then: (schema) => schema.required("Пожалуйста, укажите высоту потолков"),
    otherwise: (schema) => schema.notRequired(),
  }),
  houseBuildingYear: yup.string().when("category", {
    is: (v: string) => livingSpaces.includes(v),
    then: (schema) =>
      schema
        .required("Пожалуйста, укажите год постройки дома")
        .length(4, "Введите полный год из 4 цифр")
        .test(
          "is-valid-year",
          `Год постройки должен быть не меньше 1900 и не больше ${maxYear}`,
          (value) => {
            const year = parseInt(value, 10);
            return year >= 1900 && year <= maxYear;
          },
        ),
    otherwise: (schema) => schema.notRequired(),
  }),
  houseCondition: yup.string().when("category", {
    is: (v: string) => livingSpaces.includes(v),
    then: (schema) =>
      schema.required("Пожалуйста, укажите состояние объекта недвижимости"),
    otherwise: (schema) => schema.notRequired(),
  }),
  houseWallMaterial: yup.string().when("category", {
    is: (v: string) => livingSpaces.includes(v),
    then: (schema) => schema.required("Пожалуйста, укажите материал стен"),
    otherwise: (schema) => schema.notRequired(),
  }),
  houseRoofMaterial: yup.string().when("category", {
    is: (v: string) => livingSpaces.includes(v),
    then: (schema) => schema.required("Пожалуйста, укажите материал крыши"),
    otherwise: (schema) => schema.notRequired(),
  }),
  furniture: yup.string().when("category", {
    is: (v: string) => livingSpaces.includes(v),
    then: (schema) =>
      schema.required("Пожалуйста, укажите имеется/остаётся ли мебель"),
    otherwise: (schema) => schema.notRequired(),
  }),
  ethernet: yup.string().when("category", {
    is: (v: string) => livingSpaces.includes(v),
    then: (schema) =>
      schema.required("Пожалуйста, укажите подключен ли интернет"),
    otherwise: (schema) => schema.notRequired(),
  }),
  garage: yup.string().when("category", {
    is: (v: string) => livingSpaces.includes(v),
    then: (schema) =>
      schema.required("Пожалуйста, укажите подключен ли интернет"),
    otherwise: (schema) => schema.notRequired(),
  }),
  toiletCount: yup.string().when("category", {
    is: (v: string) => livingSpaces.includes(v),
    then: (schema) =>
      schema.required("Пожалуйста, укажите количество сан.узлов"),
    otherwise: (schema) => schema.notRequired(),
  }),
  roomCount: yup.string().when("category", {
    is: (v: string) => livingSpaces.includes(v),
    then: (schema) => schema.required("Пожалуйста, укажите количество комнат"),
    otherwise: (schema) => schema.notRequired(),
  }),
  plotSquare: yup.string().when("category", {
    is: (v: string) => arrsForLand.includes(v),
    then: (schema) => schema.required("Пожалуйста, укажите количество соток"),
    otherwise: (schema) => schema.notRequired(),
  }),
  houseType: yup.string().when("category", {
    is: (v: string) => arrsForHouseProperties.includes(v),
    then: (schema) => schema.required("Пожалуйста, укажите тип дома"),
    otherwise: (schema) => schema.notRequired(),
  }),
  electricType: yup.string().when("category", {
    is: (v: string) => arrsForHouseProperties.includes(v),
    then: (schema) =>
      schema.required("Пожалуйста, укажите есть ли электричество"),
    otherwise: (schema) => schema.notRequired(),
  }),
  heatingType: yup.string().when("category", {
    is: (v: string) => arrsForHouseProperties.includes(v),
    then: (schema) => schema.required("Пожалуйста, укажите есть ли отопление"),
    otherwise: (schema) => schema.notRequired(),
  }),
  gasType: yup.string().when("category", {
    is: (v: string) => arrsForHouseProperties.includes(v),
    then: (schema) => schema.required("Пожалуйста, укажите есть ли газ"),
    otherwise: (schema) => schema.notRequired(),
  }),
  sewerType: yup.string().when("category", {
    is: (v: string) => arrsForHouseProperties.includes(v),
    then: (schema) =>
      schema.required("Пожалуйста, укажите есть ли канализация"),
    otherwise: (schema) => schema.notRequired(),
  }),
  toiletType: yup.string().when("category", {
    is: (v: string) => arrsForHouseProperties.includes(v),
    then: (schema) => schema.required("Пожалуйста, укажите есть ли туалет"),
    otherwise: (schema) => schema.notRequired(),
  }),
  waterType: yup.string().when("category", {
    is: (v: string) => arrsForHouseProperties.includes(v),
    then: (schema) => schema.required("Пожалуйста, укажите есть ли вода"),
    otherwise: (schema) => schema.notRequired(),
  }),
  customRoomCount: yup.string().when("roomCount", {
    is: (v: string) => v === "custom",
    then: (schema) => schema.required("Пожалуйста, укажите количество комнат"),
    otherwise: (schema) => schema.notRequired(),
  }),
  images: yup
    .array()
    .of(yup.mixed())
    .min(1, "Пожалуйста, загрузите фотографии"),
});
