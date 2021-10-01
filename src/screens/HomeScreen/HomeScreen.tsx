import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import { NavbarComponent, DrawerComponent } from "../../components";
import { Container } from "@mui/material";
import { DashboardNavigation } from "../../navigation";
import { Suspense, useEffect, useMemo, useReducer } from "react";
import { useAxiosRequest } from "../../hooks";
import {
  bootstrapStateAsync,
  StateContext,
  stateContextMemo,
  stateReducer,
  initialState
} from "../../state/appstate";

const drawerWidth = 240;

interface Props {
  window?: () => Window;
}

const requestOptions: any = {
  method: "get",
  context: "businesses",
  isAuthenticated: true,
  endpoint: "/businesses",
};

export default function HomeScreen(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { processRequest, data } = useAxiosRequest();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const [state, dispatch] = useReducer(stateReducer, initialState) as any;
  const stateContext: any = useMemo(
    () => stateContextMemo(dispatch, state),
    []
  );

  useEffect(() => {
    const bootstrap = () => bootstrapStateAsync(dispatch);
    bootstrap();
  }, []);

  const errorHandler = () => {
    // alert("error");
  };
  const successHandler = () => {
    // alert("success");
  };

  useEffect(() => {
    processRequest({ ...requestOptions, errorHandler, successHandler });
  }, []);

  return (
    <StateContext.Provider value={{ ...stateContext, state }}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Suspense fallback={<div></div>}>
          <NavbarComponent handleDrawerToggle={handleDrawerToggle} />
        </Suspense>
        <Suspense fallback={<div></div>}>
          <DrawerComponent
            container={container}
            mobileOpen={mobileOpen}
            handleDrawerToggle={handleDrawerToggle}
            drawerWidth={drawerWidth}
          />
        </Suspense>

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Container>
            <Suspense fallback={<div>Loading...</div>}>
              <DashboardNavigation />
            </Suspense>
          </Container>
        </Box>
      </Box>
    </StateContext.Provider>
  );
}
