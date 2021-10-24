import ArrowBackIos from "@mui/icons-material/ArrowBackIos";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import { useHistory, useRouteMatch } from "react-router";
import { ButtonWithLoaderComponent } from "../../components/SharedComponents";
import { initialSignUpState, signUpValidationSchema } from "./form";

export default function SignupForm() {
  const { url } = useRouteMatch();
  const history = useHistory();

  const [email, setEmail] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    history.push(`/signin/new`);
  };

  const handleChange = (e: any) => setEmail(e.target.value);

  return (
    <div>
      <Box sx={{ mt: 3 }}>
        <IconButton onClick={() => history.goBack()}>
          <ArrowBackIos />
        </IconButton>
        <Typography sx={{ display: "inline", ml: 3 }} variant="h6">
          Create an account
        </Typography>
        <Typography sx={{ mt: 1 }}>
          Here's where you realize your potential
        </Typography>
        <br />
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
                    required
                    type="email"
                    placeholder="Enter email address"
                    label="Email"
                    fullWidth
                    sx={{ mt: 1 }}
                  />
                  <Grid container spacing={1}>
                    <Grid item xs>
                      <TextField
                        onChange={handleChange}
                        required
                        type="text"
                        placeholder="First name"
                        label="First Name"
                        fullWidth
                        sx={{ mt: 1 }}
                      />
                    </Grid>
                    <Grid item xs>
                      <TextField
                        onChange={handleChange}
                        required
                        type="text"
                        placeholder="Last name"
                        label="Last name"
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
                    required
                    type="password"
                    placeholder="Create a password"
                    label="Password"
                    fullWidth
                    sx={{ mt: 1 }}
                  />
                  <TextField
                    onChange={handleChange}
                    required
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
                      loading={false}
                      title="Continue"
                    />
                    <Button
                      onClick={() => {
                        history.push(`/signin`);
                      }}
                      type="button"
                      size="small"
                      sx={{ textTransform: "none", mt: 1 }}
                    >
                      Aleady have an account? Sign in
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
