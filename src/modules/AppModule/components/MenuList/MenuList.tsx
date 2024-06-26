import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import { IconButton } from "@mui/material";
import { LuLampFloor } from "react-icons/lu";
import { IoIosSearch } from "react-icons/io";
import { BsTelephone } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { AiOutlineDollar } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";

interface LinkObject {
  title: string;
  to: string;
  icon?: React.ReactNode;
}

const iconColor = "hsla(32, 100%, 55%, 1)";
const links: LinkObject[] = [
  {
    title: "Квартиры",
    to: "/catalog?category=apartment",
    icon: <LuLampFloor color={iconColor} />,
  },
  {
    title: "Дома",
    to: "/catalog?category=house",
    icon: <IoHomeOutline color={iconColor} />,
  },
  {
    title: "Коммерческая недвижимость",
    to: "/catalog?category=business",
    icon: <AiOutlineDollar color={iconColor} />,
  },
  {
    title: "Каталог",
    to: "/catalog?category=apartment",
    icon: <IoIosSearch color={iconColor} />,
  },
  {
    title: "Контакты",
    to: "/contacts",
    icon: <BsTelephone color={iconColor} />,
  },
  {
    title: "О нас",
    to: "/about",
    icon: <FaRegHeart color={iconColor} />,
  },
  {
    title: "Помощь",
    to: "/help",
    icon: <IoIosHelpCircleOutline color={iconColor} />,
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
          sx={
            isVertical
              ? { marginBottom: 0.75, width: 1 }
              : { marginRight: 2, width: "fit-content" }
          }
        >
          <Box
            component={Link}
            to={link.to}
            className="text-callout-regular"
            sx={{
              width: 1,
              display: "inline-block",
              color: "customColors.labelsPrimary",
              "&:hover": {
                color: "customColors.colorsOrange",
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
