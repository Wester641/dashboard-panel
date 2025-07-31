import { Outlet } from "react-router-dom";
import { Grid } from "@mui/material";
import styles from "./Layout.module.scss";
import SideBarMenu from "../components/SideBarMenu/SideBarMenu";

export default function Layout() {
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, md: 2.5 }} className={styles.gridItem}>
        <SideBarMenu />
      </Grid>

      <Grid size={{ xs: 12, md: 9.5 }} className={styles.gridItem}>
        <Outlet />
      </Grid>
    </Grid>
  );
}
