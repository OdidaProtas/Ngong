import Box from "@mui/material/Box/Box";
import Checkbox from "@mui/material/Checkbox/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel";
import Grid from "@mui/material/Grid/Grid";
import TextField from "@mui/material/TextField/TextField";
import Typography from "@mui/material/Typography/Typography";
import { Field } from "formik";
import React, { Suspense } from "react";
import { ButtonWithLoaderComponent } from "../../SharedComponents";

export default function CustomerNotes({ fields, handleChange }: any) {
  return (
    <Grid container>
      <Grid item xs={12} lg={4} mt={3}>
        <Typography variant="h5">Notes</Typography>
        <Typography>Add notes about your customers</Typography>
      </Grid>
      <Grid item xs={12} lg={8}>
        <Box sx={{ bgcolor: "background.paper", mt: 2, p: 4 }}>
          {fields.map((field: any, index: number) => {
            const { name, type, label }: any = field;
            return (
              <div key={index}>
                <Field name={name}>
                  {({ field }) => (
                    <TextField
                      color="secondary"
                      fullWidth
                      name={name}
                      multiline
                      sx={{ mb: 2 }}
                      label={label}
                      error={field.touched && Boolean(field.errors)}
                      value={field.value}
                      onChange={field.onChange(name)}
                      helperText={field.touched && field.errors}
                      type={type}
                    />
                  )}
                </Field>
              </div>
            );
          })}
          {/* <Box sx={{ mt: 2 }} style={{ position: "absolute" }}>
                  <Suspense fallback={<div></div>}>
                    <ButtonWithLoaderComponent title={"Save"} loading={false} />
                  </Suspense>
                </Box> */}
        </Box>
      </Grid>
    </Grid>
  );
}
