import Paper from "@mui/material/Paper/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import React from "react";
import Tooltip from "@mui/material/Tooltip";
import TotalSalesChart from "../Charts/TotalSalesChart";

export default function TotalSales() {
  return (
    <div>
      <Paper sx={{ p: 2, mt: 1 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Typography variant="h6">Today's sales</Typography>
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
            <Typography variant="h5">KSH. 0.00</Typography>
          </Box>
          <Box>
            <Typography>-</Typography>
          </Box>
        </Box>
        <Tooltip title="This chart show sales over time from...">
          <Typography sx={{ my: 3 }} color="secondary">
            Sales over time
          </Typography>
        </Tooltip>
        <Box>
          <TotalSalesChart />
        </Box>
      </Paper>
    </div>
  );
}
