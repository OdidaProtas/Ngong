import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

export default function DatePickerWidget({ values, handleChange }: any) {
  const date = new Date();
  return (
    <Stack component="form" noValidate spacing={3} pt={3}>
      <TextField
        color="secondary"
        size="small"
        id="datetime-local"
        label="Availability"
        type="datetime-local"
        name={"availability"}
        onChange={handleChange}
        value={values.availability}
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
      />
    </Stack>
  );
}
