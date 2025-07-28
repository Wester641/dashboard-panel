import { useForm, type SubmitHandler } from "react-hook-form";
import styles from "./ProductAddForm.module.scss";
import { Button } from "@mui/material";
import InputComponent from "../Input/Input";
import { useEffect } from "react";
import type { ProductPOST } from "../../types/FormTypes";
import PickFile from "../PickFile/PickFile";

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
        <InputComponent
          register={register}
          errors={errors}
          label="Title"
          name="title"
        />
        <InputComponent
          register={register}
          errors={errors}
          label="Base Price"
          required
          name="base_price"
        />
        <InputComponent
          register={register}
          errors={errors}
          label="SKU"
          required
          name="sku"
        />
        <InputComponent
          register={register}
          errors={errors}
          label="Category"
          required
          name="category_id"
        />
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
