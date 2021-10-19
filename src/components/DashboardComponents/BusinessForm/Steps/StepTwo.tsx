import Button from "@mui/material/Button/Button";
import TextField from "@mui/material/TextField/TextField";
import Typography from "@mui/material/Typography/Typography";
import React, { useContext, useState } from "react";
import { useHistory, useRouteMatch } from "react-router";
import FormComponent from "../../../SharedComponents/FormComponent/FormComponent";
import { fields, initialState, validationSchema } from "./stepTwo.form";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { StateContext } from "../../../../state/appstate";
import { AuthContext } from "../../../../state";
import { firestore } from "../../../../state/firebase/firebase";

export default function StepTwo() {
  const history = useHistory();
  const { addStore } = useContext(StateContext) as any;
  const { url, path } = useRouteMatch();
  const { user } = useContext(AuthContext) as any;
  const [loading, setLoading] = useState(false);
  const previous = () => {
    // history.push(`${path}/`);
    history.goBack();
  };
  const handleSubmit = (value: any) => {
    setLoading(true);
    firestore
      .collection("stores")
      .doc(user.uid)
      .set(value)
      .then(() => {
        setLoading(false);
        next();
      })
      .catch((e: any) => {
        setLoading(false);
        console.log(e);
      });
    next();
    addStore();
  };

  const next = () => {
    history.push("/admin");
  };

  const handleClose = () => {};
  return (
    <div>
      <div style={{ marginBottom: "18px" }}>STEP TWO</div>
      <FormComponent
        fields={fields}
        validationShema={validationSchema}
        initialState={initialState}
        handleSubmit={handleSubmit}
        loading={loading}
        btnTitle="Complete Setup"
        snackBarOptions={{
          open: false,
          severity: "error",
          message: "An error occured",
          handleClose: handleClose,
        }}
      />
      {/* <div style={{margin:"10px", textAlign:"center"}}>
        <IconButton onClick={previous}>
          <ArrowBackIosIcon />
        </IconButton>
      </div> */}
    </div>
  );
}

const btnStyles: any = {
  textTransform: "none",
};
