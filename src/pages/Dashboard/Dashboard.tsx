import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import SideBarMenu from "../../components/SideBarMenu/SideBarMenu";
import styles from "./Dashboard.module.scss";

function Dashboard() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid className={styles.gridItem} size={{ xs: 12, md: 3 }}>
          <SideBarMenu />
        </Grid>

        <Grid className={styles.gridItem} size={{ xs: 12, md: 9 }}>
          <Link to="/products">Products</Link>
        </Grid>
      </Grid>
    </div>
  );
}

export default Dashboard;
