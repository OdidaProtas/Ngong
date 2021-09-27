import { Container, Grid } from "@mui/material";
import React from "react";
import { DateComponent } from "..";
import {
  ChurnRateChart,
  CustomerVisitingChart,
  MostSellingChart,
  RevenueChart,
} from "../../charts";
import useStyles from "./ChartsComponent.styles";

export default function ChartsComponent() {
  const classes = useStyles();
  return (
    <Container>
      <div className={classes.dateContainer}>
        <DateComponent />
      </div>

      {/* section */}
      <Grid container>
        <Grid item xs={12} md={12} lg={7}>
          {/* <ChurnRateChart /> */}
        </Grid>
        <Grid item xs={12} md={12} lg={5}>
          {/* <MostSellingChart /> */}
        </Grid>
      </Grid>
      {/* section */}
      <div className={classes.section}>
        <Grid container spacing={1}>
          <Grid item xs={12} lg={7}>
            {/* <RevenueChart /> */}
          </Grid>
          <Grid item xs={12} lg={5}>
            {/* <CustomerVisitingChart /> */}
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
