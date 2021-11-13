import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import React from "react";

export default function Collections() {
  return (
    <div>
      <Typography sx={{ mb: 2, ml: 4 }} variant="h6">
        Collections
      </Typography>
      <Grid mt={-15} container spacing={2} px={3}>
        <Grid item xs>
          <Box>
            <Skeleton animation={false} height={520} />
          </Box>
        </Grid>
        <Grid item xs mt={7}>
          <Box>
            <Skeleton animation={false} height={250} />
          </Box>
          <Box sx={{ mt: -10 }}>
            <Skeleton animation={false} height={250} />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
