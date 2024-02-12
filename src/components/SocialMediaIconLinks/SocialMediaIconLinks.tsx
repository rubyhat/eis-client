import { Box, IconButton, Typography } from "@mui/material";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";

interface SocialMediaIconLinksProps {
  showTitle?: boolean;
  size?: number | string;
}

export const SocialMediaIconLinks = (props: SocialMediaIconLinksProps) => {
  const { showTitle = true, size } = props;
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
      <Box
        component="a"
        href="https://www.instagram.com/roze.nedvizhimost.krg"
        target="_blank"
      >
        <IconButton>
          <FaInstagram color="#007aff" size={size ? size : "1em"} />
        </IconButton>
      </Box>
      <Box
        component="a"
        href="https://api.whatsapp.com/send?phone=77752813783&text=Здравствуйте, я пишу вам с сайта roze.kz."
        target="_blank"
      >
        <IconButton>
          <FaWhatsapp color="#34c759" size={size ? size : "1em"} />
        </IconButton>
      </Box>
    </Box>
  );
};
