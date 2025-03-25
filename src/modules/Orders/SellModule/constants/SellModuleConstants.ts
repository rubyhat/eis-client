export const basicTriggerList = [
  "roomCount",
  "houseSquare",
  "ceilingHeight",
  "houseBuildingYear",
  "documents",
  "pledge",
  "houseCondition",
  "houseWallMaterial",
  "houseRoofMaterial",
  "furniture",
  "ethernet",
  "garage",
  "toiletCount",
];

export const housePropertiesTriggerList = [
  "houseType",
  "electricType",
  "heatingType",
  "gasType",
  "sewerType",
  "toiletType",
  "waterType",
];

export const livingSpaces = [
  "apartment",
  "house",
  "townhouse",
  "cottage",
  "business",
];
export const spacesWithLand = [
  "house",
  "townhouse",
  "cottage",
  "business",
  "land",
];

export const arrsForKitchen = ["apartment", "house", "townhouse"];
export const arrsForTotalFloor = ["apartment", "house", "townhouse"];
export const arrsForLand = ["house", "cottage", "land"];
export const arrsForHouseProperties = ["house", "cottage", "townhouse"];

export const agreementLinks: { label: string; link: string }[] = [
  {
    label: "Продажа недвижимости (Город)",
    link: "/static/docs/Продажа_недвижимости.pdf",
  },
  {
    label: "Продажа недвижимости (Районы)",
    link: "/static/docs/Продажа_недвижимости_районы.pdf",
  },
  {
    label: "Продажа коммерции",
    link: "/static/docs/Продажа_коммерческой_недвижимости.pdf",
  },
  {
    label: "Аренда недвижимости",
    link: "/static/docs/Сдача_недвижимости_в_аренду.pdf",
  },
];
