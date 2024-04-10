import React from "react";
import { Box, Typography } from "@mui/material";
import { CustomButton } from "../../../../components/CustomButton";
import { useScreenSize } from "../../../../hooks/useScreenSize";
import { useNavigate } from "react-router-dom";
import { useAnalytics } from "../../../../hooks/useAnalytics";

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
  const { trackEvent } = useAnalytics();
  const { isMobile } = useScreenSize();
  const navigate = useNavigate();

  const handleClickButton = () => {
    trackEvent({
      category: "HomePage",
      action: "Click On Category Card",
      label: `Click on Show All`,
    });
    navigate("/catalog");
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
      height={isMobile ? "inherit" : "200px"}
    >
      <Typography
        variant="textBodyRegular"
        textAlign="center"
        component="p"
        marginBottom={1}
      >
        Перейдите в Каталог, чтобы найти все актуальные объекты недвижимости
      </Typography>
      <CustomButton fullWidth size="large" onClick={handleClickButton}>
        Посмотреть все
      </CustomButton>
    </Box>
  );

  return (
    <Box
      sx={{
        border: "1px solid var(--labels-quaternary)",
        borderRadius: 2,
        padding: "14px",
      }}
    >
      <Typography component="h3" variant="titleThirdEmphasized">
        Каталог
      </Typography>
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
            <Typography variant="textCalloutRegular" component="p">
              {count} {title}
            </Typography>
          </Box>
        ))}
        <CustomButton fullWidth sx={{ marginTop: 1 }}>
          Посмотреть все
        </CustomButton>
      </Box>
    </Box>
  );
};
