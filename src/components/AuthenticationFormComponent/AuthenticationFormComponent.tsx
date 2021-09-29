import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import useStyles from "./AuthenticationFormComponent.styles.ts";

import regDeco from "../../assets/images/registrationBg.svg";
import loginDeco from "../../assets/images/loginBg.svg";
import { Formik, Form } from "formik";
import { useAxiosRequest } from "../../hooks";
import {
  LoadingBtnComponent,
  OtpVerificationForm,
  SnackBarComponent,
} from "..";
import { Suspense, useContext, useState } from "react";

import { useHistory } from "react-router-dom";
import formatPhoneNumber from "../../constants/formatPhoneNumber";
import PasswordFormComponent from "../PasswordFromComponent/PasswordFormComponent";
import { AuthContext } from "../../state";

import { LazyLoadImage } from "react-lazy-load-image-component";

interface DecoItemInterface {
  context: string;
}

const DecoItem = ({ context }: DecoItemInterface) => {
  const classes = useStyles();
  const isLogin = context === "login";
  return (
    <>
      <div className={isLogin ? classes.loginDecoContainer : ""}>
        <LazyLoadImage
          className={isLogin ? classes.decoSvg : classes.regSvg}
          src={isLogin ? loginDeco : regDeco}
        />
        <img />
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
  const history = useHistory();
  const isLogin = context === "login";
  const { signIn }: any = useContext(AuthContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [snackBar, setSnackBar] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [passwordModalOpen, setPasswordModalOpen] = useState(false);

  // hook to handle network requests
  const { processRequest, loading } = useAxiosRequest();

  const toggleModal = () => setModalOpen((prevState: boolean) => !prevState);
  const togglePasswordModal = () =>
    setPasswordModalOpen((prevState: boolean) => !prevState);

  const handleLogin = (token: string) => signIn(token);
  const handleError = () => toggleSnackBar();
  const toggleSnackBar = () => setSnackBar((prevState) => !prevState);
  const handleNavigation = () => {
    history.push(isLogin ? "/signup" : "/login");
  };

  const [passwordFormContext, setPasswordFormContxt] =
    useState("forgotPassword");

  const handleSuccess = (token: string) => {
    const isLogin = context === "login";
    if (!isLogin) toggleModal();
    else handleLogin(token);
  };

  const togglePasswordFormContext = (context: string) =>
    setPasswordFormContxt(context);

  return (
    <div>
      <Suspense fallback={<div></div>}>
        <OtpVerificationForm
          phone={phoneNumber}
          open={modalOpen}
          toggle={toggleModal}
          snackBarHandler={toggleSnackBar}
          handleError={handleError}
        />
      </Suspense>
      <Suspense fallback={<div></div>}>
        <PasswordFormComponent
          handleError={handleError}
          open={passwordModalOpen}
          context={passwordFormContext}
          toggle={togglePasswordModal}
          snackBarHandler={toggleSnackBar}
          toggleContext={togglePasswordFormContext}
        />
      </Suspense>
      <Suspense fallback={<div></div>}>
        <SnackBarComponent
          toggle={toggleSnackBar}
          message={"An error occured"}
          severity={"error"}
          open={snackBar}
        />
      </Suspense>

      <DecoItem context={context} />
      <div className={classes.root}>
        <Typography variant="h6" className={classes.title}>
          {title}
        </Typography>

        <Typography
          onClick={handleNavigation}
          className={classes.helperText}
          variant="body2"
        >
          {subtitle}
        </Typography>
        <Formik
          initialValues={{ ...initialValues, terms: false }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            const phoneNumber = formatPhoneNumber(values.phone);
            setPhoneNumber(phoneNumber.toString());
            processRequest({
              ...options,
              payload: { ...values, phone: phoneNumber },
              errorHandler: handleError,
              successHandler: handleSuccess,
            });
          }}
        >
          {({ errors, touched, values, handleChange }) => (
            <Form>
              {fields.map((field: any, index: number) => {
                const { name, label, placeholder, type } = field;
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
                      type={type}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            {type === "password " ? (
                              <Typography variant="caption">Show</Typography>
                            ) : null}
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>
                );
              })}
              <div>
                <FormGroup
                >
                  <FormControlLabel
                    // helperText={touched.terms && errors.terms}
                    control={
                      <Checkbox
                        onChange={handleChange}
                        name="terms"
                        value={values.terms}
                      />
                    }
                    label="I agree to terms & conditions"
                  />
                  {touched.terms && Boolean(errors.terms) ? (
                    <Typography className={classes.helperTexterr} variant="caption">
                      Accept terms and conditions to continue
                    </Typography>
                  ) : null}
                </FormGroup>
              </div>
              {loading ? (
                <Suspense fallback={<div></div>}>
                  <LoadingBtnComponent />
                </Suspense>
              ) : (
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
              <div>
                <Typography
                  onClick={togglePasswordModal}
                  className={classes.forgotPasswordText}
                  variant="body2"
                >
                  Forgot Password?
                </Typography>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
