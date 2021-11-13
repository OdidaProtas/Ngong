import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

export default function CollectionsSelect({ label, options }: any) {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        {/* <InputLabel variant="standard" htmlFor="uncontrolled-native">
          {label}
        </InputLabel> */}
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: "age",
            id: "uncontrolled-native",
          }}
        >
          {options.map((o, i) => (
            <option key={i} value={o.value}>
              {o.label}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </Box>
  );
}
