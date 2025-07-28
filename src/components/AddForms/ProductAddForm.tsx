import { useForm, type SubmitHandler } from "react-hook-form";
import styles from "./ProductAddForm.module.scss";
import { Button } from "@mui/material";
import InputComponent from "../Input/Input";
import { useEffect } from "react";
import type { Inputs } from "../../types/FormTypes";

function ProductAddForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
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
          label="Name"
          required
          name="name"
        />
        <InputComponent
          register={register}
          errors={errors}
          label="Price"
          required
          name="price"
        />

        <InputComponent
          register={register}
          errors={errors}
          label="Description"
          required
          name="description"
        />
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
