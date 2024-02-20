import { create } from "zustand";

export type ActiveSortType = "new" | "cheap" | "rich";

export type CategoryType =
  | "apartment"
  | "house"
  | "land"
  | "cottage"
  | "townhouse"
  | "business"
  | "factory"
  | "other"; // Категория: квартира, дом, земельный участок, коммерческая недвижимость, бизнес, завод, другое
export type ServiceType = "sell" | "rent"; // Продажа или аренда
export type VisibilityStatusType = "active" | "sold" | "canceled" | "checking"; // Активен, Продан, Отменен, На проверке, на клиенте показываем только Активные
export type HouseConditionType = "perfect" | "good" | "bad" | "free" | "build"; // Хорошее, среднее, требует ремонта, свободная планировка, черновая отделка
export type HouseType = "part" | "full" | "other"; // Часть дома, Целый дом, Дача
export type FurnitureType = "part" | "full" | "none"; // Мебелирован: частично, полностью, без мебели
export type ElectricType = "part" | "full" | "none"; // Электричество: частично, есть, нет
export type HeatingType = "central" | "gas" | "solid" | "liquid" | "none"; // Отопление: Центральное, на газу, на угле, на бензине, нет
export type GasType = "central" | "auto" | "canConnect" | "none"; // Газ: центральный, автономный, есть возможность подключить, нет
export type SewerType = "central" | "septik" | "canConnect" | "none"; // Канализация: центральная, септик, можно подключить, нет
export type ToiletType = "in" | "out"; // Туалет: в доме, на улице
export type WaterType = "central" | "borehole" | "canConnect" | "none"; // Вода: центральная, скважина, можно подключить, нет
export type EthernetType = "connected" | "toConnect" | "none";
export type HouseWallMaterialType =
  | "brick" // Кирпич
  | "wood" // Дерево
  | "gasSilicateBlock" // Газосиликатный блок
  | "cinderBlock" // Шлакоблок
  | "heatBlock" // Теплоблок
  | "panel" // Каркасно-щитовой
  | "monolith" // Монолит
  | "saman" // Саман
  | "gasConcreteBlock" // Газобетонный блок
  | "foamBlock"; // Пеноблок
export type HouseRoofMaterialType =
  | "tile" // Черепица
  | "soft" // Мягкая кровля
  | "metal" // Металл
  | "ondulin" // Ондулин
  | "metalTile" // Металлочерепица
  | "corrugatedSheetRoof" // Профлист
  | "slate"; // Шифер
export type GarageType = "oneCar" | "twoCar" | "other"; // Гараж: На одну машину, На две машины, Есть
export interface ObjectImages {
  _id: string;
  imageUrl: string;
  thumbnailUrl: string;
}

export interface EstateAgentInfo {
  name: string;
  phone: string;
  email?: string;
  role?: string;
  username?: string;
  _id?: string;
  avatar?: string;
}

export interface GeoPositionInfo {
  city: string; // Город
  street: string; // Улица
  houseNumber: number; // Номер дома
  isInfoHidden: boolean; // Свитчер для сокрытия адреса
  mapLink: string; // Ссылка на 2гис
  cityRegion?: string; // Район города
}

export interface DisplayEstateObject
  extends BasicObject,
    Apartment,
    House,
    Flat,
    Land {
  _id: string;
}

// Общие характеристики, вне зависимости от категории объекта
export interface BasicObject {
  category: CategoryType; // Квартира, дом, земельный участок и так далее
  visibilityStatus: VisibilityStatusType; // Статус видимости объекта
  type: ServiceType; // Купить или сдать в аренду
  price: number; // Стоимость
  description: string; // Текстовое описание объекта недвижимости
  mortgage: boolean; // Имеется ли ипотека по данному объекту
  hasSwap: boolean; // Есть обмен да/нет
  isCommercial: boolean; // Коммерческая недвижимости или нет
  isPledge: boolean; // В залоге да или нет
  isDocumentsGood: boolean; // Документы в порядке или нет
  geoPosition: GeoPositionInfo; // Данные об объекте недвижимости, где она
  estateAgent: EstateAgentInfo; // Данные об агенте недвижимости, который сопровождает этот объект, к нему будут все звонить писать и задавать вопросы
  discount: number; // Размер снижения стоимость(скидки)
  updatedAt: string; // Дата обновления
  images?: ObjectImages[] | []; // Пачка фотографий объекта недвижимости
  videoLink?: string; // Ссылка на видео обзор
  garage?: GarageType; // Гараж
  parkingSeat?: number; // Количество парковачных мест
}

// Общие характеристики, которые могут быть в квартире/доме
export interface Apartment extends BasicObject {
  roomCount: number; // Количество комнат
  houseSquare: number; // Площадь общая
  houseBuildingYear?: number; // Год постройки
  kitchenSquare?: number; // Площадь кухни
  countFloor?: number; // Количество этажей в квартире/доме (бывают двухэтажные квартиры, трех этажные котеджи и т.д.)
  ceilingHeight?: number; // Высота потолков
  toiletCount?: number; // Количество сан.узлов
  houseCondition?: HouseConditionType; // Состояние дома
  houseWallMaterial?: HouseWallMaterialType; // Материал стен
  houseRoofMaterial?: HouseRoofMaterialType; // Материал крыши
  furniture?: FurnitureType; // Мебелирован ли?
  ethernet?: EthernetType; // Интернет
}

// Только в доме
export interface House extends Apartment {
  plotSquare?: string; // Площадь/количество соток земли у дома
  hasBasement?: boolean; // Есть/нет цокольный этаж
  hasMansard?: boolean; // Есть/нет мансарда
  houseType?: HouseType; // Тип дома, бывает что в одном доме два хозяина, поделен по-полам;
  electricType?: ElectricType;
  heatingType?: HeatingType;
  gasType?: GasType;
  sewerType?: SewerType;
  toiletType?: ToiletType;
  waterType?: WaterType;
}
// Только в квартире
export interface Flat extends Apartment {
  targetFloor?: number; // Этаж, на котором находится объект
  totalFloor?: number; // Общее количество этажей в здании
}

export interface Land extends BasicObject {
  landSquare: string; // Площадь земли
}

export interface Townhouse extends BasicObject {}
export interface Commercial extends BasicObject {}
export interface Business extends BasicObject {}
export interface Factory extends BasicObject {}
export interface OtherObject extends BasicObject {}
export interface CatalogStore {
  activeSortType: ActiveSortType;
  estateObjects: DisplayEstateObject[];
  setActiveSortType: (v: ActiveSortType) => void;
  setEstateObjects: (v: DisplayEstateObject[]) => void;
}

export const useCatalogStore = create<CatalogStore>((set) => ({
  activeSortType: "new",
  estateObjects: [],
  setActiveSortType: (v) => set({ activeSortType: v }),
  setEstateObjects: (v) => set({ estateObjects: v }),
}));
