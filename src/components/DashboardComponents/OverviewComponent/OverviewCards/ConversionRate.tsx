import Paper from "@mui/material/Paper/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import React from "react";
import Tooltip from "@mui/material/Tooltip";
import TotalSalesChart from "../Charts/TotalSalesChart";

export default function ConversionRate() {
  return (
    <div>
      <Paper sx={{ p: 2, mt: 1 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Typography variant="h6">Online store conversion rate</Typography>
          </Box>
          <Box>
            <Button
              color="secondary"
              sx={{ textTransform: "none" }}
              size="small"
            >
              View report
            </Button>
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Typography variant="h5">0%</Typography>
          </Box>
          <Box>
            <Typography>-</Typography>
          </Box>
        </Box>
        <Tooltip title="This chart show sales over time from...">
          <Typography sx={{ my: 3 }} color="secondary">
            Conversion funnel
          </Typography>
        </Tooltip>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Typography>Added to cart</Typography>
            <Typography variant="caption">0 sessions</Typography>
          </Box>
          <Box>
            <Typography>0.00% - </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Typography>Reached Checkout</Typography>
            <Typography variant="caption">0 sessions</Typography>
          </Box>
          <Box>
            <Typography>0.00% - </Typography>
          </Box>
        </Box>{" "}
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Typography>Sessions converted</Typography>
            <Typography variant="caption">0 sessions</Typography>
          </Box>
          <Box>
            <Typography>0.00% - </Typography>
          </Box>
        </Box>
      </Paper>
    </div>
  );
}
