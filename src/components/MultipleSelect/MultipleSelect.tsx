import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { FormHelperText } from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const colors = [
  "Black",
  "White",
  "Red",
  "Blue",
  "Green",
  "Yellow",
  "Orange",
  "Purple",
  "Pink",
  "Gray",
  "Brown",
  "Gold",
  "Silver",
];

function getStyles(color: string, selectedColors: string[], theme: any) {
  return {
    fontWeight: selectedColors.includes(color)
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular,
  };
}

interface MultipleSelectProps {
  value?: string[];
  onChange: (value: string[]) => void;
  onBlur?: () => void;
  error?: boolean;
}

export default function MultipleSelect({
  value = [],
  onChange,
  onBlur,
  error = false,
}: MultipleSelectProps) {
  const theme = useTheme();

  const handleChange = (event: any) => {
    const {
      target: { value: selectedValue },
    } = event;

    const newValue =
      typeof selectedValue === "string"
        ? selectedValue.split(",")
        : selectedValue;

    onChange(newValue);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }} error={error}>
        <InputLabel id="colors-multiple-select-label">Colors</InputLabel>
        <Select
          labelId="colors-multiple-select-label"
          id="colors-multiple-select"
          multiple
          value={value}
          onChange={handleChange}
          onBlur={onBlur}
          input={<OutlinedInput label="Colors" />}
          MenuProps={MenuProps}
        >
          {colors.map((color) => (
            <MenuItem
              key={color}
              value={color}
              style={getStyles(color, value, theme)}
            >
              {color}
            </MenuItem>
          ))}
        </Select>
        {error && (
          <FormHelperText>Please select at least one color</FormHelperText>
        )}
      </FormControl>
    </div>
  );
}
