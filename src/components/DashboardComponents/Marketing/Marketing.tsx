import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import useModalControls from "../../../hooks/modals/useModalControls";
import { ModalDialog } from "../../SharedComponents";
import Automations from "./Automations";
import Campaigns from "./Campaigns";
import CampaignPopup from "./CampaignWidgets/CampaignPopup";
import MarketingOverview from "./MarketingOverview";
import Nav from "./Nav";

export default function Marketing() {
  const { path, url } = useRouteMatch();
  const { open, toggle } = useModalControls();

  let title;

  title = url.includes("campaigns")
    ? "campaigns"
    : path.includes("automations")
    ? "Automation"
    : "Marketing Overview";

  console.log(url);

  return (
    <div>
      <Box>
        <ModalDialog title="Select an activity" toggle={toggle} open={open}>
          <CampaignPopup toggle={toggle} />
        </ModalDialog>
      </Box>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <Nav option={"Marketing"} />
        </div>
        <div>
          <Button
            size="small"
            disableElevation
            color="secondary"
            variant="contained"
            sx={{ textTransform: "none" }}
            onClick={toggle}
          >
            Create campaign
          </Button>
        </div>
      </div>
      <Divider />
      <Switch>
        <Route exact path={`${path}`}>
          <MarketingOverview />
        </Route>
        <Route exact path={`${path}/automations`}>
          <Automations />
        </Route>
        <Route exact path={`${path}/campaigns`}>
          <Campaigns />
        </Route>
        <Route path={`**`}>Resource not found</Route>
      </Switch>
    </div>
  );
}
