import { useParams } from "react-router-dom";
import { useProducts } from "../../../hooks/useProducts";
import { Box, Container, Grid, LinearProgress } from "@mui/material";
import { useEffect } from "react";

import styles from "./ProductDetailPage.module.scss";

export default function ProductDetailPage() {
  const { id } = useParams();
  const { data, isLoading, error } = useProducts();

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

  const product = data?.find((item: { id: number }) => item.id === Number(id));

  if (!product) return <p>Product not found</p>;

  return (
    <Container maxWidth="xl" className={styles.container}>
      <Grid justifyContent="center" alignItems="center" container spacing={4}>
        <Grid className={styles.gridItem} size={{ xs: 12, md: 6 }}>
          <img
            src={
              product.image ||
              "https://res.cloudinary.com/dx2cycu19/image/upload/v1753938846/3840x2160-tiffany-blue-solid-color-background_1_nbuljm.jpg"
            }
            alt={product.title}
          />
          <div className={styles.specification}>
            {product.specifications.spec_images.map((image: string) => {
              return <img key={image} src={image} alt={product.title} />;
            })}
          </div>
        </Grid>
        <Grid className={styles.gridItem} size={{ xs: 12, md: 6 }}>
          <p className={styles.title}>{product.title}</p>
          <p>Desc: {product.description}</p>
          <p>Stock: {product.total_stock}</p>
          <p className={styles.price}>Price: {product.price}</p>
          <p className={styles.newPrice}>New Price: {product.new_price}</p>
          <p className={styles.oldPrice}>Old Price: {product.old_price}</p>
          <p>Discount: {product.discount}</p>
          <p>Rating: {product.rating}</p>
          <p>Review Count: {product.reviewCount}</p>
          <p>Shop Name: {product.shop_name}</p>
          <p>SKU: {product.sku}</p>

          <p>Stock State: {product.stock_state}</p>
          <p>Delivered By: {product.delivered_by}</p>
          <p>
            Colors: {product.colors.map((color: string) => color).join(", ")}
          </p>
        </Grid>
      </Grid>
    </Container>
  );
}
// colors: ["Default"];
// delivered_by: "Aug 02";
// description: "0890";
// discount: "100%OFF";
// id: 22;
// image: "";
// new_price: "1200.0$";
// old_price: "908080809.0$";
// price: 1200;
// rating: "3.8";
// reviewCount: "0";
// shop_name: "L&M Zone";
// sku: "90890891754023007955";
// specifications: {
//   spec_images: [];
// }
// stock_state: "Available";
// tags: [];
// title: "MacBook Air M3";
// total_stock: 98098098;
