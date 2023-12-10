import { Box, Typography } from "@mui/material";
import React from "react";
import { CustomButton } from "../../../../components/CustomButton";

const catalogList = [
  {
    count: 38,
    title: "квартир",
  },
  {
    count: 24,
    title: "частных домов",
  },
  {
    count: 12,
    title: "земельных участков",
  },
  {
    count: 7,
    title: "коммерческой недвижимости",
  },
];

export const CatalogCardExtended = () => {
  return (
    <Box
      sx={{
        border: "1px solid var(--labels-quaternary)",
        borderRadius: 2,
        padding: 2,
      }}
    >
      <Typography>Каталог</Typography>
      <Box component="ul">
        {catalogList.map(({ count, title }, i) => (
          <Box display="flex" alignItems="center" component="li" key={i}>
            <Box
              sx={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "var(--colors-green)",
                marginRight: 0.75,
              }}
            ></Box>
            {count} {title}
          </Box>
        ))}
        <CustomButton fullWidth sx={{ marginTop: 1 }}>
          Посмотреть все
        </CustomButton>
      </Box>
    </Box>
  );
};
