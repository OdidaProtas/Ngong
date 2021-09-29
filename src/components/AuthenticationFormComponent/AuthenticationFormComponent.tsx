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
import { useEffect, useState } from "react";

import { useHistory } from "react-router-dom";
import formatPhoneNumber from "../../constants/formatPhoneNumber";
import PasswordFormComponent from "../PasswordFromComponent/PasswordFormComponent";

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
  // hook to handle network requests
  const { processRequest, data, loading, error } = useAxiosRequest();

  const [modalOpen, setModalOpen] = useState(false);
  const [passwordModalOpen, setPasswordModalOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  const toggleModal = () => setModalOpen((prevState: boolean) => !prevState);
  const togglePasswordModal = () =>
    setPasswordModalOpen((prevState: boolean) => !prevState);

  const handleNavigation = () => {
    const isLogin = context === "login";
    history.push(isLogin ? "/signup" : "/login");
  };

  const [snackBar, setSnackBar] = useState(false);
  const toggleSnackBar = () => {
    setSnackBar((prevState) => !prevState);
  };

  const [passwordFormContext, setPasswordFormContxt] =
    useState("forgotPassword");

  const handleSuccess = () => {
    const isLogin = context === "login";
    if (!isLogin) toggleModal();
    else handleLogin();
  };

  const handleError = () => {
    toggleSnackBar();
  };

  const handleLogin = () => {
    console.log("handling error ");
  };

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
              {loading ? (
                <LoadingBtnComponent />
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
