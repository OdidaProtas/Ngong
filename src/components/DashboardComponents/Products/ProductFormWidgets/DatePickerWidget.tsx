import Box from "@mui/material/Box/Box";
import { useState } from "react";

export default function DatePickerWidget() {
  const [value, setValue] = useState<Date | null>(new Date());

  return (
    <Box sx={{ mt: 3 }}>
      {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateTimePicker
          renderInput={(props) => <TextField {...props} />}
          label="DateTimePicker"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
        />
      </LocalizationProvider> */}
    </Box>
  );
}
