import ArrowBackIos from "@mui/icons-material/ArrowBackIos";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useHistory, useRouteMatch } from "react-router";
import {
  ButtonWithLoaderComponent,
  SnackBarComponent,
} from "../../components/SharedComponents";
import { useAxiosRequest } from "../../hooks";
import useSnackBar from "../../hooks/modals/useSnackBar";
import { axiosInstance } from "../../state";
import { initialSignUpState, signUpValidationSchema } from "./form";

export default function SignupForm() {
  const { url } = useRouteMatch();
  const history = useHistory();

  const [loading, setLoading] = useState(false);

  const { processRequest, data, error }: any = useAxiosRequest();
  const { open, toggle, toggleOn, msg, severity } = useSnackBar();

  const handleError = () => {
    toggleOn({
      m: "An error occured. Email may have been registered",
      sev: "error",
    });
  };

  const handleSuccess = () => {};

  const handleSubmit = (values: any) => {
    setLoading(true);
    axiosInstance
      .post("/users", values)
      .then((res) => {
        setLoading(false);  
        history.push(`/signin`);
      })
      .catch((e) => {
        setLoading(false);
        console.log(e);
      });
  };

  return (
    <div>
      <SnackBarComponent
        open={open}
        severity={severity}
        message={msg}
        handleClose={toggle}
      />
      <Box>
        <div style={{ display: "flex" }}>
          <Box>
            <IconButton onClick={() => history.goBack()}>
              <ArrowBackIos />
            </IconButton>
          </Box>
          <Typography sx={{ display: "inline", mt: 0.6 }} variant="h6">
            Create an account
          </Typography>
        </div>
        <Typography sx={{ mt: 1 }}>
          Here's how you realize your potential
        </Typography>
        <Divider sx={{ mt: 1, mb: 1 }} />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* <form onSubmit={handleSubmit} style={{ width: "100%" }}> */}
          <Formik
            validationSchema={signUpValidationSchema}
            initialValues={initialSignUpState}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, values, handleChange }) => (
              <Form>
                <div>
                  <TextField
                    onChange={handleChange}
                    type="email"
                    placeholder="Enter email address"
                    label="Email"
                    name="email"
                    value={values.email}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                    fullWidth
                    sx={{ mt: 1 }}
                  />
                  <Grid container spacing={1}>
                    <Grid item xs>
                      <TextField
                        onChange={handleChange}
                        type="text"
                        placeholder="First name"
                        label="First Name"
                        name="firstName"
                        value={values.firstName}
                        error={touched.firstName && Boolean(errors.firstName)}
                        helperText={touched.firstName && errors.firstName}
                        fullWidth
                        sx={{ mt: 1 }}
                      />
                    </Grid>
                    <Grid item xs>
                      <TextField
                        onChange={handleChange}
                        type="text"
                        placeholder="Last name"
                        label="Last name"
                        name="lastName"
                        value={values.lastName}
                        error={touched.lastName && Boolean(errors.lastName)}
                        helperText={touched.lastName && errors.lastName}
                        fullWidth
                        sx={{ mt: 1 }}
                      />
                    </Grid>
                  </Grid>
                  <Typography variant="caption" sx={{ mt: 1 }}>
                    Enter your legal first and last name.
                  </Typography>
                  <TextField
                    onChange={handleChange}
                    type="password"
                    placeholder="Create a password"
                    label="Password"
                    name="password"
                    value={values.password}
                    error={touched.password && Boolean(errors.password)}
                    helperText={touched.password && errors.password}
                    fullWidth
                    sx={{ mt: 1 }}
                  />
                  <TextField
                    onChange={handleChange}
                    name="confirmPassword"
                    value={values.confirmPassword}
                    error={
                      touched.confirmPassword && Boolean(errors.confirmPassword)
                    }
                    helperText={
                      touched.confirmPassword && errors.confirmPassword
                    }
                    type="password"
                    placeholder="Retype your password"
                    label="Confirm password"
                    fullWidth
                    sx={{ mt: 1 }}
                  />
                  <Typography variant="caption" sx={{ mt: 2 }}>
                    By proceeding, you agree to the Terms and Conditions
                  </Typography>
                  <Box sx={{ mt: 3 }}>
                    <ButtonWithLoaderComponent
                      loading={loading}
                      title="Continue"
                    />
                    <Button
                      onClick={() => {
                        history.push(`/signin`);
                      }}
                      type="button"
                      size="small"
                      sx={{ textTransform: "none", mt: 2, mb: 2 }}
                    >
                      Already have an account? Sign in
                    </Button>
                  </Box>
                </div>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
    </div>
  );
}
