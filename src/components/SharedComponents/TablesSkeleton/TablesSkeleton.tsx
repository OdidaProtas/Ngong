import * as React from "react";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Grid from "@mui/material/Grid";

export default function TablesSkeleton() {
  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={12} lg={8}>
          <Box
            sx={{
              mt: 1,
            }}
          >
            <Grid container>
              <Grid
                sx={{ bgcolor: "background.paper", p: 2, pb: 2, mb: 3 }}
                item
                xs={8}
                lg={9}
              >
                <Skeleton  animation="wave" />
                <Skeleton width={"90%"} animation="wave" />
              </Grid>
              <Grid item></Grid>
            </Grid>
            <Box sx={{ bgcolor: "background.paper", p: 2 }}>
              <Skeleton width={"20%"} />
              <Skeleton height={100} animation="wave" />
              <Skeleton width={20} animation={false} />
            </Box>

            <Box sx={{ bgcolor: "background.paper", height: "100%", mt: 3, p:2 }}>
              <Skeleton />
              <Skeleton animation="wave" />
              <Skeleton animation={false} />
            </Box>
            <Box sx={{ bgcolor: "background.paper", height: "100%", mt: 3, p:2 }}>
              <Skeleton />
              <Skeleton animation="wave" />
              <Skeleton sx={{pt:6, pb:8}} animation={false} />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} lg={4}>
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
    </div>
  );
}
