import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import { FiShare } from "react-icons/fi";
import { useEstateDetailsStore } from "../../store/useEstateDetailsStore";
import { ImageViewerModal } from "../ImageViewerModal/ImageViewerModal";
import { useCopySharingLink } from "../../../../hooks/useCopySharingLink";

// todo: сделать скелетон на изображение, пока оно не загрузилось
export const ImagePreview = () => {
  const { copyLink } = useCopySharingLink();
  const { activeImage, isViewerModalOpen, setIsViewerModalOpen } =
    useEstateDetailsStore((state) => state);
  const handleOpenViewer = () => setIsViewerModalOpen(true);
  const handleSharePage = () => {
    copyLink();
  };
  return (
    <Box
      sx={{
        borderRadius: 2,
        boxShadow:
          "0px 0px 0px 0.5px rgba(0, 0, 0, 0.05), 0px 0.5px 2.5px 0px rgba(0, 0, 0, 0.30)",
      }}
    >
      {isViewerModalOpen && <ImageViewerModal />}
      <Box
        sx={{
          padding: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton onClick={handleOpenViewer}>
            <Box
              component="img"
              src="/static/images/icons/icon-resize.svg"
              alt="resize"
            />
          </IconButton>
          <Typography sx={{ color: "#4d4d4d" }} variant="textBodyEmphasized">
            Фотографии
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton onClick={handleSharePage}>
            <FiShare size={16} />
          </IconButton>
          <Box
            sx={{
              padding: "4px 8px",
              border: "1px solid",
              borderColor: "customColors.labelsQuaternary",
              borderRadius: 2,
              marginLeft: 1,
              cursor: "pointer",
              "&:hover": {
                span: {
                  color: "customColors.labelsPrimary",
                },
              },
            }}
            onClick={handleOpenViewer}
          >
            <Typography
              variant="captionFirstEmphasized"
              color="customColors.labelsSecondary"
              sx={{ transition: "all 333ms ease" }}
            >
              Превью
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box padding="0 4px" display="flex">
        {activeImage ? (
          <Box
            onClick={handleOpenViewer}
            component="img"
            src={activeImage}
            alt="Фото объекта"
            sx={{
              border: "1px solid",
              borderColor: "customColors.labelsSecondary",
              cursor: "pointer",
              borderRadius: 2,
              width: "100%",
              height: "420px",
              objectFit: "cover",
            }}
          />
        ) : (
          <Box
            sx={{ width: 1, padding: 2, opacity: 0.5 }}
            component="img"
            src="/static/images/about/img-about-house.svg"
            alt="photo not found"
          />
        )}
        {/* <Skeleton
            variant="rectangular"
            component="div"
            sx={{
              width: 1,
              height: 304,
              borderRadius: 2,
              margin: 1,
            }}
          /> */}
      </Box>
    </Box>
  );
};
