import type { ProductGET } from "../../types/FormTypes";
import styles from "./ProductsCard.module.scss";

type ProductsProps = {
  error: any;
  loading: boolean;
  products: ProductGET[];
};

function ProductsCard({ products, error, loading }: ProductsProps) {
  if (error) {
    return <div>{error}</div>;
  }

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (!products || products.length === 0) {
    return <div>No products found</div>;
  }

  return (
    <div>
      <h1>Products</h1>

      {products.map((product: ProductGET) => (
        <div className={styles.productCard} key={product.id}>
          <p>
            <strong>name:</strong> {product.title}
          </p>
          <p>
            <strong>description:</strong> {product.description}
          </p>
          <p>
            <strong>price:</strong> {product.price}
          </p>
          <p>
            <strong>new_price:</strong> {product.new_price}
          </p>
          <p>
            <strong>old_price:</strong> {product.old_price}
          </p>
          <p>
            <strong>rating:</strong> {product.rating}
          </p>
          <p>
            <strong>reviewCount:</strong> {product.reviewCount}
          </p>
          <p>
            <strong>shop_name:</strong> {product.shop_name}
          </p>
          <p>
            <strong>sku:</strong> {product.sku}
          </p>
          <p>
            <strong>stock_state:</strong> {product.stock_state}
          </p>
          <p>
            <strong>total_stock:</strong> {product.total_stock}
          </p>
          <p>
            <strong>discount:</strong> {product.discount}
          </p>
          <p>
            <strong>delivered_by:</strong> {product.delivered_by}
          </p>
          <p>
            <strong>colors:</strong> {product.colors?.[0] || "No colors"}
          </p>
          <p>
            <strong>tags:</strong> {product.tags?.[0] || "No tags"}
          </p>
          <p>
            <strong>specifications:</strong>{" "}
            {product.specifications?.spec_images?.[0] || "No specifications"}
          </p>
        </div>
      ))}
    </div>
  );
}

export default ProductsCard;
