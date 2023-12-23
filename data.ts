// temp for tests

export type CategoryType =
  | "apartment"
  | "house"
  | "land"
  | "cottage"
  | "business"
  | "factory"
  | "other"; // Категория: квартира, дом, земельный участок, коммерческая недвижимость, бизнес, завод, другое
export type ServiceType = "sell" | "rent"; // Продажа или аренда ========= [buy switched to sell] ==========
export type HouseConditionType = "perfect" | "good" | "bad" | "free" | "build"; // Хорошее, среднее, требует ремонта, свободная планировка, черновая отделка
export type VisibilityStatusType = "active" | "sold" | "canceled" | "checking"; // Активен, Продан, Отменен, На проверке, на клиенте показываем только Активные
export type HouseType = "part" | "full" | "cottage"; // Часть дома, Целый дом, Дача
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

export interface EstateAgentInfo {
  id: string; // uuid?
  name: string;
  avatar: string;
  phone: string;
}

export interface GeoPositionInfo {
  city: string; // Город
  street: string; // Улица
  houseNumber: number; // Номер дома
  isInfoHidden: boolean; // Свитчер для сокрытия адреса
  mapLink: string; // Ссылка на 2гис
}

// Общие характеристики, вне зависимости от категории объекта
export interface ObjectItem {
  description: string; // Текстовое описание объекта недвижимости ========= [REQUIRED] ==========
  price: number; // or string? Стоимость ========= [REQUIRED] ==========
  discount: number; // or string? Размер снижения стоимость(скидки)
  images: string[]; // Пачка фотографий объекта недвижимости ========= [REQUIRED] ==========
  videoLink: string; // Ссылка на видео обзор
  mortgage: boolean; // Имеется ли ипотека по данному объекту
  hasSwap: boolean; // Есть обмен да/нет
  isCommercial: boolean; // Коммерческая недвижимости или нет
  isPledge: boolean; // В залоге да или нет
  isDocumentsGood: boolean; // Документы в порядке или нет
  type: ServiceType; // Продать или сдать в аренду ========= [DEFAULT - sell] ========== ========= [REQUIRED] ==========
  visibilityStatus: VisibilityStatusType; // Статус видимости объекта ========= [DEFAULT - checking] ========== ========= [REQUIRED] ==========
  category: CategoryType; // Квартира, дом, земельный участок и так далее ========= [REQUIRED] ==========
  estateAgent: EstateAgentInfo; // Данные об агенте недвижимости, который сопровождает этот объект, к нему будут все звонить писать и задавать вопросы ========= [REQUIRED] ==========
  geoPosition: GeoPositionInfo; // Данные об объекте недвижимости, где она ========= [REQUIRED] ==========
}

// Общие характеристики, которые могут быть в квартире/доме
export interface Apartment extends ObjectItem {
  roomCount: number; // Количество комнат
  houseBuildingYear: number; // Год постройки
  houseSquare: number; // Площадь общая ========= [REQUIRED] ==========
  kitchenSquare: number; // Площадь кухни
  countFloor: number; // Количество этажей в квартире/доме (бывают двухэтажные квартиры, трех этажные котеджи и т.д.)
  ceilingHeight: number; // Высота потолков
  toiletCount: number; // Количество сан.узлов
  houseCondition: HouseConditionType; // Состояние дома
  houseWallMaterial: HouseWallMaterialType; // Материал стен
  houseRoofMaterial: HouseRoofMaterialType; // Материал крыши
  furniture: FurnitureType; // Мебелирован ли?
  ethernet: EthernetType; // Интернет
}

// Только в доме
export interface House extends Apartment {
  plotSquare: number; // Площадь/количество соток земли у дома
  hasBasement: boolean; // Есть/нет цокольный этаж
  hasMansard: boolean; // Есть/нет мансарда
  houseType: HouseType; // Тип дома, бывает что в одном доме два хозяина, поделен по-полам;
  electricType: ElectricType;
  heatingType: HeatingType;
  gasType: GasType;
  sewerType: SewerType;
  toiletType: ToiletType;
  waterType: WaterType;
}
// Только в квартире
export interface Flat extends Apartment {
  targetFloor: number; // Этаж, на котором находится объект
  totalFloor: number; // Общее количество этажей в здании
}

// Только в земельном участке
export interface Land extends ObjectItem {
  landSquare: string; // Площадь земли
}

