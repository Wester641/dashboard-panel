import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { FormHelperText } from "@mui/material";

interface BasicSelectProps {
  value?: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  error?: boolean;
}

export default function BasicSelect({
  value = "Available",
  onChange,
  onBlur,
  error = false,
}: BasicSelectProps) {
  const handleChange = (event: any) => {
    onChange(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120, marginBottom: 2 }}>
      <FormControl fullWidth error={error}>
        <InputLabel id="stock-state-select-label">Stock State</InputLabel>
        <Select
          labelId="stock-state-select-label"
          id="stock-state-select"
          value={value}
          label="Stock State"
          onChange={handleChange}
          onBlur={onBlur}
        >
          <MenuItem value="available">Available</MenuItem>
          <MenuItem value="out_of_stock">Out of Stock</MenuItem>
          <MenuItem value="pre_order">Pre Order</MenuItem>
        </Select>
        {error && <FormHelperText>Please select a stock state</FormHelperText>}
      </FormControl>
    </Box>
  );
}
