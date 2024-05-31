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
  ownerComment: yup.string(),
  exchange: yup
    .string()
    .required("Пожалуйста, укажите рассматриваете ли обмен"),
  roomCount: yup.string().required("Пожалуйста, укажите количество комнат"),
  customRoomCount: yup
    .string()
    .required("Пожалуйста, укажите количество комнат"),
});
