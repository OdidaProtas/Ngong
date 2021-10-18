import Grid from "@mui/material/Grid/Grid";
import Typography from "@mui/material/Typography/Typography";
import React from "react";
import { useAxiosRequest } from "../../../hooks";
import { FormComponent } from "../../SharedComponents";
import { fields, initialState, validationSchema } from "./form";

export default function BusinessForm() {
  const { loading } = useAxiosRequest();
  const handleSubmit = () => {};
  const handleClose = () => {};
  return (
    <div>
      <Typography variant="h5" sx={styles.title}>
        Set up Cake Shop
      </Typography>
      <Typography sx={styles.subtitle}>Complete your shop profile</Typography>
      <div style={styles.root}>
        <Grid container>
          <Grid item xs={12} md={8} lg={6}>
            <FormComponent
              fields={fields}
              validationShema={validationSchema}
              initialState={initialState}
              handleSubmit={handleSubmit}
              loading={loading}
              snackBarOptions={{
                open: false,
                severity: "error",
                message: "An error occured",
                handleClose: handleClose,
              }} btnTitle={"Submit"}            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

const styles: any = {
  root: {
    paddingTop: "10px",
  },
  title: {
    marginTop: "10px",
    marginBottom: "18px",
  },
  subtitle: {
    marginBottom: "18px",
  },
};
