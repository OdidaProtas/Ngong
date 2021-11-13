import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function UnitPicker({ handleChange, values }: any) {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl size="small" fullWidth>
        <InputLabel id="demo-simple-select-label1111">Unit</InputLabel>
        <Select
          labelId="demo-simple-select-label1111"
          id="demo-simple-select"
          name="unit"
          value={values.unit}
          label="Unit"
          onChange={handleChange}
        >
          <MenuItem value={"G"}>Gramms</MenuItem>
          <MenuItem value={"KG"}>Kilograms</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
