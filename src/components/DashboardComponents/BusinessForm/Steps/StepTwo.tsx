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
import { getCountNames, getSubcouties } from "../../../../state/data/locations";

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
    const id = user.uid;
  };

  const next = () => {
    history.push("/admin");
  };

  const counties = getCountNames();

  console.log(getSubcouties(counties[0]));

  const handleClose = () => {};
  return (
    <div>
      <div style={{ marginBottom: "18px" }}>YOUR STORE ADDRESS</div>
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
    </div>
  );
}

const btnStyles: any = {
  textTransform: "none",
};
