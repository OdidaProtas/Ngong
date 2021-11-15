import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import React from "react";

export default function QuickLinks() {
  return (
    <Box sx={{ p: 3, pb: 5 }}>
      <Grid container spacing={2}>
        <Grid item xs>
          <Typography>Quick links</Typography>
          <Typography sx={{ mt: 5, color: "text.secondary" }}>
            Search
          </Typography>
        </Grid>
        <Grid item xs>
          <Typography>Heading</Typography>
          <Typography sx={{ mt: 5, color: "text.secondary" }}>
          Share store details, promotions, or brand content with your customers.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
