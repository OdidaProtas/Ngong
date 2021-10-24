import Box from "@mui/material/Box/Box";
import Checkbox from "@mui/material/Checkbox/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel";
import Grid from "@mui/material/Grid/Grid";
import TextField from "@mui/material/TextField/TextField";
import Typography from "@mui/material/Typography/Typography";
import { Form, Formik } from "formik";
import React, { Suspense } from "react";
import { ButtonWithLoaderComponent } from "../../SharedComponents";

export default function CustomerFormOverview({ fields }: any) {
  return (
    <Grid container>
      <Grid item xs={12} lg={4} mt={3}>
        <Typography variant="h5">Customer Overview</Typography>
      </Grid>
      <Grid item xs={12} lg={8}>
        <Box sx={{ bgcolor: "background.paper", mt: 2, p: 4, }}>
          <Formik
            validationSchema={{}}
            initialValues={{}}
            onSubmit={(value) => console.log(value)}
          >
            {({ errors, touched, values, handleChange }: any) => (
              <Form>
                {fields.map((field: any, index: number) => {
                  const { name, type, label }: any = field;
                  return (
                    <div key={index}>
                      <TextField
                        fullWidth
                        name={name}
                        sx={{ mb: 2 }}
                        label={label}
                        error={touched[name] && Boolean(errors[name])}
                        value={values[name]}
                        onChange={handleChange}
                        helperText={touched[name] && errors[name]}
                        type={type}
                      />
                    </div>
                  );
                })}
                <div>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Customer has agreed to recieve marketing emails"
                  />
                </div>
                {/* <Box sx={{ mt: 2 }} style={{ position: "absolute" }}>
                  <Suspense fallback={<div></div>}>
                    <ButtonWithLoaderComponent title={"Save"} loading={false} />
                  </Suspense>
                </Box> */}
              </Form>
            )}
          </Formik>
        </Box>
      </Grid>
    </Grid>
  );
}
