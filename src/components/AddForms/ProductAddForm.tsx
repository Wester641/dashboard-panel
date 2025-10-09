import { Controller, useFieldArray, useForm, type SubmitHandler } from "react-hook-form";
import styles from "./ProductAddForm.module.scss";
import { Button } from "@mui/material";
import InputComponent from "../Input/Input";
import { useEffect } from "react";
import type { ProductCreateOnSupaBase, ProductFormData } from "../../types/FormTypes";


import { useNavigate } from "react-router-dom";
import BasicSelect from "../BasicSelect/BasicSelect";
import MultipleSelect from "../MultipleSelect/MultipleSelect";
import { addFormFields } from "../../helpers/constance";
import supabase from "../../supabase/supabase-client";
import ImageInput from "../ImageInput/ImageInput";

function ProductAddForm() {
  const navigate = useNavigate();

  const {
    register,
    control,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm<ProductFormData>({
    defaultValues: {
      stock_state: "Available",
      image_url: [{ value: "" }],
      colors: [],
      description: "",
      price: 0,
      sku: 0,
      title: "",
      total_stock: 0,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "image_url",
  });



  const onSubmit: SubmitHandler<ProductFormData> = async (data) => {
    const transformedData: ProductCreateOnSupaBase = {
      colors: data.colors,
      description: data.description,
      image_url: data.image_url.map(img => img.value),
      old_price: Number(data.old_price),
      price: Number(data.price),
      sku: Number(data.sku),
      stock_state: data.stock_state,
      title: data.title,
      total_stock: Number(data.total_stock),
    };


    console.log(transformedData)

    const { data: insertedData, error } = await supabase
      .from("products")
      .insert([transformedData])
      .select();

    if (error) {
      console.error("Supabase insert error:", error.message);
      return;
    }

    console.log("✅ Inserted product:", insertedData);

    console.log(transformedData)
    clearErrors();
    navigate("/products");
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
        <h2>Add Product</h2>
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
              defaultValue={field.defaultValue}
              multiline={field.multiline}
            />
          </div>
        ))}
        <div>
          <div>
            <h3>Images</h3>
            {fields.map((field, index) => (
              <div
                className={styles.imageContainer}
                key={field.id}
              >

                <div className={styles.imageInput}>
                  <ImageInput
                    register={register}
                    name={`image_url.${index}.value`}
                    label={`Image URL ${index + 1}`}
                    type="text"
                    errors={errors}
                  />
                </div>

                <div className={styles.removeBtn}>



                  <button
                    className={styles.removeBtn}
                    onClick={() => remove(index)}
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))}
            <button className={styles.addImageBtn} onClick={() => append({ value: "" })}>
              + Add Image
            </button>
          </div>



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


        </div>
      </div>
      <div className={styles.formGroup}>
        <Button variant="contained" onClick={handleCancel} type="button">
          Cancel
        </Button>
        <Button variant="contained" color="success" type="submit">
          Save
        </Button>
      </div>
    </form>
  );
}

export default ProductAddForm;
