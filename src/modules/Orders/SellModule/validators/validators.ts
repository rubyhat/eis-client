import * as yup from "yup";

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
  street: yup.string().required("Пожалуйста, укажите улицу"),
  houseNumber: yup.string().required("Пожалуйста, укажите номер дома"),
  apartmentNumber: yup.string().required("Пожалуйста, укажите номер квартиры"),
  price: yup.string().required("Пожалуйста, укажите вашу стоимость"),
  houseSquare: yup.string().required("Пожалуйста, укажите площадь"),
  kitchenSquare: yup
    .string()
    .required("Пожалуйста, укажите площадь. Если кухни нет, то укажите 0"),
  targetFloor: yup.string().required("Пожалуйста, укажите этаж"),
  totalFloor: yup.string().required("Пожалуйста, укажите количество этажей"),
  ceilingHeight: yup.string().required("Пожалуйста, укажите высоту потолков"),
  houseBuildingYear: yup
    .string()
    .required("Пожалуйста, укажите год постройки дома")
    .min(4, "Введите полный год из 4 цифр")
    .max(4, "Введите полный год из 4 цифр"),
  ownerComment: yup.string(),
  exchange: yup
    .string()
    .required("Пожалуйста, укажите рассматриваете ли обмен"),
  pledge: yup.string().required("Пожалуйста, укажите состояние залога/ареста"),
  documents: yup.string().required("Пожалуйста, укажите состояние документов"),
  houseCondition: yup
    .string()
    .required("Пожалуйста, укажите состояние объекта недвижимости"),
  houseWallMaterial: yup.string().required("Пожалуйста, укажите материал стен"),
  houseRoofMaterial: yup
    .string()
    .required("Пожалуйста, укажите материал крыши"),
  furniture: yup
    .string()
    .required("Пожалуйста, укажите имеется/остаётся ли мебель"),
  ethernet: yup.string().required("Пожалуйста, укажите подключен ли интернет"),
  garage: yup.string().required("Пожалуйста, укажите подключен ли интернет"),
  toiletCount: yup
    .string()
    .required("Пожалуйста, укажите количество сан.узлов"),
  roomCount: yup.string().required("Пожалуйста, укажите количество комнат"),
  plotSquare: yup.string().required("Пожалуйста, укажите количество соток"),
  houseType: yup.string().required("Пожалуйста, укажите тип дома"),
  electricType: yup
    .string()
    .required("Пожалуйста, укажите есть ли электричество"),
  heatingType: yup.string().required("Пожалуйста, укажите есть ли отопление"),
  gasType: yup.string().required("Пожалуйста, укажите есть ли газ"),
  sewerType: yup.string().required("Пожалуйста, укажите есть ли канализация"),
  toiletType: yup.string().required("Пожалуйста, укажите есть ли туалет"),
  waterType: yup.string().required("Пожалуйста, укажите есть ли туалет"),
  hasBasement: yup.boolean(),
  hasMansard: yup.boolean(),
  customRoomCount: yup
    .string()
    .required("Пожалуйста, укажите количество комнат"),
});
