import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import MarketingApps from "./OverviewWidgets/MarketingApps";
import RecentMarketing from "./OverviewWidgets/RecentMarketing";
import ResultCards from "./OverviewWidgets/ResultCards";

export default function MarketingOverview() {
  return (
    <Box sx={{ my: 1 }}>
      <Typography>Overview from marketing</Typography>
      <Typography sx={{ color: "text.secondary" }} variant="caption">
        Oct 10–Nov 8, 2021 compared to Sep 10–Oct 9, 2021
      </Typography>
      <ResultCards />
      <RecentMarketing />
      <MarketingApps />
    </Box>
  );
}
