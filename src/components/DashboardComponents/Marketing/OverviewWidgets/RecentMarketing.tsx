import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import React from "react";
import RecentMarketingTable from "./RecentMarketingTable";
import RecentMarketingTableMobile from "./RecentMarketingTableMobile";

export default function RecentMarketing() {
  return (
    <div>
      <Box
        sx={{ bgcolor: "background.paper", mt: 1, borderRadius: "4px" }}
        p={2}
      >
        <Typography sx={{ fontWeight: "bold", my: 2 }}>
          Recent marketing
        </Typography>
        <Divider />
        <Box sx={{ display: { lg: "block", xs: "none" } }}>
          <RecentMarketingTable />
        </Box>
        <Box sx={{ display: { lg: "none", xs: "block" } }}>
          <RecentMarketingTableMobile />
        </Box>
      </Box>
    </div>
  );
}
