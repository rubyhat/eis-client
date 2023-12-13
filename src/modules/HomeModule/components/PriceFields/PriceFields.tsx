import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import { useScreenSize } from "../../../../hooks/useScreenSize";

interface PriceFieldsProps {
  StartPrice: React.ReactNode;
  EndPrice: React.ReactNode;
}

export const PriceFields = (props: PriceFieldsProps) => {
  const { StartPrice, EndPrice } = props;
  const { isMobile, isTablet } = useScreenSize();

  const inputWrapper = {
    width: "100%",
  };

  return (
    <Box display="flex" alignItems="center">
      <Box
        sx={{ ...inputWrapper, marginRight: isMobile || isTablet ? "16px" : 0 }}
      >
        {StartPrice}
      </Box>
      <Typography
        display={isMobile || isTablet ? "none" : "inherit"}
        variant="textCalloutRegular"
        component="p"
        margin="0 8px"
      >
        —
      </Typography>
      <Box sx={inputWrapper}>{EndPrice}</Box>
      <Typography
        display={isMobile || isTablet ? "none" : "inherit"}
        variant="textCalloutRegular"
        component="p"
        marginLeft="8px"
      >
        ₸
      </Typography>
    </Box>
  );
};
