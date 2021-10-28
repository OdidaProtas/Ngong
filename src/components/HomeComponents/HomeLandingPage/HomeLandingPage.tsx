import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography/Typography";
import React from "react";
import { DateSalutationComponent } from "../../SharedComponents";
import VerticalTabs from "./Tabs";

export default function HomeLandingPage() {
  return (
    <div>
      <DateSalutationComponent />
      <div>
        <Typography sx={{ marginTop: "72px" }} variant="h4">
          Get started
        </Typography>
      </div>
      <VerticalTabs />
    </div>
  );
}
