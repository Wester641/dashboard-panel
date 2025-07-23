import { Link, NavLink } from "react-router-dom";
import styles from "./SideBarMenu.module.scss";
import logo from "../../assets/logo.png";
import GridViewIcon from "@mui/icons-material/GridView";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import FilterNoneOutlinedIcon from "@mui/icons-material/FilterNoneOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

const menuItems = [
  {
    name: "Overview",
    path: "/",
    icon: <GridViewIcon />,
  },
  {
    name: "Orders",
    path: "/orders",
    icon: <ShoppingBasketOutlinedIcon />,
  },
  {
    name: "Products",
    path: "/products",
    icon: <FilterNoneOutlinedIcon />,
  },
  {
    name: "Help Center",
    path: "/help-center",
    icon: <InfoOutlinedIcon />,
  },
  {
    name: "Setting",
    path: "/setting",
    icon: <SettingsOutlinedIcon />,
  },
  {
    name: "Logout",
    path: "/logout",
    icon: <LogoutOutlinedIcon />,
  },
];

export default function SideBarMenu() {
  return (
    <div className={styles.sideBarMenuWrapper}>
      <Link to="#" className={styles.logo}>
        <img src={logo} alt="logo1" />
      </Link>
      <div className={styles.sideBarMenu}>
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              isActive ? styles.active : styles.sideBarMenuItem
            }
          >
            <div className={styles.sideBarMenuItemContent}>
              {item.icon}
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
