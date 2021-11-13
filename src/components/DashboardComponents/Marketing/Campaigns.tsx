import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import CampaignTable from "./CampaignWidgets/CampaignTable";
import CampaignTableMobile from "./CampaignWidgets/CampaignTableMobile";
import MarketingApps from "./OverviewWidgets/MarketingApps";
import RecentMarketing from "./OverviewWidgets/RecentMarketing";
import ResultCards from "./OverviewWidgets/ResultCards";

export default function Campaigns() {
  return (
    <Box sx={{ my: 1 }}>
      <Typography>Campaigns</Typography>
      <Typography sx={{ color: "text.secondary" }} variant="caption">
        Oct 10–Nov 8, 2021 compared to Sep 10–Oct 9, 2021
      </Typography>
      <ResultCards />
      <Box sx={{ display: { lg: "block", xs: "none" } }}>
        <CampaignTable />
      </Box>
      <Box sx={{ display: { lg: "none", xs: "block", p:1 } }}>
        <CampaignTableMobile />
      </Box>
      <MarketingApps />
    </Box>
  );
}
