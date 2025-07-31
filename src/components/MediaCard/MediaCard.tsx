import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import type { ProductGET } from "../../types/FormTypes";
import styles from "./MediaCard.module.scss";
import { axiosInstance } from "../../lib/axios";

type MediaCardProps = {
  products: ProductGET;
};

// id: number;
// stock_state: "Available" | "OutOfStock" | "PreOrder";
// total_stock: number;
// rating: number | string;
// reviewCount: number | string;
// title: string;
// shop_name: string;
// price: number;
// old_price: string;
// new_price: string;
// image: string;
// delivered_by: string;
// discount: string;
// sku: string;
// description: string;
// specifications: {
//   spec_images: string[];
// };
// colors: string[];
// tags: string[];

export default function MediaCard({ products }: MediaCardProps) {
  const handleDelete = async () => {
    const confirm = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (confirm) {
      const response = await axiosInstance.delete("/products/" + products.id);
      console.log(response);

      if (response.status === 204) {
        alert("Product deleted successfully");
        window.location.reload();
      }
    }

    if (!confirm) return;
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <div className={styles.mediaCard}>
        <img
          className={styles.mediaCardImg}
          src={
            products.image ||
            "https://res.cloudinary.com/dx2cycu19/image/upload/v1753938846/3840x2160-tiffany-blue-solid-color-background_1_nbuljm.jpg"
          }
          alt="img"
        />
      </div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {products.title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {products.description}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {products.id}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {products.stock_state}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {products.total_stock}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          color="error"
          size="small"
          onClick={handleDelete}
        >
          Delete
        </Button>
        <Button variant="contained" color="primary" size="small">
          Edit
        </Button>
      </CardActions>
    </Card>
  );
}