// Можно сделать такие категории, но конкретных характеристик для них не будет
export interface Commercial extends ObjectItem {}
export interface Business extends ObjectItem {}
export interface Factory extends ObjectItem {}
export interface OtherObject extends ObjectItem {}

// temp data for tests
export const houses = [
  {
    description: "Просторный дом с большим садом",
    price: 500000,
    discount: 0,
    images: ["image1.jpg", "image2.jpg"],
    videoLink: "http://example.com/video",
    mortgage: false,
    hasSwap: true,
    isCommercial: false,
    isPledge: false,
    isDocumentsGood: true,
    type: "buy",
    visibilityStatus: "active",
    category: "house",
    estateAgent: {
      id: "agent1",
      name: "Иван Иванов",
      avatar: "avatar1.jpg",
      phone: "+71234567890",
    },
    geoPosition: {
      city: "Караганда",
      street: "Ленина",
      houseNumber: 10,
      isInfoHidden: false,
      mapLink: "http://example.com/map",
    },
    roomCount: 5,
    houseBuildingYear: 2000,
    houseSquare: 300,
    kitchenSquare: 50,
    countFloor: 2,
    ceilingHeight: 3,
    toiletCount: 2,
    houseCondition: "good",
    houseWallMaterial: "brick",
    houseRoofMaterial: "tile",
    furniture: "full",
    ethernet: "connected",
    plotSquare: 20,
    hasBasement: true,
    hasMansard: false,
    houseType: "full",
    electricType: "full",
    heatingType: "gas",
    gasType: "central",
    sewerType: "central",
    toiletType: "in",
    waterType: "central",
  },
  {
    description: "Уютный деревянный домик в лесу",
    price: 250000,
    discount: 15000,
    images: ["image3.jpg", "image4.jpg"],
    videoLink: "http://example.com/video2",
    mortgage: true,
    hasSwap: false,
    isCommercial: false,
    isPledge: true,
    isDocumentsGood: false,
    type: "rent",
    visibilityStatus: "active",
    category: "house",
    estateAgent: {
      id: "agent2",
      name: "Мария Петрова",
      avatar: "avatar2.jpg",
      phone: "+79876543210",
    },
    geoPosition: {
      city: "Караганда",
      street: "Сосновая",
      houseNumber: 5,
      isInfoHidden: true,
      mapLink: "http://example.com/map2",
    },
    roomCount: 3,
    houseBuildingYear: 2010,
    houseSquare: 120,
    kitchenSquare: 20,
    countFloor: 1,
    ceilingHeight: 2.5,
    toiletCount: 1,
    houseCondition: "perfect",
    houseWallMaterial: "wood",
    houseRoofMaterial: "soft",
    furniture: "part",
    ethernet: "toConnect",
    plotSquare: 15,
    hasBasement: false,
    hasMansard: true,
    houseType: "cottage",
    electricType: "part",
    heatingType: "solid",
    gasType: "canConnect",
    sewerType: "septik",
    toiletType: "out",
    waterType: "borehole",
  },
  {
    description: "Современный коттедж с видом на озеро",
    price: 750000,
    discount: 50000,
    images: ["image5.jpg", "image6.jpg"],
    videoLink: "http://example.com/video3",
    mortgage: false,
    hasSwap: true,
    isCommercial: true,
    isPledge: false,
    isDocumentsGood: true,
    type: "buy",
    visibilityStatus: "sold",
    category: "house",
    estateAgent: {
      id: "agent3",
      name: "Алексей Смирнов",
      avatar: "avatar3.jpg",
      phone: "+71231231212",
    },
    geoPosition: {
      city: "Караганда",
      street: "Озерная",
      houseNumber: 8,
      isInfoHidden: false,
      mapLink: "http://example.com/map3",
    },
    roomCount: 6,
    houseBuildingYear: 2015,
    houseSquare: 350,
    kitchenSquare: 60,
    countFloor: 2,
    ceilingHeight: 3.2,
    toiletCount: 3,
    houseCondition: "good",
    houseWallMaterial: "brick",
    houseRoofMaterial: "metal",
    furniture: "none",
    ethernet: "connected",
    plotSquare: 30,
    hasBasement: true,
    hasMansard: false,
    houseType: "full",
    electricType: "full",
    heatingType: "gas",
    gasType: "auto",
    sewerType: "central",
    toiletType: "in",
    waterType: "central",
  },
  {
    description: "Дача с большим садом и огородом",
    price: 100000,
    discount: 5000,
    images: ["image7.jpg", "image8.jpg"],
    videoLink: "http://example.com/video4",
    mortgage: true,
    hasSwap: false,
    isCommercial: false,
    isPledge: true,
    isDocumentsGood: false,
    type: "rent",
    visibilityStatus: "active",
    category: "house",
    estateAgent: {
      id: "agent4",
      name: "Елена Васильева",
      avatar: "avatar4.jpg",
      phone: "+71234567891",
    },
    geoPosition: {
      city: "Караганда",
      street: "Заречная",
      houseNumber: 12,
      isInfoHidden: true,
      mapLink: "http://example.com/map4",
    },
    roomCount: 2,
    houseBuildingYear: 1990,
    houseSquare: 70,
    kitchenSquare: 10,
    countFloor: 1,
    ceilingHeight: 2.2,
    toiletCount: 1,
    houseCondition: "bad",
    houseWallMaterial: "wood",
    houseRoofMaterial: "slate",
    furniture: "none",
    ethernet: "none",
    plotSquare: 25,
    hasBasement: false,
    hasMansard: true,
    houseType: "cottage",
    electricType: "none",
    heatingType: "solid",
    gasType: "none",
    sewerType: "canConnect",
    toiletType: "out",
    waterType: "borehole",
  },
  {
    description: "Двухэтажный дом в пригороде",
    price: 400000,
    discount: 20000,
    images: ["image9.jpg", "image10.jpg"],
    videoLink: "http://example.com/video5",
    mortgage: false,
    hasSwap: true,
    isCommercial: false,
    isPledge: false,
    isDocumentsGood: true,
    type: "buy",
    visibilityStatus: "checking",
    category: "house",
    estateAgent: {
      id: "agent5",
      name: "Дмитрий Кузнецов",
      avatar: "avatar5.jpg",
      phone: "+79876543211",
    },
    geoPosition: {
      city: "Караганда",
      street: "Лесная",
      houseNumber: 20,
      isInfoHidden: false,
      mapLink: "http://example.com/map5",
    },
    roomCount: 4,
    houseBuildingYear: 2005,
    houseSquare: 200,
    kitchenSquare: 40,
    countFloor: 2,
    ceilingHeight: 2.8,
    toiletCount: 2,
    houseCondition: "perfect",
    houseWallMaterial: "gasConcreteBlock",
    houseRoofMaterial: "metalTile",
    furniture: "part",
    ethernet: "toConnect",
    plotSquare: 18,
    hasBasement: true,
    hasMansard: false,
    houseType: "full",
    electricType: "part",
    heatingType: "central",
    gasType: "central",
    sewerType: "septik",
    toiletType: "in",
    waterType: "central",
  },
];

