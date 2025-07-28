import { Link } from "react-router-dom";
import ProductsCard from "../../components/ProductsCard/ProductsCard";
import { Button, Grid } from "@mui/material";

import styles from "./Products.module.scss";
import { useProducts } from "../../hooks/useProducts";

function Products() {
  const { data, isLoading, error } = useProducts();

  if (isLoading) {
    console.log("Loading");

    if (error) {
      console.log("Error");
    }
  }

  return (
    <div>
      <Grid container spacing={2}>
        <Grid className={styles.gridItem} size={{ xs: 12, md: 9 }}>
          asd
        </Grid>
        <Grid className={styles.gridItem} size={{ xs: 12, md: 3 }}>
          <Link to="/products/add">
            <Button variant="contained">Add Product</Button>
          </Link>
        </Grid>
      </Grid>
      <ProductsCard error={error} loading={isLoading} products={data} />
    </div>
  );
}

export default Products;
