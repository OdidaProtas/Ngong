import { Grid, Typography } from "@mui/material";
import { CallToActionComponent, DateComponent } from "..";

import HeroImage from "../../assets/images/startup.svg";
import Hero2Image from "../../assets/images/visual-data.svg";
import useStyles from "./WelcomeComponent.styles";

export default function WelcomeComponent() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.dateContainer}>
        <DateComponent />
      </div>
      <Grid container>
        <Grid item xs={12} lg={6}>
          <Typography className={classes.salutation} variant="h5">
            Welcome John Doe,
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
      <div className={classes.hero2Container}>
        <DateComponent />
        <img className={classes.hero2} src={Hero2Image} alt="" />
        <Typography variant="h5">
          Manage your business and make sales to generate data of your business
        </Typography>
      </div>
    </>
  );
}
