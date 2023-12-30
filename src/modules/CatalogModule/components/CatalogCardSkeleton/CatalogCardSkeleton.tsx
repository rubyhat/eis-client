import { Box, Skeleton } from "@mui/material";
import React from "react";

export const CatalogCardSkeleton = () => {
  return (
    <Box>
      <Skeleton
        variant="rectangular"
        sx={{ marginBottom: 1, borderRadius: 2 }}
        width={276}
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
