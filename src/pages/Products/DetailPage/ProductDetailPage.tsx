import { useParams } from "react-router-dom";
import { Box, Container, Grid, LinearProgress } from "@mui/material";
import { useEffect } from "react";

import styles from "./ProductDetailPage.module.scss";
import { useProduct } from "../../../hooks/useProducts";

export default function ProductDetailPage() {
  const { id } = useParams();
  const { data: product, error, isLoading } = useProduct(Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) {
    return (
      <Box sx={{ width: "100%" }}>
        <LinearProgress color="inherit" />
      </Box>
    );
  }

  if (error) return <p>Error loading product</p>;

  if (!product) return <p>Product not found</p>;

  return (
    <Container maxWidth="xl" className={styles.container}>
      <Grid justifyContent="center" alignItems="center" container spacing={4}>
        <Grid className={styles.gridItem} size={{ xs: 12, md: 6 }}>
          <img
            src={
              product.image_url[0] ||
              "https://res.cloudinary.com/dx2cycu19/image/upload/v1753938846/3840x2160-tiffany-blue-solid-color-background_1_nbuljm.jpg"
            }
            alt={product.title}
          />
          <div className={styles.specification}>
            {product.image_url !== null &&
              product.image_url.map((image: string) => {
                return (
                  <div key={image}>
                    <img
                      src={
                        image ||
                        "https://res.cloudinary.com/dx2cycu19/image/upload/v1753938846/3840x2160-tiffany-blue-solid-color-background_1_nbuljm.jpg"
                      }
                      alt=""
                    />
                  </div>
                );
              })}
          </div>
        </Grid>
        <Grid className={styles.gridItem} size={{ xs: 12, md: 6 }}>
          <p className={styles.title || ""}>{product.title}</p>
          <p>Desc: {product.description || ""}</p>
          <p>Stock: {product.total_stock || ""}</p>
          <p className={styles.price}>Price: {product.price || ""}</p>
          <p className={styles.oldPrice}>
            Old Price: {product.old_price || ""}
          </p>
          <p className={styles.stock_state}>
            Stock State: {product.stock_state || ""}
          </p>
          <p className={styles.created_at}>
            Created At: {product.created_at || ""}
          </p>
          <p>
            Colors: {product.colors?.map((color: string) => color).join(", ")}
          </p>
        </Grid>
      </Grid>
    </Container>
  );
}
