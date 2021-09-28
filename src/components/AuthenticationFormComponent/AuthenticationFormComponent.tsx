import { Button, TextField, Typography } from "@mui/material";
import useStyles from "./AuthenticationFormComponent.styles.ts";

const regTitle = "Create Account";
const loginTitle = "Sign In";
const formHelper = "Already have an account? Login";
const formHelperSignup = "New user? Create Account";
import regDeco from "../../assets/images/registrationBg.svg";
import loginDeco from "../../assets/images/loginBg.svg";
import { AuthModalForm } from "..";
import { Formik, Form, Field } from "formik";
import useAxiosRequest, {
  UseAxiosRequestInterface,
} from "../../hooks/network/useAxiosRequest";

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
    </>
  );
};

interface RegistrationFormInterface {
  fields: any;
  context: string;
  validationSchema: any;
  initialValues: any;
  options: any;
  title: string;
  subtitle: string;
  btnText: string;
}

export default function AuthenticationFormComponent({
  fields,
  context,
  validationSchema,
  initialValues,
  options,
  title,
  subtitle,
  btnText,
}: RegistrationFormInterface) {
  const classes = useStyles();
  const isLogin = context === "login";

  const { processRequest, data, loading, error } = useAxiosRequest();

  return (
    <div style={{ height: "100vh" }}>
      {/* <AuthModalForm /> */}
      <DecoItem context={context} />
      <div className={classes.root}>
        <Typography variant="h6" className={classes.title}>
          {isLogin ? loginTitle : regTitle}
        </Typography>
        <Typography className={classes.helperText} variant="body2">
          {isLogin ? formHelperSignup : formHelper}
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            processRequest({ ...options, payload: values });
          }}
        >
          {({ errors, touched, values, handleChange }) => (
            <Form>
              {fields.map((field: any, index: number) => {
                const { name, label, placeholder } = field;
                return (
                  <div key={index}>
                    <Typography>{label}</Typography>
                    <TextField
                      fullWidth
                      size="small"
                      name={name}
                      label={placeholder}
                      error={touched[name] && Boolean(errors[name])}
                      value={values[name]}
                      onChange={handleChange}
                      helperText={touched[name] && errors[name]}
                    />
                  </div>
                );
              })}
              <Button size="small" variant="contained" fullWidth type="submit">
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </div>
      {/* <SignInWithGoogleComponent context={context} title="Register" /> */}
    </div>
  );
}
