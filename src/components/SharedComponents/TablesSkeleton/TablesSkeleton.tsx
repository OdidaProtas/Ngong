import * as React from "react";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Grid from "@mui/material/Grid";

export default function TablesSkeleton() {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs>
          <Box
            sx={{
              bgcolor: "background.paper",
              p: 5,
              mt: 5,
            }}
          >
            <Skeleton />
            <Skeleton animation="wave" />
            <Skeleton animation={false} />
          </Box>
        </Grid>
        <Grid item xs>
          <Box
            sx={{
              bgcolor: "background.paper",
              p: 5,
              mt: 5,
            }}
          >
            <Skeleton />
            <Skeleton animation="wave" />
            <Skeleton animation={false} />
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ bgcolor: "background.paper", height: "100%", p: 5, mt: 5 }}>
        <Skeleton />
        <Skeleton animation="wave" />
        <Skeleton animation={false} />
      </Box>
      <Box sx={{ bgcolor: "background.paper", height: "100%", p: 5, mt: 3 }}>
        <Skeleton />
        <Skeleton animation="wave" />
        <Skeleton animation={false} />
      </Box>
    </div>
  );
}
