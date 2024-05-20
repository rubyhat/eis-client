import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, useTheme } from "@mui/material";

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
  const theme = useTheme();
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
        position: "relative",
      }}
      onClick={handleCardClick}
    >
      <Box
        sx={{
          paddingY: 0.5,
          paddingX: 1.5,
          background: theme.palette.customColors?.gradientPrimary,
          borderRadius: 1.5,
          maxWidth: "fit-content",
          position: "absolute",
          top: "2%",
          left: "2%",
          boxShadow:
            "0px 0px 0px 0.5px rgba(0, 0, 0, 0.05), 0px 0.5px 2.5px 0px rgba(0, 0, 0, 0.30)",
        }}
      >
        <Typography
          variant="textFootnoteEmphasized"
          color="customColors.colorsWhite"
        >
          {item.type === "sell" ? "Продажа" : "Аренда"}
        </Typography>
      </Box>
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
