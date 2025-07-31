import { LineChart } from "@mui/x-charts/LineChart";
import styles from "./RevenueGraph.module.scss";
const revenueData = [
  { month: "Jan", revenue: 1200 },
  { month: "Feb", revenue: 1350 },
  { month: "Mar", revenue: 1100 },
  { month: "Apr", revenue: 900 },
  { month: "May", revenue: 1300 },
  { month: "Jun", revenue: 1100 },
  { month: "Jul", revenue: 1200 },
  { month: "Aug", revenue: 1800 },
  { month: "Sep", revenue: 1900 },
  { month: "Oct", revenue: 2000 },
  { month: "Nov", revenue: 2100 },
  { month: "Dec", revenue: 2200 },
];
const months = revenueData.map((item) => item.month);
const revenues = revenueData.map((item) => item.revenue);

export default function RevenueGraph() {
  return (
    <div className={styles.revenueGraph}>
      <LineChart
        xAxis={[{ data: months, scaleType: "band" }]}
        series={[
          {
            data: revenues,
            area: true,
            color: "#f48031",
            label: "Revenue (2024)",
          },
        ]}
        height={300}
      />
    </div>
  );
}
