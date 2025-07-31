import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import { laptopBrands, valueFormatter } from "./webUsageStats";
import styles from "./PieArcLabel.module.scss";

export default function PieArcLabel() {
  return (
    <div className={styles.pieArcLabel}>
      <PieChart
        series={[
          {
            arcLabel: (item) => `${item.value}%`,
            arcLabelMinAngle: 35,
            arcLabelRadius: "60%",
            ...data,
          },
        ]}
        sx={{
          [`& .${pieArcLabelClasses.root}`]: {
            fontWeight: "bold",
          },
        }}
        {...size}
      />
    </div>
  );
}

const size = {
  width: 200,
  height: 200,
};

const data = {
  data: laptopBrands,
  valueFormatter,
};
