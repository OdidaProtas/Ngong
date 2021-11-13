import Box from "@mui/material/Box/Box";
import Grid from "@mui/material/Grid/Grid";
import Typography from "@mui/material/Typography/Typography";
import { Route, Switch, useRouteMatch } from "react-router";
import { LogoComponent } from "../../SharedComponents";
import { lazy, Suspense } from "react";

import Container from "@mui/material/Container";
import StepRoute from "./Steps/StepRoute";
import TablesSkeleton from "../../SharedComponents/TablesSkeleton/TablesSkeleton";

const StepOne = lazy(() => import("./Steps/StepOne"));
const StepTwo = lazy(() => import("./Steps/StepTwo"));

import Setup from "../../../assets/images/set.png";

export default function BusinessForm() {
  const { path, url } = useRouteMatch();
  return (
    <Container sx={{ bgcolor: "background.paper", p: 4, borderRadius: "4px" }}>
      {/* <Progress /> */}
      {/* <Toolbar> */}
      <Box
        sx={{
          display: {
            lg: "none",
            md: "block",
            xs: "block",
            textAlign: "center",
          },
        }}
      >
        <div>
          <LogoComponent />
        </div>
      </Box>
      {/* </Toolbar> */}
      <div style={styles.root}>
        <Grid container>
          <Grid item xs>
            <Typography
              style={{ textAlign: "center" }}
              variant="h5"
              sx={styles.title}
            >
              We'll help you get started
            </Typography>
            <Typography style={{ textAlign: "center" }} sx={styles.subtitle}>
              Answer a few questions and we'll set up your store based on the
              answers
            </Typography>
            <Suspense fallback={<TablesSkeleton />}>
              {/* <Switch> */}
              {/* <StepRoute exact path={path} component={StepOne} /> */}
              {/* </Switch> */}
              <StepOne />
            </Suspense>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

const styles: any = {
  root: {
    paddingTop: "10px",
  },
  title: {
    mt: 3,
    mb: 3,
    fontWeight: "bold",
  },
  subtitle: {
    marginBottom: "18px",
  },
};
