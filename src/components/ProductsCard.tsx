import axios from "axios";
import { useEffect, useState } from "react";

function ProductsCard() {
  const [products, setProducts] = useState<any>([]);

  useEffect(() => {
    axios.get("http://192.168.0.32:8000/api/v1/products/").then((res) => {
      setProducts(res.data);
    });
  }, []);

  return <div>{products[0]?.title}</div>;
}

export default ProductsCard;
