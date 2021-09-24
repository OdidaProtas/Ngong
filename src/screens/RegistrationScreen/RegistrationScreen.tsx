import { Grid } from "@mui/material";
import {
  AuthenticationFormComponent,
  OnboardingComponent,
  StyledBackground,
} from "../../components";

const fields = [
  {
    label: "Your Fullname",
    name: "fullname",
    placeholder: "Enter your Full Name",
  },
  { label: "Your Phone Number", name: "phoneNumber", placeholder: "+254" },
  { label: "Email Address", name: "email", placeholder: "Enter email address" },
  { label: "Create Password", name: "password", placeholder: "Enter password" },
];

export default function RegistrationScreen() {
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
            />
          </StyledBackground>
        </Grid>
      </Grid>
    </>
  );
}
