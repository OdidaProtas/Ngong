import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function SortPicker() {
  const [value, setValue] = React.useState("productTitleAZ");
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl size="small"  fullWidth>
        <Select
          labelId="demo-simple-select-label1111"
          id="demo-simple-select"
          name="unit"
          value={value}
          onChange={(e:any)=>setValue(e.target.value)}
          displayEmpty
        >
          <MenuItem value={"productTitleAZ"}>Product Title, A -Z</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
