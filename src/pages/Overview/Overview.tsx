import RevenueByCategory from "../../components/Graphs/RevenueByCategory/RevenueByCategory";
import styles from "./Overview.module.scss";
import VectorDown from "../../assets/VectorDown.svg";
import VectorUp from "../../assets/VectorUp.svg";
import { Container, Grid } from "@mui/material";
import RevenueGraph from "../../components/Graphs/RevenueGraph/RevenueGraph";
import PieArcLabel from "../../components/Graphs/Rev/PieArcLabel";
import MapsChart from "../../components/Graphs/Map/MapsChart";
import TableComponent from "../../components/Table/TableComponent";

const revenueByCategory = [
  {
    category: "Revenue",
    revenue: "$25k",
    icon: VectorDown,
    percentage: "-1.27%",
  },
  {
    category: "Visits",
    revenue: "367k",
    icon: VectorUp,
    percentage: "+9.15%",
  },
  {
    category: "Orders",
    revenue: "67",
    icon: VectorDown,
    percentage: "-2.32%",
  },
  {
    category: "Clients",
    revenue: "12k",
    icon: VectorUp,
    percentage: "+2.75%",
  },
  {
    category: "Products",
    revenue: "100+",
    icon: VectorDown,
    percentage: "-2.32%",
  },
  {
    category: "Active users",
    revenue: "100+",
    icon: VectorUp,
    percentage: "+12.75%",
  },
  {
    category: "Electronics",
    revenue: "12k",
    icon: VectorDown,
    percentage: "-11.37%",
  },
];
function Overview() {
  return (
    <Container maxWidth="xl">
      <RevenueByCategory data={revenueByCategory} />

      <Grid className={styles.gridContainer} container spacing={2}>
        <Grid className={styles.gridItem} size={{ xs: 12, md: 8.5 }}>
          <RevenueGraph />
        </Grid>
        <Grid className={styles.gridItem} size={{ xs: 12, md: 3.5 }}>
          <PieArcLabel />
        </Grid>
      </Grid>
      <Grid className={styles.gridContainer} container spacing={2}>
        <Grid className={styles.gridItem} size={{ xs: 12, md: 8 }}>
          <TableComponent />
        </Grid>
        <Grid className={styles.gridItem} size={{ xs: 12, md: 4 }}>
          <MapsChart />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Overview;
