import { useForm, type SubmitHandler } from "react-hook-form";
import styles from "./ProductAddForm.module.scss";
import { Button } from "@mui/material";
import InputComponent from "../Input/Input";
import { useEffect } from "react";
import type {
  ProductPOST,
  StrictSpecificationsType,
} from "../../types/FormTypes";
import PickFile from "../PickFile/PickFile";
import { axiosInstance } from "../../lib/axios";
import { useNavigate } from "react-router-dom";

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
    label: "Delivered By (Text)",
    name: "delivered_by",
    required: false,
    defaultValue: "",
  },
  {
    label: "Specification Prop 1 URLs (comma separated)",
    name: "spec_prop1",
    required: false,
    defaultValue: "",
  },
  {
    label: "Specification Prop 2 URLs (comma separated)",
    name: "spec_prop2",
    required: false,
    defaultValue: "",
  },
  {
    label: "Specification Prop 3 URLs (comma separated)",
    name: "spec_prop3",
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

const time = new Date().getTime();

function ProductAddForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm<ProductPOST>();

  const onSubmit: SubmitHandler<ProductPOST> = (data) => {
    const specifications: StrictSpecificationsType = {};

    if (data.spec_prop1) {
      specifications.additionalProp1 = data.spec_prop1
        .split(",")
        .map((url) => url.trim());
    }
    if (data.spec_prop2) {
      specifications.additionalProp2 = data.spec_prop2
        .split(",")
        .map((url) => url.trim());
    }
    if (data.spec_prop3) {
      specifications.additionalProp3 = data.spec_prop3
        .split(",")
        .map((url) => url.trim());
    }

    const transformedData: ProductPOST = {
      ...data,
      base_price: Number(data.base_price),
      old_price: data.old_price ? Number(data.old_price) : undefined,
      total_stock: data.total_stock ? Number(data.total_stock) : undefined,
      min_order_quantity: data.min_order_quantity
        ? Number(data.min_order_quantity)
        : undefined,
      rating: data.rating ? Number(data.rating) : undefined,
      reviewCount: data.reviewCount ? Number(data.reviewCount) : undefined,
      category_id: 1,
      brand_id: 1,
      is_active: true,
      is_featured: false,
      stock_state: "Available",
      colors: [],
      specifications: specifications,
      slug: time.toString(),
      sku: time.toString(),
    };

    axiosInstance
      .post("/products/", transformedData)
      .then((res) => {
        console.log(res);
        console.log(res.status);

        if (res.status === 201) {
          alert("Product added successfully");
          navigate("/products/");
          return;
        } else {
          alert("Something went wrong");
        }
      })
      .catch((err) => {
        console.log(err);
        alert(err.response.data.detail || "Something went wrong");
      });
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
