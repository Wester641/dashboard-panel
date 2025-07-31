import styles from "./RevenueByCategory.module.scss";
import Icon from "../../../assets/Iconsax.svg";
import VectorDown from "../../../assets/VectorDown.svg";
// import VectorUp from "../../../assets/VectorUp.svg";

type RevenueByCategoryProps = {
  data: {
    category: string;
    revenue: string;
    icon: string;
    percentage: string;
  }[];
};

function RevenueByCategory({ data }: RevenueByCategoryProps) {
  return (
    <div className={styles.revenueByCategory}>
      {data.map((item, index) => (
        <div className={styles.revenueByCategoryContent} key={index}>
          <div className={styles.revenueByCategoryContentValue}>
            <p className={styles.revenueByCategoryContentValueTitle}>
              {item.category}
            </p>
            <p className={styles.revenueByCategoryContentValueTitle}>
              {item.revenue}
            </p>
          </div>
          <div className={styles.revenueByCategoryContentValue}>
            <p className={styles.revenueByCategoryContentValueText}>
              <img src={Icon} alt="icon" />
            </p>
            <p className={styles.revenueByCategoryContentValueText}>
              <span
                className={
                  item.icon === VectorDown ? styles.error : styles.success
                }
              >
                {item.percentage}
              </span>
              <img
                className={styles.revenueByCategoryContentValueTextIcon}
                src={item.icon || VectorDown}
                alt={item.icon || ""}
              />
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RevenueByCategory;
