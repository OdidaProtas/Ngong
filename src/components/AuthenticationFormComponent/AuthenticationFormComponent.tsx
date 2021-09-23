import { Button, Checkbox, TextField, Typography, FormGroup, FormControlLabel } from "@mui/material";
import useStyles from "./AuthenticationFormComponent.styles.ts";

const title = "Create Account";
const formHelper = "Already have an account? Login"

import deco from "../../assets/images/registrationBg.svg"
import { SignInWithGoogleComponent } from "..";


const conditionsLabel = "I agree to terms & conditions"

interface RegistrationFormInterface {
  fields: any
}

export default function AuthenticationFormComponent({ fields }: RegistrationFormInterface) {
  const classes = useStyles();
  return (

    <div>
      <img src={deco} style={{ maxHeight: "100%", maxWidth: "100%" }} />
      <div className={classes.root}>
        <Typography variant="h5" className={classes.title}>{title}</Typography>
        <Typography className={classes.helperText} variant="body2">{formHelper}</Typography>
        <form className={classes.form}>
          {fields.map((field: any, index: number) => {
            const { label, name } = field;
            return <div>
              <Typography variant="caption" className={classes.formInputLabel}>{`${label}*`}</Typography>
              < TextField size="small" fullWidth className={classes.textInput} key={index} label={label} name={name} />
            </div>
          })}
          <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked />} label={conditionsLabel} />
          </FormGroup>
          <Button className={classes.submitBtn} fullWidth size="small" variant="contained">Register Account</Button>
        </form>
        <SignInWithGoogleComponent title="Register" />
      </div>
    </div>
  );
}
