import RevenueByCategory from "../../components/Revenues/RevenueByCategory/RevenueByCategory";
import styles from "./Overview.module.scss";
import VectorDown from "../../assets/VectorDown.svg";
import VectorUp from "../../assets/VectorUp.svg";
import { Container } from "@mui/material";

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
    </Container>
  );
}

export default Overview;
