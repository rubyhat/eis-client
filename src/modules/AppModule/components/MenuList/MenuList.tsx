import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import React from "react";

interface LinkObject {
  title: string;
  to: string;
}

const links: LinkObject[] = [
  { title: "Квартиры", to: "/catalog?category=apartment" },
  { title: "Дома", to: "/catalog?category=house" },
  { title: "Коммерческая недвижимость", to: "/catalog?category=business" },
  { title: "Каталог", to: "/catalog?category=apartment" },
  { title: "Контакты", to: "/contacts" },
];

interface MenuListProps {
  isVertical?: boolean;
}

export const MenuList = ({ isVertical }: MenuListProps) => {
  return (
    <Box
      component="ul"
      sx={{
        display: "flex",
        alignItems: isVertical ? "flex-start" : "center",
        flexDirection: isVertical ? "column" : "row",
      }}
    >
      {links.map((link, index) => (
        <Box
          component="li"
          key={index}
          sx={isVertical ? { marginBottom: 0.75 } : { marginRight: 2 }}
        >
          <Box
            component={Link}
            to={link.to}
            className="text-callout-regular"
            sx={{
              color: "customColors.labelsPrimary",
              "&:hover": {
                color: "customColors.colorsBlue",
                transition: "all 333ms ease",
              },
            }}
          >
            {link.title}
          </Box>
        </Box>
      ))}
    </Box>
  );
};
