import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import phoneRegExp from "../../constants/phoneRegExp";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button, InputAdornment, TextField } from "@mui/material";
import useStyles from "./PasswordFromComponent.styles";
import { useAxiosRequest } from "../../hooks";
import { LoadingBtnComponent } from "..";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const validationSchemas: any = {
  changePassword: Yup.object().shape({
    currentPassword: Yup.string().required("Current password is required"),
    newPassword: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short"),
  }),
  forgotPassword: Yup.object().shape({
    phone: Yup.string()
      .matches(phoneRegExp, "Could not validate phone number")
      .required("Phone number is required"),
  }),
  resetPassword: Yup.object().shape({
    phone: Yup.string()
      .matches(phoneRegExp, "Could not validate phone number")
      .required("Phone number is required"),
    code: Yup.string().test(
      "len",
      "Must be exactly 6 characters",
      (val: any) => val.length === 6
    ),
    password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short"),
  }),
};

const passwordFormFields: any = {
  changePassword: {
    fields: [
      { name: "newPassword", label: "New Password", type: "password" },
      { name: "currentPassword", label: "Current Password", type: "password" },
    ],
    initialValues: {
      newPassword: "",
      currentPassword: "",
    },
  },
  forgotPassword: {
    fields: [{ name: "phone", label: "Enter phone number", type: "number" }],
    initialValues: {
      phone: "",
    },
  },
  resetPassword: {
    fields: [
      { name: "phone", label: "Enter Phone Number", type: "number" },
      { name: "code", label: "Verification Code", type: "number" },
      { name: "password", label: "New Password", type: "number" },
    ],
    initialValues: {
      phone: "",
      code: "",
      password: "",
    },
  },
};

const requestOptions: any = {
  forgotPassword: {
    method: "post",
    context: "forgot-password",
    isAuthenticated: false,
    endpoint: "/auth/forgot-password/",
  },
  resetPassword: {
    method: "post",
    context: "registration",
    isAuthenticated: false,
    endpoint: "/auth/reset-password/",
  },
  changePassword: {
    method: "post",
    context: "registration",
    isAuthenticated: false,
    endpoint: "/auth/change-password/",
  },
};

interface PasswordFormInterface {
  context: any;
  open: boolean;
  toggle: any;
  snackBarHandler: any;
}

export default function PasswordFormComponent({
  context,
  open,
  toggle,
  snackBarHandler,
}: PasswordFormInterface) {
  const { processRequest, data, loading, error } = useAxiosRequest();

  const classes = useStyles();

  const { fields, initialValues } = passwordFormFields[context];
  const validationSchema = validationSchemas[context];

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={toggle}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={toggle}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Reset Password
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Enter phone number to receive a verification code
            </Typography>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                // same shape as initial values
                processRequest({
                  ...requestOptions[context],
                  payload: values,
                  toggleSnackBar: snackBarHandler,
                });
              }}
            >
              {({ errors, touched, values, handleChange }) => (
                <Form>
                  {fields.map((field: any, index: number) => {
                    const { name, label, type } = field;
                    console.log(name);
                    return (
                      <TextField
                        key={index}
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
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              {name === "password " ? (
                                <Typography variant="caption">Show</Typography>
                              ) : null}
                            </InputAdornment>
                          ),
                        }}
                      />
                    );
                  })}
                  <div>
                    {loading ? (
                      <div className={classes.loadingBtnContainer}>
                        <LoadingBtnComponent />
                      </div>
                    ) : (
                      <Button
                        className={classes.btn}
                        type="submit"
                        fullWidth
                        variant="contained"
                      >
                        Submit
                      </Button>
                    )}
                  </div>
                </Form>
              )}
            </Formik>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
