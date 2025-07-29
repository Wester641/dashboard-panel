import { useForm, type SubmitHandler } from "react-hook-form";
import styles from "./ProductAddForm.module.scss";
import { Button } from "@mui/material";
import InputComponent from "../Input/Input";
import { useEffect } from "react";
import type { ProductPOST } from "../../types/FormTypes";
import PickFile from "../PickFile/PickFile";

const fields = [
  {
    label: "Title*",
    name: "title",
    required: true,
  },
  {
    label: "Base Price*",
    name: "base_price",
    required: true,
  },
  {
    label: "SKU*",
    name: "sku",
    required: true,
  },
  {
    label: "Category*",
    name: "category_id",
    required: true,
  },
  {
    label: "Description",
    name: "description",
    required: false,
  },
  {
    label: "Short Description",
    name: "short_description",
    required: false,
  },
  {
    label: "Slug",
    name: "slug",
    required: false,
  },
  {
    label: "Old Price",
    name: "old_price",
    required: false,
  },
  {
    label: "Stock State",
    name: "stock_state",
    required: false,
  },
  {
    label: "Total Stock",
    name: "total_stock",
    required: false,
  },
  {
    label: "Min Order Quantity",
    name: "min_order_quantity",
    required: false,
  },
  {
    label: "Meta Title",
    name: "meta_title",
    required: false,
  },
  {
    label: "Meta Description",
    name: "meta_description",
    required: false,
  },
  {
    label: "Brand",
    name: "brand_id",
    required: false,
  },
  {
    label: "Shop",
    name: "shop_id",
    required: false,
  },
  {
    label: "Tag",
    name: "tag_ids",
    required: false,
  },
  {
    label: "Image",
    name: "image_ids",
    required: false,
  },
  {
    label: "Is Active",
    name: "is_active",
    required: false,
  },
  {
    label: "Is Featured",
    name: "is_featured",
    required: false,
  },
  {
    label: "Shop Name",
    name: "shop_name",
    required: false,
  },
  {
    label: "Delivered By",
    name: "delivered_by",
    required: false,
  },
  {
    label: "Specifications",
    name: "specifications",
    required: false,
  },
  {
    label: "Colors",
    name: "colors",
    required: false,
  },
  {
    label: "Tags",
    name: "tags_names",
    required: false,
  },
  {
    label: "Rating",
    name: "rating",
    required: false,
  },
  {
    label: "Review Count",
    name: "reviewCount",
    required: false,
  },
];

// description?: string;
// short_description?: string;
// slug?: string;
// old_price?: number;
// stock_state?: "Available" | "OutOfStock" | "PreOrder";
// total_stock?: number;
// min_order_quantity?: number;
// meta_title?: string;
// meta_description?: string;
// brand_id?: number;
// shop_id?: number;
// is_active?: boolean;
// is_featured?: boolean;
// tag_ids?: number[];
// image_ids?: number[];
// shop_name?: string | null;
// delivered_by?: string;
// specifications?: {
//   [key: string]: string[];
// };
// colors?: string[];
// tags_names?: string[];
// rating?: number | string;
// reviewCount?: number | string;

function ProductAddForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm<ProductPOST>();

  const onSubmit: SubmitHandler<ProductPOST> = (data) => {
    console.log(data);
    clearErrors();
  };

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      const timer = setTimeout(() => {
        clearErrors();
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [errors, clearErrors]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.formGroup}>
        <h2>Add Product</h2>
      </div>
      <div className={styles.formGroup}>
        {fields.map((field) => (
          <div key={field.name}>
            <InputComponent
              register={register}
              errors={errors}
              label={field.label}
              name={field.name}
              required={field.required}
            />
          </div>
        ))}
        <div>
          <PickFile />
        </div>
      </div>
      <div className={styles.formGroup}>
        <Button variant="contained">Cancel</Button>
        <Button variant="contained" type="submit">
          Save
        </Button>
      </div>
    </form>
  );
}

export default ProductAddForm;
