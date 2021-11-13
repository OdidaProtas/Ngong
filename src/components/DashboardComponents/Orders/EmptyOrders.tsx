import Box from "@mui/material/Box/Box";
import Button from "@mui/material/Button/Button";
import Typography from "@mui/material/Typography/Typography";
import React from "react";
import { useHistory, useParams, useRouteMatch } from "react-router";

import orderImg from "../../../assets/images/order.png";
import Nav from "./Nav";

export default function EmptyOrders() {
  const history = useHistory();
  const { path } = useRouteMatch();
  const { id }: any = useParams();
  return (
    <div>
      <Nav option="Orders" />
      <Box
        sx={{ p: 4, bgcolor: "background.paper", borderRadius: "4px", mt: 3 }}
      >
        <div style={{ textAlign: "center" }}>
          <Box sx={{ display: { lg: "none", xs: "block" } }}>
            <img width="70%" src={orderImg} alt="" />
          </Box>
          <Box sx={{ display: { lg: "block", xs: "none" } }}>
            <img width="20%" src={orderImg} alt="" />
          </Box>
          <br />
          <Typography variant="h5">Your orders will show here</Typography>
          <Typography sx={{ m: 3 }}>
            To get orders and accept payments from customers, you need to select
            a plan. You’ll only be charged for your plan after your free trial
            ends.
          </Typography>
          <Button
            color="secondary"
            disableElevation
            sx={{ textTransform: "none", mt: 3 }}
            variant="outlined"
            onClick={() => history.push(`/admin/${id}/settings`)}
          >
            Select Plan
          </Button>
          <Button
            color="secondary"
            disableElevation
            sx={{ textTransform: "none", mt: 3, ml: 2 }}
            variant="contained"
            onClick={() => history.push(`/admin/${id}/orders/new`)}
          >
            Draft Order
          </Button>
        </div>
      </Box>
    </div>
  );
}
