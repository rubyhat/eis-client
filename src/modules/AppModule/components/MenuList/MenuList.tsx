import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import { IconButton } from "@mui/material";
import { LuLampFloor } from "react-icons/lu";
import { IoIosSearch } from "react-icons/io";
import { BsTelephone } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { AiOutlineDollar } from "react-icons/ai";

interface LinkObject {
  title: string;
  to: string;
  icon?: React.ReactNode;
}

const links: LinkObject[] = [
  {
    title: "Квартиры",
    to: "/catalog?category=apartment",
    icon: <LuLampFloor color="#007aff" />,
  },
  {
    title: "Дома",
    to: "/catalog?category=house",
    icon: <IoHomeOutline color="#007aff" />,
  },
  {
    title: "Коммерческая недвижимость",
    to: "/catalog?category=business",
    icon: <AiOutlineDollar color="#007aff" />,
  },
  {
    title: "Каталог",
    to: "/catalog?category=apartment",
    icon: <IoIosSearch color="#007aff" />,
  },
  { title: "Контакты", to: "/contacts", icon: <BsTelephone color="#007aff" /> },
  {
    title: "Помощь",
    to: "/help",
    icon: <IoIosHelpCircleOutline color="#007aff" />,
  },
];

interface MenuListProps {
  showIcon?: boolean;
  isVertical?: boolean;
}

export const MenuList = ({ isVertical, showIcon = false }: MenuListProps) => {
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
            {showIcon && <IconButton>{link.icon}</IconButton>}
            {link.title}
          </Box>
        </Box>
      ))}
    </Box>
  );
};
