import { Box, IconButton, Typography } from "@mui/material";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";

interface SocialMediaIconLinksProps {
  showTitle?: boolean;
}

export const SocialMediaIconLinks = (props: SocialMediaIconLinksProps) => {
  const { showTitle = true } = props;
  return (
    <Box>
      {showTitle && (
        <Typography
          component="p"
          variant="textCalloutRegular"
          color="customColors.labelsSecondary"
        >
          Мы в социальных сетях
        </Typography>
      )}
      <IconButton>
        <FaInstagram color="#007aff" />
      </IconButton>
      <IconButton>
        <FaWhatsapp color="#34c759" />
      </IconButton>
    </Box>
  );
};
