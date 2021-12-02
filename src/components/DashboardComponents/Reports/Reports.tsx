import Badge from "@mui/material/Badge";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import { lazy, Suspense } from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import ReportDetail from "./ReportDetail";
const Globe = lazy(() => import("./ReportsWidgets/Globe"));

const options = [
  { title: "Visitors right now", desc: "", items: [] },
  { title: "Total sessions", desc: "", items: [] },
  { title: "Page views", desc: "", items: [] },
  { title: "Customer behavior", desc: "", items: [] },
  { title: "Total sales", desc: "", items: [] },
  { title: "Total orders", desc: "", items: [] },
];

export default function Reports() {
  const { path } = useRouteMatch();
  return (
    <div style={{ minHeight: "100vh" }}>
      <Typography>Live view</Typography>
      <Typography
        sx={{ my: 2, color: "text.secondary", mr: 3 }}
        variant="caption"
      >
        10 Nov 2021 at 18:35 EAT
      </Typography>
      <Badge color="success" variant="dot">
        <Typography variant="caption">Order</Typography>
      </Badge>
      <Badge sx={{ ml: 2 }} color="info" variant="dot">
        <Typography variant="caption">Customer</Typography>
      </Badge>
      <Suspense
        fallback={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "87vh",
            }}
          >
            <Skeleton
              sx={{ mb: 24}}
              height={360}
              width={360}
              variant="circular"
            ></Skeleton>
          </div>
        }
      >
        <Globe />
      </Suspense>
      <div style={{ position: "fixed", bottom: 10 } as any}>
        <Grid container spacing={2}>
          {options.map(({ title, desc, items }, idx) => (
            <Grid key={idx} item xs={12} lg={6}>
              <Paper sx={{ p: 3 }} elevation={0}>
                {title}

                <Typography color="secondary" variant="h5">0</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
