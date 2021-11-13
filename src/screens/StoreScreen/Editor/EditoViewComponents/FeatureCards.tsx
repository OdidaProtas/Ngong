import { formLabelClasses } from "@mui/material";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/system/Box";
import React from "react";

export default function FeatureCards() {
  return (
    <div>
      <Grid container spacing={2} px={3}>
        <Grid item xs>
          <Box>
            <Skeleton animation={false} height={280} />
          </Box>
        </Grid>
        <Grid item xs>
          <Box>
            <Skeleton animation={false} height={280} />
          </Box>
        </Grid>
        <Grid item xs>
          <Box>
            <Skeleton animation={false} height={280} />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
