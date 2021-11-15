import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import React from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";

export default function Collections({ mode }) {
  const isMobile = mode === "mobile";
  return (
    <div>
      <Typography sx={{ ml: 4 }} variant="h5">
        Collections
      </Typography>
      <Grid mt={1} container spacing={2} px={3}>
        <Grid item xs={isMobile ? 12 : 6} lg={isMobile ? 12 : 6}>
          <Box
            sx={{
              height: "300px",
              bgcolor: "lightgray",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconButton size="large">
              <PlayCircleIcon sx={{ color: "white" }} />
            </IconButton>
            {/* <Skeleton animation={false} height={520} /> */}
          </Box>
        </Grid>
        <Grid item xs>
          <Box
            sx={{
              height: "122px",
              bgcolor: "lightgray",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h6">Example product title</Typography>
          </Box>
          <Typography sx={{ m: 1 }}>Ksh 19.99</Typography>
          <Divider />
          <Box
            sx={{
              height: "122px",
              bgcolor: "lightgray",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mt: 2,
              p:2
            }}
          >
            <Typography variant="h6">Your collection's name</Typography>
            <IconButton sx={{ mr: 2 }} size="small">
              <ArrowForwardIos />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
