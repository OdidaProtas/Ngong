import { Grid } from "@mui/material";
import {
  OnboardingComponent,
  AuthenticationFormComponent,
  StyledBackground,
} from "../../components";
import * as Yup from "yup";
import phoneRegExp from "../../constants/phoneRegExp";
import { Suspense } from "react";

const LoginValidationSchema = Yup.object().shape({
  phone: Yup.string()
    .matches(phoneRegExp, "Could not validate phone number")
    .required("Phone Number is required"),
  password: Yup.string().required("Please enter your password"),
  terms: Yup.boolean()
    .oneOf([true], "Message")
    .required("Accept terms and conditions to continue"),
});

const fields = [
  {
    label: "Your Phone Number",
    name: "phone",
    placeholder: "+254",
    type: "number",
  },
  {
    label: "Enter Pasword",
    name: "password",
    placeholder: "Enter Password",
    type: "password",
  },
];

const initalValues = {
  phone: "",
  password: "",
};

const requestOptions = {
  method: "post",
  context: "login",
  isAuthenticated: false,
  endpoint: "/auth/login/",
};

export default function LoginScreen() {
  return (
    <div>
      <Grid container>
        <Grid item xs={12} lg={6}>
          <Suspense fallback={<div></div>}>
            <OnboardingComponent />
          </Suspense>
        </Grid>
        <Grid item xs={12} lg={6}>
          <StyledBackground backgroundImage>
            <Suspense fallback={<div></div>}>
              <AuthenticationFormComponent
                validationSchema={LoginValidationSchema}
                context="login"
                fields={fields}
                initialValues={initalValues}
                options={requestOptions}
                title={"Sign In"}
                subtitle={"New user? Create Account"}
                btnText={"Login"}
              />
            </Suspense>
          </StyledBackground>
        </Grid>
      </Grid>
    </div>
  );
}
