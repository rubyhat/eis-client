export const estateObjectDictionary = {
  type: {
    sell: "Продажа",
    rent: "Аренда",
  },
  category: {
    apartment: "Квартира",
    house: "Дом",
    land: "Земельный участок",
    cottage: "Дача",
    business: "Бизнес",
    factory: "Заводы и фабрики",
    townhouse: "Таунхаус",
    other: "Другое",
  },
  houseCondition: {
    perfect: "Хорошее",
    good: "Среднее",
    bad: "Требует ремонта",
    free: "Свободная планировка",
    build: "Черновая отделка",
  },
  houseWallMaterial: {
    brick: "Кирпич",
    wood: "Дерево",
    gasSilicateBlock: "Газосиликатный блок",
    cinderBlock: "Шлакоблок",
    heatBlock: "Теплоблок",
    panel: "Каркасно-щитовой",
    monolith: "Монолит",
    saman: "Саман",
    gasConcreteBlock: "Газобетонный блок",
    foamBlock: "Пеноблок",
  },
  houseRoofMaterial: {
    tile: "Черепица",
    soft: "Мягкая кровля",
    metal: "Металл",
    ondulin: "Ондулин",
    metalTile: "Металлочерепица",
    corrugatedSheetRoof: "Профлист",
    slate: "Шифер",
  },
  furniture: {
    part: "Частично",
    full: "Полностью",
    none: "Без мебели",
  },
  houseType: {
    part: "Целый дом",
    full: "Часть дома",
    other: "Другое",
  },
  electricType: {
    part: "Частичное",
    full: "Есть",
    none: "Нет",
  },
  heatingType: {
    central: "Центральное", // todo: добавить на электричестве
    gas: "На газу",
    solid: "На твердом топливе",
    liquid: "На жидком топливе",
    none: "Нет",
  },
  gasType: {
    central: "Центральный",
    auto: "Автономный",
    canConnect: "Можно подключить",
    none: "Нет",
  },
  sewerType: {
    central: "Центральная",
    septic: "Септик",
    canConnect: "Можно подключить",
    none: "Нет",
  },
  toiletType: {
    in: "Внутри дома",
    out: "Снаружи дома",
    none: "Нет",
  },
  waterType: {
    central: "Центральная",
    borehole: "Скважина",
    canConnect: "Можно подключить",
    none: "Нет",
  },
  ethernet: {
    connected: "Подключен",
    toConnect: "Можно подключить",
    none: "Нет",
  },
  garage: {
    full: "Есть, входит в стоимость",
    part: "Есть, обсуждается отдельно",
    none: "Нет",
  },
  pledge: {
    none: "Нет",
    bank: "Да, у банка",
    police: "Да, арест",
  },
};
