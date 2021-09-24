import { Grid } from "@mui/material";
import {
  OnboardingComponent,
  AuthenticationFormComponent,
  StyledBackground,
} from "../../components";

const fields = [
  { label: "Your Phone Number", name: "phoneNumber", placeholder: "+254" },
  { label: "Create Password", name: "password", placeholder: "Enter Password" },
];

export default function LoginScreen() {
  return (
    <div>
      <Grid
        container
      >
        <Grid item xs={12} lg={6}>
          <OnboardingComponent />
        </Grid>
        <Grid item xs={12} lg={6}>
          <StyledBackground backgroundImage>
            <AuthenticationFormComponent context="login" fields={fields} />
          </StyledBackground>
        </Grid>
      </Grid>
    </div>
  );
}
