import ProductAddForm from "../../../components/AddForms/ProductAddForm";
import styles from "./ProductsAdd.module.scss";

export default function ProductsAdd() {
  return (
    <div className={styles.container}>
      <ProductAddForm />
    </div>
  );
}
