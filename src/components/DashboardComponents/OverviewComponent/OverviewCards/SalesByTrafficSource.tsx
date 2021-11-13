import Paper from "@mui/material/Paper/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import React from "react";
import Tooltip from "@mui/material/Tooltip";
import TotalSalesChart from "../Charts/TotalSalesChart";

export default function SalesByTrafficSource() {
  return (
    <div>
      <Paper sx={{ p: 2, mt: 1 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Tooltip title="This chart show sales over time from...">
            <Typography variant="body1" sx={{ my: 3 }} color="secondary">
              Sales by traffic source
            </Typography>
          </Tooltip>
          <Box>
            <Typography>
              <Button
                color="secondary"
                sx={{ textTransform: "none" }}
                size="small"
              >
                View report
              </Button>
            </Typography>
          </Box>
        </Box>

        <Box>
          <Typography>There were no sales in this date range.</Typography>
        </Box>
      </Paper>
    </div>
  );
}
