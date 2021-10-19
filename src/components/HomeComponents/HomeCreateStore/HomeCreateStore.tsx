import firebase from "firebase";
import React, { useState } from "react";
import formatPhoneNumber from "../../../constants/helpers/formatPhoneNumber";
import { useAxiosRequest } from "../../../hooks";
import { auth } from "../../../state/firebase/firebase";
import FormComponent from "../../SharedComponents/FormComponent/FormComponent";

import { useHistory } from "react-router";

import { fields, validationSchema, initialState } from "./form";
import Typography from "@mui/material/Typography/Typography";
import TextField from "@mui/material/TextField/TextField";
import Button from "@mui/material/Button/Button";
import { SnackBarComponent } from "../../SharedComponents";

export default function HomeCreateStore() {
  // const { loading } = useAxiosRequest();
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [formValue, setformValue] = useState(false);
  const [show, setshow] = useState(false);
  const [final, setfinal]: any = useState("");
  const [otp, setotp] = useState("");

  const handleClose = () => {};
  const handleSubmit = (value: any) => {
    setLoading(true);
    const { phone } = value;
    const formatted: any = formatPhoneNumber(parseInt(phone));

    let verify = new firebase.auth.RecaptchaVerifier("recaptcha-container");
    auth
      .signInWithPhoneNumber(formatted, verify)
      .then((result) => {
        setfinal(result);

        alert("code sent");
        setshow(true);
      })
      .catch((err) => {
        alert(err);
        window.location.reload();
      });
  };

  const ValidateOtp = () => {
    if (otp === null || final === null) return;
    final
      .confirm(otp)
      .then((result: any) => {
        // success
        history.push("/admin");
      })
      .catch((err: any) => {
        alert("Wrong code");
      });
  };
  return (
    <div>
      <SnackBarComponent open={false} severity={undefined} message={""} handleClose={undefined}/>
      <div style={{ display: !show ? "block" : "none" }}>
        {!loading ? (
          <FormComponent
            fields={fields}
            validationShema={validationSchema}
            initialState={initialState}
            handleSubmit={handleSubmit}
            loading={show}
            btnTitle="Sign me up"
            snackBarOptions={{
              open: false,
              severity: "error",
              message: "An error occured",
              handleClose: handleClose,
            }}
          />
        ) : (
          <div>
            <div>
              <Typography>Confirm you are not a robot</Typography>
            </div>
            <div id="recaptcha-container"></div>
          </div>
        )}
      </div>
      <div style={{ display: show ? "block" : "none" }}>
        <TextField
          type="text"
          fullWidth
          placeholder={"Enter your OTP"}
          onChange={(e) => {
            setotp(e.target.value);
          }}
        />
        <br />
        <br />
        <Button
          fullWidth
          color="secondary"
          disableElevation
          variant="contained"
          onClick={ValidateOtp}
        >
          Verify
        </Button>
      </div>
    </div>
  );
}
