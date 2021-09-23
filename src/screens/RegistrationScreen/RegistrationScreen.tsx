import { Grid } from "@mui/material";
import {
  AuthenticationFormComponent,
  OnboardingComponent,
  StyledBackground,
} from "../../components";

const fields = [
  { label: "Your Fullname", name: "fullname" },
  { label: "Your Phone Number", name: "phoneNumber" },
  { label: "Email Address", name: "email" },
  { label: "Create Password", name: "password" }];

export default function RegistrationScreen() {
  return (
    <>
      <Grid container>
        <Grid item xs={6}>
          <OnboardingComponent />
        </Grid>
        <Grid item xs={6}>
          <StyledBackground backgroundImage>
            <AuthenticationFormComponent fields={fields} />
          </StyledBackground>
        </Grid>
      </Grid>
    </>
  );
}
