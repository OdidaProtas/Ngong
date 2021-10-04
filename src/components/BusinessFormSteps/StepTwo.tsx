import Typography from "@mui/material/Typography";
import React from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import formatPhoneNumber from "../../constants/formatPhoneNumber";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import useStyles from "./BusinessFormSteps.styles";

export const fields: any = [
  { name: "location", type: "text", label: "Location" },
  { name: "locationDetails", type: "text", label: "Location Details" },
];

export const validationSchema = Yup.object().shape({
  name: Yup.string().min(1, "Location too short").max(72, "Location too long"),
  locationDetails: Yup.string()
    .min(2, "Location details  too short")
    .max(72, "Location details type too short"),
});

const initialValues: any = {
  name: "",
  description: "",
  productType: "",
};

interface StepTwoInterface {
  controls: any;
  handleSubmit: any;
  next: any;
  handleStepChange: any;
}

export default function StepTwo({
  controls,
  handleSubmit,
  next,
  handleStepChange,
}: StepTwoInterface) {
  const classes = useStyles();
  return (
    <div>
      <Typography className={classes.subtitle}>Location Details</Typography>
      <div style={{ marginBottom: "12px" }}>
        <Typography className={classes.helper} variant="caption">
          You can update later
        </Typography>
      </div>
      <Formik
        initialValues={{ ...initialValues }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          const phoneNumber = formatPhoneNumber(parseInt(values.businessPhone));
          handleStepChange("location", values);
          handleSubmit(values);
          next();
        }}
      >
        {({ errors, touched, values, handleChange }) => (
          <Form>
            {fields.map((field: any, index: number) => {
              const { name, label, placeholder, type }: any = field;
              return (
                <div key={index}>
                  <Typography className={classes.label} variant="caption">
                    {label}
                  </Typography>

                  <TextField
                    fullWidth
                    size="small"
                    name={name}
                    className={classes.textInput}
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
            <div>{controls()}</div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
