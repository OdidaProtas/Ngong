import Grid from "@mui/material/Grid";
import Box from "@mui/system/Box/Box";
import React, { lazy, Suspense, useContext, useEffect } from "react";
import AccountMenu from "../../components/SharedComponents/AccountMenu/AccountMenu";

import Logo from "../../assets/images/logo_transparent.png";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import {
  Route,
  Switch,
  useHistory,
  useParams,
  useRouteMatch,
} from "react-router";
import TbFallBack from "./TbFallBack";
import StoreEmpty from "./StoreEmpty";
import { AuthContext } from "../../state";
import TablesSkeleton from "../../components/SharedComponents/TablesSkeleton/TablesSkeleton";
import { AnyObject } from "yup/lib/object";
import { useAxiosRequest } from "../../hooks";
import StoreRoute from "./StoreRoute";
import { StateContext } from "../../state/appstate";
const StoreList = lazy(() => import("./StoreList"));
const StoreForm = lazy(() => import("./StoreForm"));

export default function StoreSelectionScreen() {
  const history = useHistory();
  const { path } = useRouteMatch();

  const { loading, processRequest, data } = useAxiosRequest();

  const { myStores, stateDispatch }: any = useContext(StateContext);

  useEffect(() => {
    if (myStores === null) {
      processRequest({
        method: "get",
        endpoint: `/my-stores`,
      });
    }
  }, []);

  useEffect(() => {
    if (data) {
      stateDispatch({ type: "ADD_MY_STORES", payload: data });
    }
  }, [data]);

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
                  loading={loading}
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
