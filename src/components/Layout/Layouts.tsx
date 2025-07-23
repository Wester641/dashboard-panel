import { Outlet } from "react-router-dom";
import { Grid } from "@mui/material";
import styles from "./Layout.module.scss";
import SideBarMenu from "../SideBarMenu/SideBarMenu";

export default function Layout() {
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, md: 3 }} className={styles.gridItem}>
        <SideBarMenu />
      </Grid>

      <Grid size={{ xs: 12, md: 9 }} className={styles.gridItem}>
        <Outlet />
      </Grid>
    </Grid>
  );
}
