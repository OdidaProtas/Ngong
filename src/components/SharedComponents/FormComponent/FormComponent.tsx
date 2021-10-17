import { Button, Divider, TextField } from "@mui/material";
import React, { Suspense } from "react";
import { SnackBarComponent, ButtonWithLoaderComponent } from "..";



// import useStyles from "../LogoComponent/LogoComponent.styles";
import { Formik, Form } from "formik";
import { SnackBarComponentInterface } from "../SnackBarComponent/SnackBarComponent";

interface FormComponentInterface {
  fields: any;
  validationShema: any;
  initialState: any;
  handleSubmit: any;
  loading: boolean;
  snackBarOptions: SnackBarComponentInterface;
}

export default function FormComponent({
  fields,
  initialState,
  validationShema,
  handleSubmit,
  loading,
  snackBarOptions,
}: FormComponentInterface) {
//   const classes = useStyles();
  const { message, severity, open, handleClose } = snackBarOptions;
  return (
    <div>
      <Formik
        validationSchema={validationShema}
        initialValues={initialState}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, values, handleChange }) => (
          <Form>
            {fields.map((field: any, index: number) => {
              const { name, type, label } = field;
              return (
                <div key={index}>
                  <TextField
                    fullWidth
                    size="small"
                    name={name}
                    label={label}
                    sx={styles.textInput}
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
              <Suspense fallback={<div></div>}>
                <ButtonWithLoaderComponent loading={loading} />
              </Suspense>
            </div>
            <Divider />
          </Form>
        )}
      </Formik>
      <Suspense fallback={<div></div>}>
        <SnackBarComponent
          open={open}
          severity={severity}
          message={message}
          handleClose={handleClose}
        />
      </Suspense>
    </div>
  );
}

const styles: any = {
  textInput:{
    marginBottom:"10px"
  }
}