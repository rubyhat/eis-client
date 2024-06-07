import {
  CityButtonChip,
  EstateButtonChip,
  RoomButtonChip,
  ServiceButtonChip,
} from "./useSellModuleStore";

export const serviceTypes: ServiceButtonChip[] = [
  { value: "sell", label: "Продать", isActive: false },
  { value: "rent", label: "Сдать в аренду", isActive: false },
];

export const estateTypes: EstateButtonChip[] = [
  { value: "apartment", label: "Квартира", isActive: false },
  { value: "house", label: "Дом", isActive: false },
  { value: "townhouse", label: "Таунхаус", isActive: false },
  { value: "cottage", label: "Дача", isActive: false },
  { value: "land", label: "Земельный участок", isActive: false },
  { value: "business", label: "Коммерческая недвижимость", isActive: false },
  { value: "factory", label: "Производственное предприятие", isActive: false },
  { value: "other", label: "Другое", isActive: false },
];

export const cityTypes: CityButtonChip[] = [
  { value: "Караганда", label: "Караганда", isActive: false },
  { value: "Темиртау", label: "Темиртау", isActive: false },
  { value: "Абай", label: "Абай", isActive: false },
  { value: "Пришахтинск", label: "Пришахтинск", isActive: false },
  { value: "Сарань", label: "Сарань", isActive: false },
  { value: "Другой", label: "Другой", isActive: false },
];

export const roomTypes: RoomButtonChip[] = [
  { value: "1", label: "1", isActive: false },
  { value: "2", label: "2", isActive: false },
  { value: "3", label: "3", isActive: false },
  { value: "4", label: "4", isActive: false },
  { value: "5", label: "5", isActive: false },
  { value: "custom", label: "Другое", isActive: false },
];

export const initialFormState = {
  ownerName: "",
  ownerPhone: "",
  ownerComment: "",
  type: "",
  category: "",
  city: "",
  street: "",
  houseNumber: "",
  apartmentNumber: "",
  price: "",
  exchange: "",
  roomCount: "",
  customRoomCount: "",
  houseSquare: "",
  kitchenSquare: "",
  targetFloor: "",
  totalFloor: "",
  ceilingHeight: "",
  houseBuildingYear: "",
  pledge: "",
  documents: "",
  houseCondition: "",
  houseWallMaterial: "",
  houseRoofMaterial: "",
  furniture: "",
  ethernet: "",
  garage: "",
  toiletCount: "",
  parkingSeat: "",
  apartmentComplexTitle: "",
  plotSquare: "",
  houseType: "",
  electricType: "",
  heatingType: "",
  gasType: "",
  sewerType: "",
  toiletType: "",
  waterType: "",
  entranceNumber: "",
  intercomNumber: "",
  hasBasement: false,
  hasMansard: false,
  photos: [],
};

export const keysToRemove = [
  "ownerName",
  "ownerPhone",
  "ownerComment",
  "apartmentComplexTitle",
  "apartmentNumber",
];
