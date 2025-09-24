import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import styles from "./ProductEditForm.module.scss";
import { Box, Button, LinearProgress } from "@mui/material";
import InputComponent from "../Input/Input";
import { useEffect } from "react";
import type {
  ProductPOST,
  StrictSpecificationsType,
} from "../../types/FormTypes";
import { axiosInstance } from "../../lib/axios";
import { useNavigate, useParams } from "react-router-dom";
import BasicSelect from "../BasicSelect/BasicSelect";
import MultipleSelect from "../MultipleSelect/MultipleSelect";
import { addFormFields, time } from "../../helpers/constance";
import { useProducts } from "../../hooks/useProducts";

function ProductEditForm() {
  const navigate = useNavigate();

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

  console.log(product);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm<ProductPOST>({
    defaultValues: {
      stock_state: "Available",
      colors: [],
    },
  });

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
      ...product,
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
      stock_state: data.stock_state || "Available",
      colors: data.colors || [],
      specifications: specifications,
      slug: product.slug,
      sku: product.sku,
    };

    console.log("Transformed Data:", transformedData);

    // axiosInstance
    //   .post("/products/", transformedData)
    //   .then((res) => {
    //     console.log(res);
    //     console.log(res.status);

    //     if (res.status === 201) {
    //       alert("Product added successfully");
    //       navigate("/products/");
    //       return;
    //     } else {
    //       alert("Something went wrong");
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     alert(err.response?.data?.detail || "Something went wrong");
    //   });

    // clearErrors();
  };

  const handleCancel = () => {
    navigate("/products");
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
        <h2>Edit Product</h2>
      </div>
      <div className={styles.formInput}>
        {addFormFields.map((field) => (
          <div key={field.name}>
            <InputComponent
              register={register}
              errors={errors}
              label={field.label}
              name={field.name}
              required={field.required}
              type={field.type}
              defaultValue={product[field.name] || "No Data"}
              multiline={field.multiline}
            />
          </div>
        ))}
        <div>
          <Controller
            name="stock_state"
            control={control}
            rules={{
              required: "Stock state is required",
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <BasicSelect
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                error={!!errors.stock_state}
              />
            )}
          />
          {errors.stock_state && (
            <span style={{ color: "red" }}>{errors.stock_state.message}</span>
          )}

          <Controller
            name="colors"
            control={control}
            rules={{
              validate: (value) =>
                value && value.length > 0
                  ? true
                  : "Please select at least one color",
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <MultipleSelect
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                error={!!errors.colors}
              />
            )}
          />

          {/* <PickFile /> */}
        </div>
      </div>
      <div className={styles.formGroup}>
        <Button variant="contained" onClick={handleCancel} type="button">
          Cancel
        </Button>
        <Button variant="contained" color="success" type="submit">
          Save Edit
        </Button>
      </div>
    </form>
  );
}

export default ProductEditForm;
