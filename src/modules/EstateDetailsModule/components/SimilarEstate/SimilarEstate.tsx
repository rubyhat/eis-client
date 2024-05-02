import React from "react";
import { Box, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

import { apiEstateDetailsModule } from "../../api";
import { SimilarEstateSwiper } from "../SimilarEstateSwiper";

interface SimilarEstateProps {
  params: string;
}
// todo: нужно продакту проработать критерии, по которым показывать "похожие", что делать если похож не нашлось
export const SimilarEstate = ({ params }: SimilarEstateProps) => {
  const {
    data: similarsData,
    // isLoading,
    isSuccess,
  } = useQuery({
    queryFn: () => apiEstateDetailsModule.fetchSimilars(params),
    queryKey: ["similarItems", params],
  });

  if (isSuccess && similarsData.length > 0) {
    return (
      <Box
        className="similars-estate__swiper-wrapper"
        sx={{ padding: "16px 0" }}
      >
        <Typography
          component="h6"
          variant="titleSecondRegular"
          marginBottom={1}
        >
          Похожая недвижимость
        </Typography>
        <SimilarEstateSwiper estateObjects={similarsData} />
      </Box>
    );
  }

  return <></>;
};
