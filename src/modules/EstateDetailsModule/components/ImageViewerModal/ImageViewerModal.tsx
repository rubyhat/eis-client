import React from "react";
import { Box, SwipeableDrawer, Typography } from "@mui/material";
import { useScreenSize } from "../../../../hooks/useScreenSize";
import { useEstateDetailsStore } from "../../store/useEstateDetailsStore";
import { CustomButton } from "../../../../components/CustomButton";

export const ImageViewerModal = () => {
  const { isViewerModalOpen, activeImage, setIsViewerModalOpen } =
    useEstateDetailsStore((state) => state);
  const { isMobile } = useScreenSize();

  const handleCloseViewer = (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event &&
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }
    setIsViewerModalOpen(false);
  };

  const handleOpenViewer = () => setIsViewerModalOpen(true);

  return (
    <SwipeableDrawer
      anchor={isMobile ? "right" : "top"}
      open={isViewerModalOpen}
      onClose={handleCloseViewer}
      onOpen={handleOpenViewer}
      PaperProps={{
        sx: {
          width: "min-content",
          borderRadius: isMobile ? "8px 8px 0 0" : 4,
          margin: "10% auto",
        },
      }}
    >
      {isMobile ? (
        <Box display="flex" justifyContent="center">
          <Box
            sx={{ padding: "12px 0 4px 0", width: "20%", cursor: "pointer" }}
            onClick={handleCloseViewer}
          >
            <Box
              sx={{
                width: "100%",
                height: 4,
                borderRadius: 4,
                backgroundColor: "customColors.labelsQuaternary",
              }}
            ></Box>
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            padding: 2,
          }}
        >
          <Typography component="h3" variant="titleFirstRegular">
            Просмотр фотографий
          </Typography>
        </Box>
      )}
      <Box sx={{ padding: 2 }}>
        <Box component="img" src={activeImage} sx={{ width: "inherit" }} />
        <Box>
          <CustomButton>{"<"}</CustomButton>
          <CustomButton>{">"}</CustomButton>
        </Box>
      </Box>
    </SwipeableDrawer>
  );
};
