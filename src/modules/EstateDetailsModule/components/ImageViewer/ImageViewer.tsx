import { Box } from "@mui/material";
import React from "react";
import { ImagePreview } from "../ImagePreview/ImagePreview";
import { ImageThumbs } from "../ImageThumbs/ImageThumbs";
import { FeedbackForm } from "../../../../components/FeedbackForm/FeedbackForm";

export const ImageViewer = () => {
  return (
    <Box>
      <ImagePreview />
      <Box marginTop={1.5}>
        <ImageThumbs />
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "1px",
          borderRadius: 2,
          backgroundColor: "customColors.labelsQuaternary",
          margin: "16px 0",
        }}
      />
      <FeedbackForm />
    </Box>
  );
};
