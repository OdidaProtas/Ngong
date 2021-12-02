import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { Field } from "formik";

export default function DatePickerWidget({ values, handleChange }: any) {
  const date = new Date();
  return (
    <Stack component="form" noValidate>
      <Field name="availability">
        {({ field }) => (
          <TextField
            color="secondary"
            size="small"
            id="datetime-local"
            label="Availability"
            type="datetime-local"
            name={"availability"}
            onChange={field.onChange(field.name)}
            value={field.value}
            defaultValue=""
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />
        )}
      </Field>
    </Stack>
  );
}
