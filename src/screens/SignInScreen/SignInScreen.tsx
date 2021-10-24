import Button from "@mui/material/Button";
import Container from "@mui/material/Container/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import React from "react";
import { Route, Switch, useHistory, useRouteMatch } from "react-router";

import logo from "../../assets/images/logo_transparent.png";
import AccountList from "./AccountList";
import LoginForm from "./LoginForm";
import LookupForm from "./LookupForm";
import PasswordReset from "./PasswordReset";
import SignupForm from "./SignupForm";

export default function SignInScreen() {
  const { path } = useRouteMatch();
  const history = useHistory();
  return (
    <div className="signin" style={{ minHeight: "100vh" }}>
      <Container>
        <Grid container>
          <Grid item xs={12} md={6} lg={5} mt={2}>
            <Box
              sx={{
                p: 4,
                bgcolor: "background.paper",
                minHeight: 300,
                borderRadius: "4px",
                mt: { xs: 9, md: 2, lg: 3 },
              }}
            >
              <img
                onClick={() => history.push("/")}
                style={{ cursor: "pointer" }}
                width="25%"
                src={logo}
                alt=""
              />
              <Switch>
                <Route exact path={`${path}/users`}>
                  <AccountList />
                </Route>
                <Route exact path={`${path}/verify`}>
                  <LoginForm />
                </Route>
                <Route exact path={`${path}/new`}>
                  <SignupForm />
                </Route>
                <Route exact path={`${path}/password-reset`}>
                  <PasswordReset />
                </Route>
                <Route exact path="**">
                  <LookupForm />
                </Route>
              </Switch>

              <div>
                <Divider sx={{ mt: 2 }} />
                <Box sx={{ mt: 1 }}>
                  <Button size="small" sx={{ textTransform: "none" }}>
                    Help
                  </Button>
                  <Button size="small" sx={{ textTransform: "none" }}>
                    Privacy
                  </Button>
                  <Button size="small" sx={{ textTransform: "none" }}>
                    Terms
                  </Button>
                </Box>
              </div>

              {/* <Box sx={{ mt: 3, mb: 3 }}>
                <Typography variant="h6">Choose an account</Typography>
              </Box> */}
              {/* <AccountList /> */}
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            sx={{ display: { xs: "none" } }}
          ></Grid>
        </Grid>
      </Container>
    </div>
  );
}
