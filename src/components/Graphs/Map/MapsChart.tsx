import Map from "../../../assets/Earth.svg";
import LinearWithValueLabel from "../../LinerProgressBar/LinerProgressBar";
import styles from "./MapChart.module.scss";
function MapsChart() {
  return (
    <div className={styles.mapChart}>
      <div className={styles.mapChartContainer}>
        <img src={Map} alt="map" />
      </div>
      <div className={styles.mapChartContainer}>
        <span>
          OAE
          <LinearWithValueLabel value={90} />
        </span>
        <span>
          Namibia
          <LinearWithValueLabel value={80} />
        </span>
        <span>
          Iran
          <LinearWithValueLabel value={70} />
        </span>
        <span>
          US
          <LinearWithValueLabel value={60} />
        </span>
      </div>
    </div>
  );
}

export default MapsChart;
