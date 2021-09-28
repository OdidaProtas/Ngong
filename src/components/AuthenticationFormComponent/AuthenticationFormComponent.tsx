import { Button, InputAdornment, TextField, Typography } from "@mui/material";
import useStyles from "./AuthenticationFormComponent.styles.ts";

const regTitle = "Create Account";
const loginTitle = "Sign In";
const formHelper = "Already have an account? Login";
const formHelperSignup = "New user? Create Account";
import regDeco from "../../assets/images/registrationBg.svg";
import loginDeco from "../../assets/images/loginBg.svg";
import { Formik, Form } from "formik";
import { useAxiosRequest } from "../../hooks";
import { OtpVerificationForm, SignInWithGoogleComponent } from "..";
import { useEffect, useState } from "react";

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
  const { processRequest, data, loading, error } = useAxiosRequest();
  const [modalOpen, setModalOpen] = useState(true);
  const toggleModal = () => setModalOpen((prevState: boolean) => !prevState);

  useEffect(() => {
    const modal = () => {
      if (data) {
        // toggleModal();
      }
    };
    modal();
  }, [data]);

  const handleOtp = (value: any) => {};

  return (
    <div style={{ height: "100vh" }}>
      <OtpVerificationForm
        phone={"F"}
        open={modalOpen}
        toggle={toggleModal}
      />
      <DecoItem context={context} />
      <div className={classes.root}>
        <Typography variant="h6" className={classes.title}>
          {title}
        </Typography>
        <Typography className={classes.helperText} variant="body2">
          {subtitle}
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
                    <Typography variant="caption">{label}</Typography>
                    <TextField
                      fullWidth
                      size="small"
                      name={name}
                      className={classes.textInput}
                      label={placeholder}
                      error={touched[name] && Boolean(errors[name])}
                      value={values[name]}
                      onChange={handleChange}
                      helperText={touched[name] && errors[name]}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            {name === "password " ? (
                              <Typography variant="caption">Show</Typography>
                            ) : null}
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>
                );
              })}
              {loading ? null : (
                <Button
                  className={classes.submitBtn}
                  size="small"
                  variant="contained"
                  fullWidth
                  type="submit"
                >
                  {btnText}
                </Button>
              )}
            </Form>
          )}
        </Formik>
        <SignInWithGoogleComponent context={context} title="Register" />
      </div>
    </div>
  );
}
