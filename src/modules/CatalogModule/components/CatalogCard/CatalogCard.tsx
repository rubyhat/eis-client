import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import { DisplayEstateObject } from "../../store/useCatalogStore";
import { PriceBlock } from "../../../../components/PriceBlock/PriceBlock";
import { useFormatDate } from "../../../../shared/hooks/useFormatDate";
import { CustomHr } from "../../../../components/CustomHr";
import { useAnalytics } from "../../../../hooks/useAnalytics";
import { estateObjectDictionary } from "../../../../shared/dictionaries/EstateObjectDictionary";

interface CatalogCardProps {
  item: DisplayEstateObject;
}

export const CatalogCard = ({ item }: CatalogCardProps) => {
  const { trackEvent } = useAnalytics();
  const livingCategory = [
    "apartment",
    "house",
    "cottage",
    "business",
    "townhouse",
  ];
  const displaySubtitle = `${
    item.roomCount
  }-комн. ${estateObjectDictionary.category[item.category].toLowerCase()} · ${
    item.houseSquare
  } м² ${
    item.targetFloor && item.totalFloor
      ? `· ${item.targetFloor}/${item.totalFloor} этаж`
      : ""
  }`;
  const { dayAndMonth, time } = useFormatDate(item.updatedAt);
  const hideAddressInfo = item.geoPosition.isInfoHidden;

  const handleCardClick = () =>
    trackEvent({
      category: "CatalogPage",
      action: "Click On Card",
    });

  return (
    <Box
      component={Link}
      to={{ pathname: `/catalog/${item._id}` }}
      state={{ estateDetails: item }}
      color="customColors.labelsPrimary"
      sx={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        height: "100%",
      }}
      onClick={handleCardClick}
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
        sx={{
          objectFit: "cover",
          maxHeight: {
            xs: 270,
            sm: 612,
            md: 280,
            lg: 207,
          },
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
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
          variant="textSubheadlineRegular"
          color="customColors.colorsOrange"
          fontWeight={500}
        >
          {livingCategory.includes(item.category) && displaySubtitle}
        </Typography>
        <Typography
          component="p"
          variant="textFootnoteRegular"
          color="customColors.labelsSecondary"
        >
          {hideAddressInfo
            ? `${item.geoPosition.street}`
            : `${item.geoPosition.street}, ${item.geoPosition.houseNumber}`}
        </Typography>
        <Box sx={{ marginTop: "auto" }}>
          <CustomHr sx={{ margin: "8px 0" }} />
          <Typography
            component="p"
            variant="textFootnoteRegular"
            color="customColors.labelsSecondary"
          >
            Обновлено: {dayAndMonth} в {time}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
