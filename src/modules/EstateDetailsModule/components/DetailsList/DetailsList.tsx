import { Box } from "@mui/material";
import React from "react";
import { DetailsListItem } from "../DetailsListItem";
import { DisplayEstateObject } from "../../../CatalogModule/store";
import { estateObjectDictionary } from "../../../../shared/dictionaries/EstateObjectDictionary";

interface DetailsListProps {
  estateDetails: DisplayEstateObject;
}

export const DetailsList = ({ estateDetails }: DetailsListProps) => {
  const squareText = estateDetails.kitchenSquare
    ? `Общая ${estateDetails.houseSquare} м², кухня — ${estateDetails.kitchenSquare} м²`
    : `Общая ${estateDetails.houseSquare} м²`;
  const priceForSquare = Math.round(
    estateDetails.price / estateDetails.houseSquare,
  );
  const addressTitle = `${estateDetails.geoPosition.street}${
    estateDetails.geoPosition.houseNumber
      ? ", " + estateDetails.geoPosition.houseNumber
      : ""
  }`;

  const hideAddressInfo = estateDetails.geoPosition.isInfoHidden;

  return (
    <Box
      component="ul"
      sx={{
        padding: 2,
        borderRadius: 4,
        border: "1px solid",
        borderColor: "customColors.labelsQuaternary",
      }}
    >
      <DetailsListItem
        title={estateObjectDictionary.category[estateDetails.category]}
        label="Категория"
      />
      {estateDetails.isCommercial && (
        <DetailsListItem title="Да" label="Коммерческий объект" />
      )}
      <DetailsListItem
        title={estateObjectDictionary.type[estateDetails.type]}
        label="Тип услуги"
      />
      {estateDetails.houseCondition && (
        <DetailsListItem
          title={
            estateObjectDictionary.houseCondition[estateDetails.houseCondition]
          }
          label="Состояние"
        />
      )}
      {estateDetails.price && (
        <DetailsListItem
          label="Стоимость"
          price={estateDetails.price}
          discount={estateDetails.discount}
        />
      )}
      {priceForSquare && priceForSquare > 0 && (
        <DetailsListItem label="Цена за м²" price={priceForSquare} />
      )}
      <DetailsListItem title={estateDetails.geoPosition.city} label="Город" />
      {estateDetails.geoPosition.cityRegion && (
        <DetailsListItem
          title={estateDetails.geoPosition.cityRegion}
          label="Район"
        />
      )}
      <DetailsListItem
        title={
          hideAddressInfo ? `${estateDetails.geoPosition.street}` : addressTitle
        }
        label="Адрес"
        link={hideAddressInfo ? "" : estateDetails.geoPosition.mapLink}
      />
      {Boolean(estateDetails.roomCount) && (
        <DetailsListItem
          title={String(estateDetails.roomCount)}
          label="Количество комнат"
        />
      )}
      {estateDetails.furniture && (
        <DetailsListItem
          title={estateObjectDictionary.furniture[estateDetails.furniture]}
          label="Мебелирован?"
        />
      )}
      {Boolean(estateDetails.countFloor) && (
        <DetailsListItem
          title={String(estateDetails.countFloor)}
          label="Этажей в квартире/доме"
        />
      )}
      {Boolean(estateDetails.ceilingHeight) && (
        <DetailsListItem
          title={String(estateDetails.ceilingHeight)}
          label="Высота потолков"
        />
      )}
      {Boolean(estateDetails.toiletCount) && (
        <DetailsListItem
          title={String(estateDetails.toiletCount)}
          label="Количество сан. узлов"
        />
      )}
      {estateDetails.houseType && (
        <DetailsListItem
          title={estateObjectDictionary.houseType[estateDetails.houseType]}
          label="Тип дома"
        />
      )}
      {estateDetails.houseWallMaterial && (
        <DetailsListItem
          title={
            estateObjectDictionary.houseWallMaterial[
              estateDetails.houseWallMaterial
            ]
          }
          label="Стены дома"
        />
      )}
      {estateDetails.houseRoofMaterial && (
        <DetailsListItem
          title={
            estateObjectDictionary.houseRoofMaterial[
              estateDetails.houseRoofMaterial
            ]
          }
          label="Крыша дома"
        />
      )}
      {Boolean(estateDetails.houseBuildingYear) && (
        <DetailsListItem
          title={String(estateDetails.houseBuildingYear)}
          label="Год постройки"
        />
      )}
      {Boolean(estateDetails.targetFloor && estateDetails.totalFloor) && (
        <DetailsListItem
          title={`${estateDetails.targetFloor} из ${estateDetails.totalFloor}`}
          label="Этаж"
        />
      )}
      {Boolean(estateDetails.houseSquare) && (
        <DetailsListItem title={squareText} label="Площадь, м²" />
      )}
      {estateDetails.plotSquare && (
        <DetailsListItem
          title={String(estateDetails.plotSquare)}
          label="Площадь земельного участка"
        />
      )}
      {estateDetails.electricType && (
        <DetailsListItem
          title={
            estateObjectDictionary.electricType[estateDetails.electricType]
          }
          label="Электричество"
        />
      )}
      {estateDetails.heatingType && (
        <DetailsListItem
          title={estateObjectDictionary.heatingType[estateDetails.heatingType]}
          label="Отопление"
        />
      )}
      {estateDetails.waterType && (
        <DetailsListItem
          title={estateObjectDictionary.waterType[estateDetails.waterType]}
          label="Вода"
        />
      )}
      {estateDetails.sewerType && (
        <DetailsListItem
          title={estateObjectDictionary.sewerType[estateDetails.sewerType]}
          label="Канализация"
        />
      )}
      {estateDetails.gasType && (
        <DetailsListItem
          title={estateObjectDictionary.gasType[estateDetails.gasType]}
          label="Газ"
        />
      )}
      {estateDetails.toiletType && (
        <DetailsListItem
          title={estateObjectDictionary.toiletType[estateDetails.toiletType]}
          label="Сан. узел"
        />
      )}
      {estateDetails.ethernet && (
        <DetailsListItem
          title={estateObjectDictionary.ethernet[estateDetails.ethernet]}
          label="Интернет"
        />
      )}
      {estateDetails.garage && (
        <DetailsListItem
          title={estateObjectDictionary.garage[estateDetails.garage]}
          label="Гараж"
        />
      )}
      {estateDetails.parkingSeat && (
        <DetailsListItem
          title={String(estateDetails.parkingSeat)}
          label="Парковачных мест"
        />
      )}
      {estateDetails.documents && (
        <DetailsListItem
          title={estateObjectDictionary.documents[estateDetails.documents]}
          label="Документы"
        />
      )}
      {estateDetails.pledge && (
        <DetailsListItem
          title={estateObjectDictionary.pledge[estateDetails.pledge]}
          label="Залог"
        />
      )}
      {estateDetails.mortgage && (
        <DetailsListItem
          title={estateObjectDictionary.mortgage[estateDetails.mortgage]}
          label="Ипотека"
        />
      )}
      {estateDetails.exchange && (
        <DetailsListItem
          title={estateObjectDictionary.exchange[estateDetails.exchange]}
          label="Обмен"
        />
      )}
      {estateDetails.garage && (
        <DetailsListItem
          title={estateObjectDictionary.garage[estateDetails.garage]}
          label="Гараж"
        />
      )}
      {estateDetails.hasBasement && (
        <DetailsListItem title="Есть" label="Цокольный этаж" />
      )}
      {estateDetails.hasMansard && (
        <DetailsListItem title="Есть" label="Мансарда" />
      )}
      {estateDetails.videoLink && (
        <DetailsListItem
          label="Видео обзор"
          videoLink={estateDetails.videoLink}
        />
      )}
    </Box>
  );
};
