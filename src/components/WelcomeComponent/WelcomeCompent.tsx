import { Grid, Typography } from "@mui/material";
import React from "react";
import { CallToActionComponent } from "..";

import HeroImage from "../../assets/images/startup.svg";
import useStyles from "./WelcomeComponent.styles";

export default function WelcomeComponent() {
  const classes = useStyles();
  return (
    <>
      <Grid container>
        <Grid item xs={12} lg={6}>
          <Typography className={classes.salutation} variant="h5">
            Welcome John Doe,{" "}
          </Typography>
          <Typography className={classes.helper} variant="body1">
            To set up your business effectively and smoothly
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <img src={HeroImage} className={classes.img} alt="" />
        </Grid>
      </Grid>
      <div>
        <CallToActionComponent />
      </div>
    </>
  );
}
