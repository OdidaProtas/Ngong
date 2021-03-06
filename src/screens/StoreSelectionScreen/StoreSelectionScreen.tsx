import Grid from "@mui/material/Grid";
import Box from "@mui/system/Box/Box";
import { lazy, Suspense } from "react";
import AccountMenu from "../../components/SharedComponents/AccountMenu/AccountMenu";

import Logo from "../../assets/images/logo_transparent.png";
import {
  Route,
  Switch,
  useHistory,
  useParams,
  useRouteMatch,
} from "react-router";
import TbFallBack from "./TbFallBack";
import StoreEmpty from "./StoreEmpty";
import StoreRoute from "./StoreRoute";
const StoreList = lazy(() => import("./StoreList"));
const StoreForm = lazy(() => import("./StoreForm"));

export default function StoreSelectionScreen() {
  const history = useHistory();
  const { path } = useRouteMatch();
  return (
    <div className="signin" style={{ minHeight: "100vh" }}>
      <Grid container>
        <Grid item xs={12} md={8} lg={6}>
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
                <StoreRoute
                  loading={false}
                  component={StoreEmpty}
                  exact
                  path={path}
                />
                <Route exact path={`${path}/new`}>
                  <Suspense fallback={<TbFallBack />}>
                    <StoreForm />
                  </Suspense>
                </Route>
                <Route path={`${path}/list`}>
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
