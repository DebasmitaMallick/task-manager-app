import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  SelectProps,
} from "@mui/material";
import { FC } from "react";

type SelectBtnProps = SelectProps<string> & {
  options: string[];
  defaultVal: string;
  onFilterChange: (type: string, e: SelectChangeEvent) => unknown;
};

const SelectBtn: FC<SelectBtnProps> = ({
  options,
  defaultVal,
  onFilterChange,
  ...props
}) => {
  return (
    <FormControl>
      <InputLabel id="demo-simple-select-label">{defaultVal}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        {...props}
        label={defaultVal}
        sx={{ borderRadius: 20, width: 128 }}
        onChange={(e) =>
          onFilterChange(defaultVal === "Category" ? "category" : "dueDate", e)
        }
      >
        {options.map((opt) => (
          <MenuItem key={opt} value={opt}>
            {opt}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectBtn;
