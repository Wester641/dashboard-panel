import { Container, Grid } from "@mui/material";
import type { ProductGET } from "../../types/FormTypes";
import MediaCard from "../MediaCard/MediaCard";

type ProductsProps = {
  error: any;
  products: ProductGET[];
};

function ProductsCard({ products, error }: ProductsProps) {
  if (error) {
    return <div>{error}</div>;
  }

  // if (loading) {
  //   return (
  //     <Box sx={{ width: "100%" }}>
  //       <LinearProgress color="inherit" />
  //     </Box>
  //   );
  // }

  if (!products || products.length === 0) {
    return <div>No products found</div>;
  }

  return (
    <Container>
      <Grid container spacing={2}>
        {products.map((product: ProductGET) => (
          <Grid size={{ xs: 12, md: 3 }} key={product.id}>
            <MediaCard products={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ProductsCard;
