import React from "react";
import useStyles from "./RegistrationFormComponent.styles";

const title = "Create Account";

const fields = [{ label: "Your fullname" }];

export default function RegistrationFormComponent() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <p>{title}</p>
    </div>
  );
}
