import { TextField } from "@mui/material";
import type { InputProps } from "../../types/FormTypes";
import styles from "./Input.module.scss";

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
  return (
    <div className={styles.inputContainer}>
      <TextField
        id="outlined-basic"
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
