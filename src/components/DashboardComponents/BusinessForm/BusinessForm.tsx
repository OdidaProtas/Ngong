import Box from "@mui/material/Box/Box";
import Grid from "@mui/material/Grid/Grid";
import Toolbar from "@mui/material/Toolbar/Toolbar";
import Typography from "@mui/material/Typography/Typography";
import React, { useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import { useAxiosRequest } from "../../../hooks";
import { FormComponent, LogoComponent } from "../../SharedComponents";
import { fields, initialState, validationSchema } from "./form";
import Progress from "./Progress/Progress";
import StepOne from "./Steps/StepOne";
import StepTwo from "./Steps/StepTwo";
import Lottie from "react-lottie";

import SetupImg from "../../../assets/images/setup.png";

import * as animationData from "../../../assets/lotties/setup.json";
import StepRoute from "./Steps/StepRoute";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default function BusinessForm() {
  const { loading } = useAxiosRequest();

  const handleProfileSubmit = (value: any) => {
    console.log(value);
  };

  const handleClose = () => {};
  const { path, url } = useRouteMatch();
  return (
    <div>
      {/* <Progress /> */}
      {/* <Toolbar> */}
      <Box
        sx={{
          display: {
            lg: "none",
            md: "block",
            xs: "block",
            textAlign: "center",
          },
        }}
      >
        <div>
          <LogoComponent />
        </div>
      </Box>
      {/* </Toolbar> */}
      <div style={styles.root}>
        <Grid container>
          <Grid item xs={12} md={8} lg={6}>
            <Typography
              style={{ textAlign: "center" }}
              variant="h5"
              sx={styles.title}
            >
              We'll help you get started
            </Typography>
            <Typography style={{ textAlign: "center" }} sx={styles.subtitle}>
              Answer a few questions and we'll set up your store based on the
              answers
            </Typography>
            <Switch>
              <StepRoute
                exact
                path={path}
                component={StepOne}
              />
              <Route exact path={`${path}/step-two`}>
                <StepTwo />
              </Route>
              <Route path={`**`}>Can't find what you are looking for</Route>
            </Switch>
          </Grid>
          <Grid item xs={12} md={4} lg={6}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "70px",
              }}
            >
              <Lottie options={defaultOptions} height={400} width={400} />
              {/* <img width="90%" src={SetupImg} alt="Setup illustration" /> */}
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

const styles: any = {
  root: {
    paddingTop: "10px",
  },
  title: {
    marginTop: "10px",
    marginBottom: "18px",
  },
  subtitle: {
    marginBottom: "18px",
  },
};
