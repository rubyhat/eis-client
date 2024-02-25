import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import { DisplayEstateObject } from "../../store/useCatalogStore";
import { PriceBlock } from "../../../../components/PriceBlock/PriceBlock";
import { useFormatDate } from "../../../../shared/hooks/useFormatDate";

interface CatalogCardProps {
  item: DisplayEstateObject;
}

export const CatalogCard = ({ item }: CatalogCardProps) => {
  const livingCategory = ["apartment", "house", "cottage", "business"];
  const displaySubtitle = `${item.roomCount}-комн. · ${item.houseSquare} м² ${
    item.targetFloor && item.totalFloor
      ? `· ${item.targetFloor}/${item.totalFloor} этаж`
      : ""
  }`;
  const { dayAndMonth, time } = useFormatDate(item.updatedAt);

  return (
    <Box
      component={Link}
      to={{ pathname: `/catalog/${item._id}` }}
      state={{ estateDetails: item }}
      color="customColors.labelsPrimary"
    >
      <Box
        component="img"
        src={
          item.images?.length && item.images[0].thumbnailUrl
            ? item.images[0].thumbnailUrl
            : "/static/images/about/img-about-house.svg"
        }
        alt="Фото недвижимости"
        width="100%"
        display="block"
        borderRadius="8px 8px 0 0"
      />
      <Box
        sx={{
          padding: 1.5,
          borderLeft: "1px solid",
          borderBottom: "1px solid",
          borderRight: "1px solid",
          borderColor: "customColors.labelsQuaternary",
          borderRadius: "0 0 8px 8px",
        }}
      >
        <PriceBlock
          price={item.price}
          discount={item.discount}
          displayTag={Boolean(item.discount)}
          displayDiscount={Boolean(item.discount)}
        />
        <Typography
          component="p"
          variant="textFootnoteRegular"
          color="customColors.colorsBlue"
        >
          {livingCategory.includes(item.category) && displaySubtitle}
        </Typography>
        <Typography
          component="p"
          variant="textFootnoteRegular"
          color="customColors.labelsSecondary"
        >
          {item.geoPosition.street}, {item.geoPosition.houseNumber}
        </Typography>
        <Box
          sx={{
            width: "100%",
            height: "1px",
            borderRadius: 2,
            backgroundColor: "customColors.labelsQuaternary",
            margin: "8px 0",
          }}
        />
        <Typography
          component="p"
          variant="textFootnoteRegular"
          color="customColors.labelsSecondary"
        >
          Обновлено: {dayAndMonth} в {time}
        </Typography>
      </Box>
    </Box>
  );
};
