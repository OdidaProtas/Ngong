import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Field } from "formik";
import React from "react";

export default function ProductType() {
  return (
    <div>
      <Typography sx={{ mt: 1 }}>PRODUCT TYPE</Typography>
      <Field name="productType">
        {({ field }) => (
          <TextField
            fullWidth
            value={field.value}
            onChange={field.onChange(field.name)}
            placeholder="Search Types"
            size="small"
          />
        )}
      </Field>
    </div>
  );
}
