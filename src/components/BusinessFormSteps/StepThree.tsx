import Typography from "@mui/material/Typography";
import React from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import formatPhoneNumber from "../../constants/formatPhoneNumber";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import useStyles from "./BusinessFormSteps.styles";
import phoneRegExp from "../../constants/phoneRegExp";

export const fields: any = [
  { name: "phone", type: "number", label: "Business Phone" },
  { name: "email", type: "email", label: "Bussiness Email" },
];

export const validationSchema = Yup.object().shape({
  phone: Yup.string().matches(phoneRegExp, "Could not validate phone number"),
  email: Yup.string().email("Email address is invalid"),
});

const initialValues: any = {
  phone: "",
  email: "",
};

interface StepThreeInterface {
  controls: any;
  handleSubmit: any;
  handleStepChange: any;
}

export default function StepThree({
  controls,
  handleSubmit,
  handleStepChange,
}: StepThreeInterface) {
  const classes = useStyles();
  return (
    <div>
      <Typography className={classes.subtitle}>Contact Details</Typography>
      <Typography className={classes.helper} variant="caption">
        You can update later
      </Typography>
      <Formik
        initialValues={{ ...initialValues }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          const phoneNumber = formatPhoneNumber(parseInt(values.businessPhone));
          handleStepChange("contact", values);
          handleSubmit(values);
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
