import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import React from "react";

export default function MultiColumn() {
  return (
    <Box sx={{ m: 3, p: 1 }}>
      <Typography sx={{ mb: 2 }} variant="h5">
        Multicolumn
      </Typography>
      <Grid container spacing={2}>
        {[1, 2, 3].map((e, idx) => (
          <Grid item xs key={e}>
            <Box sx={{ bgcolor: "lightgray", height: 280, p: 1 }}>
              <Typography variant="h6" sx={{ color: "text.secondary", my: 2 }}>
                Column
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
