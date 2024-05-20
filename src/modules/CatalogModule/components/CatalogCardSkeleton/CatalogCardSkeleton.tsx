import React from "react";
import { Box, Skeleton } from "@mui/material";

import { useScreenSize } from "../../../../hooks/useScreenSize";

export const CatalogCardSkeleton = () => {
  const { isDesktop } = useScreenSize();
  return (
    <Box width={1}>
      <Skeleton
        variant="rectangular"
        sx={{ marginBottom: 1, borderRadius: 2 }}
        width={isDesktop ? 276 : "100%"}
        height={204}
      />
      <Skeleton
        variant="rectangular"
        sx={{ marginBottom: 1, borderRadius: 2 }}
        width={276}
        height={32}
      />
      <Skeleton
        variant="rectangular"
        sx={{ marginBottom: 1, borderRadius: 2 }}
        width={100}
        height={32}
      />
      <Skeleton
        variant="rectangular"
        sx={{ marginBottom: 1, borderRadius: 2 }}
        width={276}
        height={32}
      />
      <Skeleton
        variant="rectangular"
        sx={{ marginBottom: 1, borderRadius: 2 }}
        width={200}
        height={32}
      />
    </Box>
  );
};
