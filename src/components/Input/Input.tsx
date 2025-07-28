import { TextField } from "@mui/material";
import type { InputProps } from "../../types/FormTypes";
import styles from "./Input.module.scss";

function InputComponent({
  register,
  errors,
  label,
  required,
  name,
}: InputProps) {
  return (
    <div className={styles.inputContainer}>
      <TextField
        id="outlined-basic"
        label={label}
        variant="outlined"
        {...register(name, { required })}
      />
      {errors[name] && (
        <span className={styles.errorMessage}>{label} field is required</span>
      )}
    </div>
  );
}

export default InputComponent;
