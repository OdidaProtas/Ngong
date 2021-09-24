import {
  Button,
  Checkbox,
  TextField,
  Typography,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import useStyles from "./AuthenticationFormComponent.styles.ts";

const regTitle = "Create Account";
const loginTitle = "Sign In";
const formHelper = "Already have an account? Login";

import regDeco from "../../assets/images/registrationBg.svg";
import loginDeco from "../../assets/images/loginBg.svg";
import { SignInWithGoogleComponent } from "..";

const conditionsLabel = "I agree to terms & conditions";

interface DecoItemInterface {
  context: string;
}

const DecoItem = ({ context }: DecoItemInterface) => {
  const classes = useStyles();
  const isLogin = context === "login";
  return (
    <>
      <div className={isLogin ? classes.loginDecoContainer : ""}>
        <img
          src={isLogin ? loginDeco : regDeco}
          className={isLogin ? classes.decoSvg : classes.regSvg}
        />
      </div>
      )
    </>
  );
};

interface RegistrationFormInterface {
  fields: any;
  context: string;
}

export default function AuthenticationFormComponent({
  fields,
  context,
}: RegistrationFormInterface) {
  const classes = useStyles();
  const isLogin = context === "login";
  return (
    <div style={{ height: "100vh" }}>
      <DecoItem context={context} />
      <div className={classes.root}>
        <Typography variant="h6" className={classes.title}>
          {isLogin ? loginTitle : regTitle}
        </Typography>
        <Typography className={classes.helperText} variant="body2">
          {formHelper}
        </Typography>

        <form className={classes.form}>
          {fields.map((field: any, index: number) => {
            const { label, name, placeholder } = field;
            return (
              <div>
                <Typography
                  variant="caption"
                  className={classes.formInputLabel}
                >{`${label}*`}</Typography>
                <TextField
                  size="small"
                  fullWidth
                  className={classes.textInput}
                  key={index}
                  label={placeholder}
                  name={name}
                />
              </div>
            );
          })}
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label={conditionsLabel}
            />
          </FormGroup>
          <Button
            className={classes.submitBtn}
            fullWidth
            size="small"
            variant="contained"
          >
            Register Account
          </Button>
        </form>
        <SignInWithGoogleComponent context={context} title="Register" />
      </div>
    </div>
  );
}
