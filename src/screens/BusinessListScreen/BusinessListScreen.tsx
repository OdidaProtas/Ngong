import { Grid, Typography } from "@mui/material";
import React from "react";
import { BusinessItemComponent } from "../../components";

const businesses = [1, 2, 3, 4, 5];

export default function BusinessListScreen() {
  return (
    <div>
      <Typography variant="h6">My Businesses</Typography>
      <Typography variant="caption">
        View, manage edit and set default business
      </Typography>
      <Grid container spacing={2}>
        {businesses.map((buss, idx) => {
          return (
            <Grid key={idx} item xs={12} md={6} lg={4}>
              <BusinessItemComponent />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
