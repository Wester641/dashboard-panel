import { useForm, type SubmitHandler } from "react-hook-form";
import styles from "./ProductAddForm.module.scss";
import { Button } from "@mui/material";
import InputComponent from "../Input/Input";
import { useEffect } from "react";
import type { ProductPOST } from "../../types/FormTypes";
import PickFile from "../PickFile/PickFile";

const fields = [
  {
    label: "Title* (Text)",
    name: "title",
    required: true,
    defaultValue: "MacBook Air M3",
  },
  {
    label: "Base Price* (Number)",
    name: "base_price",
    required: true,
    type: "number",
    defaultValue: "1200",
  },
  {
    label: "SKU* (Text)",
    name: "sku",
    required: true,
    defaultValue: "123456",
  },
  {
    label: "Category* (Number)",
    name: "category_id",
    required: true,
    type: "number",
    defaultValue: "",
  },

  {
    label: "Slug (Text)",
    name: "slug",
    required: false,
    defaultValue: "",
  },
  {
    label: "Old Price (Number)",
    name: "old_price",
    required: false,
    type: "number",
    defaultValue: "",
  },
  {
    label: "Stock State (Text)",
    name: "stock_state",
    required: false,
    defaultValue: "",
  },
  {
    label: "Total Stock (Number)",
    name: "total_stock",
    required: false,
    type: "number",
    defaultValue: "",
  },
  {
    label: "Min Order Quantity (Number)",
    name: "min_order_quantity",
    required: false,
    type: "number",
    defaultValue: "",
  },
  {
    label: "Meta Title (Text)",
    name: "meta_title",
    required: false,
    defaultValue: "",
  },
  {
    label: "Meta Description (Text)",
    name: "meta_description",
    required: false,
    defaultValue: "",
  },
  {
    label: "Brand (Number)",
    name: "brand_id",
    required: false,
    type: "number",
    defaultValue: "",
  },
  {
    label: "Shop (Number)",
    name: "shop_id",
    required: false,
    type: "number",
    defaultValue: "",
  },
  {
    label: "Tag (Number)",
    name: "tag_ids",
    required: false,
    type: "number",
    defaultValue: "",
  },
  {
    label: "Image (Link)",
    name: "image_ids",
    required: false,
    defaultValue: "",
  },
  {
    label: "Is Active (Yes / No)",
    name: "is_active",
    required: false,
    defaultValue: "",
  },
  {
    label: "Is Featured (Yes / No)",
    name: "is_featured",
    required: false,
    defaultValue: "",
  },
  {
    label: "Shop Name (Text)",
    name: "shop_name",
    required: false,
    defaultValue: "",
  },
  {
    label: "Delivered By (Text)",
    name: "delivered_by",
    required: false,
    defaultValue: "",
  },
  {
    label: "Specifications (Text)",
    name: "specifications",
    required: false,
    defaultValue: "",
  },
  {
    label: "Colors (Text)",
    name: "colors",
    required: false,
    defaultValue: "",
  },
  {
    label: "Tags (Text)",
    name: "tags_names",
    required: false,
    defaultValue: "",
  },
  {
    label: "Rating (Number)",
    name: "rating",
    required: false,
    type: "number",
    defaultValue: "",
  },
  {
    label: "Review Count (Number)",
    name: "reviewCount",
    required: false,
    type: "number",
    defaultValue: "",
  },
  {
    label: "Description (Text)",
    name: "description",
    required: false,
    defaultValue: "",
    multiline: true,
  },
  {
    label: "Short Description (Text)",
    name: "short_description",
    required: false,
    defaultValue: "",
    multiline: true,
  },
];

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
      <div className={styles.formInput}>
        {fields.map((field) => (
          <div key={field.name}>
            <InputComponent
              register={register}
              errors={errors}
              label={field.label}
              name={field.name}
              required={field.required}
              type={field.type}
              defaultValue={field.defaultValue}
              multiline={field.multiline}
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
