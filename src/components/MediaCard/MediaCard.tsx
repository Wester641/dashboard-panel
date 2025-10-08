import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import type { ProductGET } from "../../types/FormTypes";
import styles from "./MediaCard.module.scss";
import { createTheme } from "@mui/material";
import { NavLink } from "react-router-dom";
import supabase from "../../supabase/supabase-client";

type MediaCardProps = {
  products: ProductGET;
};

export default function MediaCard({ products }: MediaCardProps) {


  const handleDelete = async () => {
    const confirm = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (!confirm) return;
    const { data: deletedData, error } = await supabase
      .from("products")
      .delete()
      .eq("id", products.id);


    if (error) {
      console.error("Supabase delete error:", error.message);
      return;
    }
    alert(`Product deleted successfully. ${deletedData}`);
    window.location.reload();
  }



  // const navigate = useNavigate();

  // const handleEdit = () => {
  //   navigate(`/products/${products.id}/edit`);
  // };

  const theme = createTheme();

  return (
    <Card sx={{ maxWidth: 345, minHeight: theme.spacing(20) }}>
      <div className={styles.mediaCardImageContainer}>
        <img
          className={styles.mediaCardImg}
          src={
            products.image_url[0].value ||
            "https://res.cloudinary.com/dx2cycu19/image/upload/v1753938846/3840x2160-tiffany-blue-solid-color-background_1_nbuljm.jpg"
          }
          alt="img"
        />
      </div>
      <div className={styles.mediaCardContentContainer}>
        <CardContent>
          <NavLink
            to={`/products/${products.id}`}
            className={styles.mediaCardTitle}
          >
            {products.title}
          </NavLink>
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
          <NavLink to={`/products/${products.id}/edit`}>
            <Button variant="contained" color="primary" size="small">
              Edit
            </Button>
          </NavLink>
        </CardActions>
      </div>
    </Card>
  );
}