export const flats = [
  {
    description: "Светлая квартира в центре города",
    price: 300000,
    discount: 10000,
    images: ["flat1.jpg", "flat2.jpg"],
    videoLink: "http://example.com/flatvideo1",
    mortgage: true,
    hasSwap: false,
    isCommercial: false,
    isPledge: false,
    isDocumentsGood: true,
    type: "buy",
    visibilityStatus: "active",
    category: "apartment",
    estateAgent: {
      id: "agent1",
      name: "Анна Иванова",
      avatar: "avatar1.jpg",
      phone: "+71234567890",
    },
    geoPosition: {
      city: "Караганда",
      street: "Тверская",
      houseNumber: 15,
      isInfoHidden: false,
      mapLink: "http://example.com/map1",
    },
    roomCount: 2,
    houseBuildingYear: 1995,
    houseSquare: 60,
    kitchenSquare: 10,
    countFloor: 1,
    ceilingHeight: 2.7,
    toiletCount: 1,
    houseCondition: "good",
    houseWallMaterial: "brick",
    houseRoofMaterial: "tile",
    furniture: "full",
    ethernet: "connected",
    targetFloor: 3,
    totalFloor: 5,
  },
  {
    description: "Уютная квартира в спальном районе",
    price: 200000,
    discount: 5000,
    images: ["flat3.jpg", "flat4.jpg"],
    videoLink: "http://example.com/flatvideo2",
    mortgage: false,
    hasSwap: true,
    isCommercial: false,
    isPledge: true,
    isDocumentsGood: false,
    type: "rent",
    visibilityStatus: "active",
    category: "apartment",
    estateAgent: {
      id: "agent2",
      name: "Петр Смирнов",
      avatar: "avatar2.jpg",
      phone: "+79876543210",
    },
    geoPosition: {
      city: "Караганда",
      street: "Ленинградская",
      houseNumber: 22,
      isInfoHidden: true,
      mapLink: "http://example.com/map2",
    },
    roomCount: 1,
    houseBuildingYear: 2005,
    houseSquare: 45,
    kitchenSquare: 8,
    countFloor: 1,
    ceilingHeight: 2.5,
    toiletCount: 1,
    houseCondition: "perfect",
    houseWallMaterial: "panel",
    houseRoofMaterial: "soft",
    furniture: "part",
    ethernet: "toConnect",
    targetFloor: 6,
    totalFloor: 9,
  },
  {
    description: "Просторная квартира с панорамными окнами",
    price: 450000,
    discount: 15000,
    images: ["flat5.jpg", "flat6.jpg"],
    videoLink: "http://example.com/flatvideo3",
    mortgage: true,
    hasSwap: false,
    isCommercial: true,
    isPledge: false,
    isDocumentsGood: true,
    type: "buy",
    visibilityStatus: "active",
    category: "apartment",
    estateAgent: {
      id: "agent3",
      name: "Ольга Кузнецова",
      avatar: "avatar3.jpg",
      phone: "+71231231212",
    },
    geoPosition: {
      city: "Караганда",
      street: "Мира",
      houseNumber: 8,
      isInfoHidden: false,
      mapLink: "http://example.com/map3",
    },
    roomCount: 3,
    houseBuildingYear: 2010,
    houseSquare: 90,
    kitchenSquare: 12,
    countFloor: 1,
    ceilingHeight: 2.8,
    toiletCount: 2,
    houseCondition: "good",
    houseWallMaterial: "brick",
    houseRoofMaterial: "metal",
    furniture: "none",
    ethernet: "connected",
    targetFloor: 5,
    totalFloor: 10,
  },
  {
    description: "Квартира-студия в новостройке",
    price: 150000,
    discount: 0,
    images: ["flat7.jpg", "flat8.jpg"],
    videoLink: "http://example.com/flatvideo4",
    mortgage: false,
    hasSwap: true,
    isCommercial: false,
    isPledge: true,
    isDocumentsGood: false,
    type: "rent",
    visibilityStatus: "active",
    category: "apartment",
    estateAgent: {
      id: "agent4",
      name: "Дмитрий Андреев",
      avatar: "avatar4.jpg",
      phone: "+71234567891",
    },
    geoPosition: {
      city: "Караганда",
      street: "Гагарина",
      houseNumber: 20,
      isInfoHidden: true,
      mapLink: "http://example.com/map4",
    },
    roomCount: 1,
    houseBuildingYear: 2018,
    houseSquare: 30,
    kitchenSquare: 5,
    countFloor: 1,
    ceilingHeight: 2.5,
    toiletCount: 1,
    houseCondition: "perfect",
    houseWallMaterial: "panel",
    houseRoofMaterial: "soft",
    furniture: "full",
    ethernet: "none",
    targetFloor: 2,
    totalFloor: 15,
  },
  {
    description: "Двухкомнатная квартира в историческом центре",
    price: 350000,
    discount: 20000,
    images: ["flat9.jpg", "flat10.jpg"],
    videoLink: "http://example.com/flatvideo5",
    mortgage: true,
    hasSwap: false,
    isCommercial: false,
    isPledge: false,
    isDocumentsGood: true,
    type: "buy",
    visibilityStatus: "checking",
    category: "apartment",
    estateAgent: {
      id: "agent5",
      name: "Екатерина Волкова",
      avatar: "avatar5.jpg",
      phone: "+79876543211",
    },
    geoPosition: {
      city: "Караганда",
      street: "Карла Маркса",
      houseNumber: 33,
      isInfoHidden: false,
      mapLink: "http://example.com/map5",
    },
    roomCount: 2,
    houseBuildingYear: 1950,
    houseSquare: 70,
    kitchenSquare: 10,
    countFloor: 1,
    ceilingHeight: 3.0,
    toiletCount: 1,
    houseCondition: "good",
    houseWallMaterial: "brick",
    houseRoofMaterial: "tile",
    furniture: "part",
    ethernet: "toConnect",
    targetFloor: 4,
    totalFloor: 6,
  },
];
