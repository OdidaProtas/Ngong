import Button from "@mui/material/Button";
import React from "react";
import useModalControls from "../../../hooks/modals/useModalControls";
import StoreOverviewDrawer from "./StoreOverviewDrawer";
import StoreOverviewNav from "./StoreOverviewNav";
import ViewStreamIcon from "@mui/icons-material/ViewStream";
import IconButton from "@mui/material/IconButton";
import OverviewAppbar from "./OverviewAppbar";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Theme from "./Theme/Theme";
import Alert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";

export default function StoreOverview() {
  const { open, toggle } = useModalControls();
  const { path } = useRouteMatch();
  return (
    <div>
      <OverviewAppbar>
        <Alert sx={{ mb: 3 }} severity="info">
          <Typography variant="h6">
            Online store is password protected
          </Typography>
          <Typography sx={{ my: 1 }}>
            Only visitors with a password can access your online store.
          </Typography>
          <Button
            sx={{ textTransform: "none" }}
            size="small"
            color="inherit"
            variant="outlined"
          >
            Disable password
          </Button>
        </Alert>
        <Switch>
          <Route exact path={[path]}>
            <Theme />
          </Route>
          <Route></Route>
          <Route></Route>
        </Switch>
      </OverviewAppbar>
    </div>
  );
}
