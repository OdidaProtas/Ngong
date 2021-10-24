import Grid from "@mui/material/Grid";
import Box from "@mui/system/Box/Box";
import React, { lazy, Suspense } from "react";
import AccountMenu from "../../components/SharedComponents/AccountMenu/AccountMenu";

import Logo from "../../assets/images/logo_transparent.png";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import { Route, Switch, useHistory, useRouteMatch } from "react-router";
import TbFallBack from "./TbFallBack";
import StoreEmpty from "./StoreEmpty";
const StoreList = lazy(() => import("./StoreList"));
const StoreForm = lazy(() => import("./StoreForm"));

export default function StoreSelectionScreen() {
  const history = useHistory();
  const { path } = useRouteMatch();
  return (
    <div className="signin" style={{ minHeight: "100vh" }}>
      <Grid container>
        <Grid item xs={6}>
          <Box sx={{ minHeight: "100vh", bgcolor: "background.paper", p: 4 }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <img
                onClick={() => history.push("/")}
                style={{ cursor: "pointer" }}
                width="25%"
                src={Logo}
                alt=""
              />
              <AccountMenu />
            </div>
            <Box
              sx={{ mt: 5 }}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Switch>
                <Route exact path={path}>
                  <StoreEmpty />
                </Route>
                <Route exact path={`${path}/new`}>
                  <Suspense fallback={<TbFallBack />}>
                    <StoreForm />
                  </Suspense>
                </Route>
                <Route path="/list">
                  <Suspense fallback={<TbFallBack />}>
                    <StoreList />
                  </Suspense>
                </Route>
                <Route path="**">
                  <Suspense fallback={<TbFallBack />}>
                    <StoreList />
                  </Suspense>
                </Route>
              </Switch>
            </Box>
          </Box>
        </Grid>
        <Grid item xs sx={{ display: { lg: "none", md: "none" } }}></Grid>
      </Grid>
    </div>
  );
}
