import React from "react";
import { Box, Typography } from "@mui/material";
import { TbCurrencyTenge } from "react-icons/tb";
import { usePriceNormalize } from "../../../../hooks/usePriceNormalize";
import { useAnalytics } from "../../../../hooks/useAnalytics";

interface DetailsListItemProps {
  label: string;
  title?: string;
  link?: string;
  videoLink?: string;
  price?: number;
  discount?: number;
}

export const DetailsListItem = (props: DetailsListItemProps) => {
  const { trackEvent } = useAnalytics();
  const { label, title, link, videoLink, price = 0, discount = 0 } = props;
  const { totalPrice, discountPercentage } = usePriceNormalize(price, discount);

  const handleClickShowOnMap = () =>
    trackEvent({
      category: "DetailsPage",
      action: "Click On show on map",
    });

  const handleClickShowInstagramVideo = () =>
    trackEvent({
      category: "DetailsPage",
      action: "Click On show instagram video",
    });

  return (
    <Box
      component="li"
      sx={{
        padding: "8px 0",
        borderBottom: "1px solid",
        borderColor: "customColors.labelsQuaternary",
        "&:last-child": {
          border: "none",
        },
      }}
    >
      <Typography component="p" variant="textBodyRegular">
        {title && title}
        {price > 0 ? (
          <Box
            component="span"
            display="flex"
            alignItems="center"
            flexWrap="wrap"
          >
            {totalPrice} <TbCurrencyTenge />
            {discount > 0 && (
              <>
                <Typography
                  variant="textFootnoteRegular"
                  color="customColors.labelsSecondary"
                  display="flex"
                  alignItems="center"
                  alignSelf="flex-end"
                  marginBottom={0.25}
                  marginLeft={0.5}
                  marginRight={0.5}
                  sx={{ textDecoration: "line-through" }}
                >
                  {price.toLocaleString("ru")} <TbCurrencyTenge size={12} />
                </Typography>
                <Box
                  component="span"
                  sx={{
                    padding: "2px 4px",
                    backgroundColor: "customColors.colorsGreen",
                    color: "customColors.colorsWhite",
                    borderRadius: 1,
                    marginBottom: 0.5,
                    display: "flex",
                    width: "fit-content",
                  }}
                >
                  <Typography variant="textFootnoteRegular">
                    снижение на {discountPercentage}%
                  </Typography>
                </Box>
              </>
            )}
          </Box>
        ) : null}
        {link && (
          <Typography
            component="a"
            variant="textCalloutRegular"
            href={link}
            target="_blank"
            rel="noreferrer"
            color="customColors.colorsOrange"
            sx={{
              textDecoration: "underline",
              marginLeft: 2,
              "&:hover": {
                textDecoration: "none",
              },
            }}
            onClick={handleClickShowOnMap}
          >
            Показать на карте
          </Typography>
        )}
        {videoLink && (
          <Typography
            component="a"
            href={videoLink}
            target="_blank"
            rel="noreferrer"
            color="customColors.colorsOrange"
            sx={{
              textDecoration: "underline",
              "&:hover": {
                textDecoration: "none",
              },
            }}
            onClick={handleClickShowInstagramVideo}
          >
            Открыть видео обзор в Instagram
          </Typography>
        )}
      </Typography>
      <Typography
        component="p"
        variant="textSubheadlineRegular"
        color="customColors.labelsSecondary"
      >
        {label}
      </Typography>
    </Box>
  );
};
