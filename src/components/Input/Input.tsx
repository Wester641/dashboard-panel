import { TextField } from "@mui/material";
import type { InputProps } from "../../types/FormTypes";
import styles from "./Input.module.scss";
import { createRef, useEffect } from "react";

function InputComponent({
  register,
  errors,
  label,
  required,
  name,
  type = "text",
  defaultValue,
  multiline,
}: InputProps) {
  const reference = createRef<HTMLInputElement>();

  // Solution for input type number (input="number"), bug in MUI TextField while 
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
        defaultValue={defaultValue}
        variant="outlined"
        type={type}
        autoComplete="on"
        multiline={multiline}
        rows={multiline ? 4 : 1}
        {...register(name, { required })}
        slotProps={{ inputLabel: { shrink: true } }}
      />

      {errors[name] && (
        <span className={styles.errorMessage}>{label} field is required</span>
      )}
    </div>
  );
}

export default InputComponent;
