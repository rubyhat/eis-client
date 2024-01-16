import React from "react";
import { Box, Typography } from "@mui/material";
import { ObjectItem } from "../../store/useCatalogStore";
import { Link } from "react-router-dom";
import { PriceBlock } from "../../../../components/PriceBlock/PriceBlock";

interface CatalogCardProps {
  item: ObjectItem;
}
export const CatalogCard = ({ item }: CatalogCardProps) => {
  return (
    <Box
      component={Link}
      to="/catalog/uuid-1234567890-uiid"
      color="customColors.labelsPrimary"
    >
      <Box
        component="img"
        src={
          item.images
            ? item.images[0]
            : "/static/images/about/img-about-house.svg"
        }
        alt="Фото квартиры"
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
          color="customColors.labelsSecondary"
        >
          1-комн. кв. · 30 м² · 5/5 этаж
        </Typography>
        <Typography
          component="p"
          variant="textFootnoteRegular"
          color="customColors.labelsSecondary"
        >
          Нуркена Абдирова, 123\4а
        </Typography>
      </Box>
    </Box>
  );
};
