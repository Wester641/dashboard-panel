import { Link } from "react-router-dom";
import ProductsCard from "../../components/ProductsCard/ProductsCard";
import { Button, Container, Grid } from "@mui/material";
import styles from "./Products.module.scss";
import { useEffect, useState } from "react";
import supabase from "../../supabase/supabase-client";

function Products() {
  const [data, setData] = useState<any>();
  const [error, setError] = useState<any>();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const { data, error } = await supabase.from("products").select("*");
    setData(data);
    setError(error);
  };

  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid className={styles.gridItem} size={{ xs: 12, md: 9 }}>
          <h1>Product list page</h1>
        </Grid>
        <Grid className={styles.gridItem} size={{ xs: 12, md: 3 }}>
          <Link to="/products/add">
            <Button variant="contained">Add Product</Button>
          </Link>
        </Grid>
      </Grid>
      <ProductsCard error={error} products={data} />
    </Container>
  );
}

export default Products;
