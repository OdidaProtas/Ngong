import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React from "react";
import { useRouteMatch } from "react-router-dom";

export default function ItemQuantityWidget({ product }: any) {
  const { title, price } = product;
  const { path } = useRouteMatch();
  const isOrder = path.includes("order");
  return (
    <div>
      <Grid container p={2}>
        <Grid item xs>
          <Typography>{title}</Typography>
          <Typography variant="caption">Ksh. {price}</Typography>
        </Grid>
        <Grid item xs>
          <TextField type="number" value={1} size="small" color="secondary" />
        </Grid>
        {isOrder && (
          <Grid item xs>
            <Typography style={{ textAlign: "right" }}>
              Ksh. {price || "0.0"}
            </Typography>
          </Grid>
        )}
      </Grid>
      <Divider light />
    </div>
  );
}
