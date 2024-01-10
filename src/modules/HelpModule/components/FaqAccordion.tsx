import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import { MdExpandMore } from "react-icons/md";
import { FaqItem } from "../store";

interface FaqAccordionProps {
  faqItems: FaqItem[];
}

export const FaqAccordion = ({ faqItems }: FaqAccordionProps) => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box>
      {faqItems.map(({ title, subtitle, text }, index) => (
        <Accordion
          key={index}
          expanded={expanded === title}
          onChange={handleChange(title)}
        >
          <AccordionSummary
            expandIcon={<MdExpandMore />}
            aria-controls={title}
            id={title}
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              {title}
            </Typography>
            {subtitle && (
              <Typography color="customColors.labelsSecondary">
                {subtitle}
              </Typography>
            )}
          </AccordionSummary>
          <AccordionDetails>
            <Typography dangerouslySetInnerHTML={{ __html: text }}></Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};
