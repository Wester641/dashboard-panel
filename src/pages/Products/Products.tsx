import { Link } from "react-router-dom";
import ProductsCard from "../../components/ProductsCard/ProductsCard";
import { Box, Button, Container, Grid, LinearProgress } from "@mui/material";
import styles from "./Products.module.scss";
import { useProducts } from "../../hooks/useProducts";

function Products() {
  const { data, error, isLoading } = useProducts();

  if (isLoading) {
    return (
      <Box sx={{ width: "100%" }}>
        <LinearProgress color="inherit" />
      </Box>
    );
  }

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
      <ProductsCard error={error} products={data ?? []} />
    </Container>
  );
}

export default Products;
