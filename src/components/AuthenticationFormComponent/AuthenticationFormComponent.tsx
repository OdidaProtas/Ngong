import { Button, InputAdornment, TextField, Typography } from "@mui/material";
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
import { Suspense, useContext, useEffect, useState } from "react";

import { useHistory } from "react-router-dom";
import formatPhoneNumber from "../../constants/formatPhoneNumber";
import PasswordFormComponent from "../PasswordFromComponent/PasswordFormComponent";
import { AuthContext } from "../../state";

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
      <OtpVerificationForm
        phone={phoneNumber}
        open={modalOpen}
        toggle={toggleModal}
        snackBarHandler={toggleSnackBar}
        handleError={handleError}
      />
      <PasswordFormComponent
        handleError={handleError}
        open={passwordModalOpen}
        context={passwordFormContext}
        toggle={togglePasswordModal}
        snackBarHandler={toggleSnackBar}
        toggleContext={togglePasswordFormContext}
      />
      <SnackBarComponent
        toggle={toggleSnackBar}
        message={"An error occured"}
        severity={"error"}
        open={snackBar}
      />
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
          initialValues={initialValues}
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
                >
                  Forgot Password?{" "}
                </Typography>
              </div>
            </Form>
          )}
        </Formik>
        {/* <SignInWithGoogleComponent context={context} title="Register" /> */}
      </div>
    </div>
  );
}
