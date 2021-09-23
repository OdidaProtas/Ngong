import { Grid } from "@mui/material";
import {
  RegistrationFormComponent,
  OnboardingComponent,
} from "../../components";

export default function RegistrationScreen() {
  return (
    <>
      <Grid container>
        <Grid item xs={6}>
          <OnboardingComponent />
        </Grid>
        <Grid item xs>
          <RegistrationFormComponent />
        </Grid>
      </Grid>
    </>
  );
}
