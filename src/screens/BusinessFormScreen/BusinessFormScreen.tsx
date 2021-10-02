import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { Formik, Form } from "formik";
import { Suspense } from "react";

import * as Yup from "yup";
import { LoadingBtnComponent } from "../../components";
import formatPhoneNumber from "../../constants/formatPhoneNumber";
import phoneRegExp from "../../constants/phoneRegExp";
import { useAxiosRequest } from "../../hooks";
import useStyles from "./BusinessFormScreen.styles";

const fields: any = [
  { name: "name", type: "text", label: "Business Name" },
  { name: "description", type: "text", label: "Description" },
  { name: "location", type: "text", label: "Location" },
  { name: "latitude", type: "text", label: "Latitude" },
  { name: "longitude", type: "text", label: "Longitude" },
  { name: "locationDetails", type: "text", label: "Location Details" },
  { name: "productType", type: "text", label: "Product Type" },
  { name: "businessEmail", type: "email", label: "Business Email" },
  { name: "businessPhone", type: "number", label: "Business Phone" },
];

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(1, "Name too short")
    .max(72, "Name too long")
    .required("A business name is required"),
  productType: Yup.string()
    .min(2, "Product type too short")
    .max(72, "Product type too short")
    .required("Product type is required"),
  businessPhone: Yup.string().matches(
    phoneRegExp,
    "Could not validate phone number"
  ),
  businessEmail: Yup.string().email("Invalid email address"),
  description: Yup.string()
    .min(12, "The description is too short.")
    .max(300, "The description is too long"),
  latitude: Yup.number()
    .min(-90, "Provided value is too small")
    .max(90, "Provided Value too big"),
  longitude: Yup.number()
    .min(-180, "Provided value is too small")
    .max(180, "Provided Value too big"),
});

const initialValues: any = {
  name: "",
  description: "",
  location: "",
  latitude: "",
  longitude: "",
  locationDetails: "",
  productType: "",
  businessEmail: "",
  businessPhone: "",
};

export default function BusinessFormScreen() {
  const classes = useStyles();
  const { loading } = useAxiosRequest();
  return (
    <div>
      <Grid container>
        <Grid item xs={12} lg={6}>
          <Typography variant="h6">Setup a business</Typography>
          <div>
            <Formik
              initialValues={{ ...initialValues }}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                const phoneNumber = formatPhoneNumber(
                  parseInt(values.businessPhone)
                );
                console.log(values);
              }}
            >
              {({ errors, touched, values, handleChange }) => (
                <Form>
                  {fields.map((field: any, index: number) => {
                    console.log(field)
                    const { name, label, placeholder, type }: any = field;
                    return (
                      <div key={index}>
                        <Typography variant="caption">{label}</Typography>
                        <TextField
                          fullWidth
                          size="small"
                          name={name}
                          // className={classes.t}
                          label={label}
                          error={touched[name] && Boolean(errors[name])}
                          value={values[name]}
                          onChange={handleChange}
                          helperText={touched[name] && errors[name]}
                          type={type}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                {type === "password " ? (
                                  <Typography variant="caption">
                                    Show
                                  </Typography>
                                ) : null}
                              </InputAdornment>
                            ),
                          }}
                        />
                      </div>
                    );
                  })}
                  <div className={classes.uploadBtnContainer}>
                    <label className={classes.uploadBtn}>
                      <input type="file" />
                      Upload Image
                    </label>
                  </div>
                  {loading ? (
                    <Suspense fallback={<div></div>}>
                      <LoadingBtnComponent />
                    </Suspense>
                  ) : (
                    <Button
                      // className={classes.submitBtn}
                      size="small"
                      variant="contained"
                      fullWidth
                      type="submit"
                    >
                      Submit
                    </Button>
                  )}
                </Form>
              )}
            </Formik>
          </div>
        </Grid>
        <Grid item></Grid>
      </Grid>
    </div>
  );
}
