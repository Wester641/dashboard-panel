import { TextField } from "@mui/material";
import type { InputProps } from "../../types/FormTypes";
import styles from "./ImageInput.module.scss";
import { createRef, useEffect } from "react";

function ImageInput({
  register,
  errors,
  label,
  required = false,
  name,
  type,
  multiline,
}: InputProps) {
  const reference = createRef<HTMLInputElement>();

  if (type === "number") {
    useEffect(() => {
      const reff = reference.current;
      const wheelHandler = () => {
        reff?.blur();
      };
      reff?.addEventListener("wheel", wheelHandler);
      return () => reff?.removeEventListener("wheel", wheelHandler);
    }, [reference]);
  }

  return (
    <div className={styles.inputContainer}>
      <TextField
        inputRef={reference}
        label={label}
        variant="outlined"
        type={type}
        autoComplete="on"
        multiline={multiline}
        rows={multiline ? 4 : 1}
        {...register(name, { required })}
        InputLabelProps={{ shrink: true }}
      />

      {errors?.[name] && (
        <span className={styles.errorMessage}>
          {label} field is required
        </span>
      )}
    </div>
  );
}

export default ImageInput;
