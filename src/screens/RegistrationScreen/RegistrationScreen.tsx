import { Grid } from "@mui/material";
import { useContext } from "react";
import {
  AuthenticationFormComponent,
  OnboardingComponent,
  StyledBackground,
} from "../../components";
import { AuthContext } from "../../state/authstate";
import * as Yup from "yup";
import phoneRegExp from "../../constants/phoneRegExp";

const RegistrationValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short")
    .max(50, "Name too long")
    .required("Name is required"),
  phone: Yup.string()
    .matches(phoneRegExp, "Could not validate phone number")
    .required("Phone number is required"),
  email: Yup.string().email("Invalid Email").required("Email is required"),
  password: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short"),
  terms: Yup.boolean()
    .oneOf([true], "Message")
    .required("Accept terms and conditions to continue"),
});

const fields = [
  {
    label: "Your Fullname",
    name: "name",
    placeholder: "Enter your Full Name",
    type: "text",
  },
  {
    label: "Your Phone Number",
    name: "phone",
    placeholder: "+254",
    type: "number",
  },
  {
    label: "Email Address",
    name: "email",
    placeholder: "Enter email address",
    type: "email",
  },
  {
    label: "Create Password",
    name: "password",
    placeholder: "Enter password",
    type: "password",
  },
];

const initalValues = {
  phone: "",
  password: "",
  email: "",
  name: "",
};

const requestOptions = {
  method: "post",
  context: "registration",
  isAuthenticated: false,
  endpoint: "/auth/register/",
};

export default function RegistrationScreen() {
  const { user } = useContext(AuthContext) as any;
  return (
    <>
      <Grid container>
        <Grid item xs={12} lg={6}>
          <OnboardingComponent />
        </Grid>
        <Grid item xs={12} lg={6}>
          <StyledBackground backgroundImage>
            <AuthenticationFormComponent
              context="registration"
              fields={fields}
              validationSchema={RegistrationValidationSchema}
              initialValues={initalValues}
              options={requestOptions}
              title={"Create Account"}
              subtitle={"Already have an account? Login"}
              btnText={"Register Account"}
            />
          </StyledBackground>
        </Grid>
      </Grid>
    </>
  );
}
