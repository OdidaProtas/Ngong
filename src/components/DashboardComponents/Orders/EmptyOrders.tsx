import Box from "@mui/material/Box/Box";
import Button from "@mui/material/Button/Button";
import Typography from "@mui/material/Typography/Typography";
import React from "react";
import { useHistory, useRouteMatch } from "react-router";

import orderImg from "../../../assets/images/order.png";

export default function EmptyOrders() {
  const history = useHistory();
  const { path } = useRouteMatch();
  return (
    <div>
      <Box
        sx={{ p: 4, bgcolor: "background.paper", borderRadius: "4px", mt: 3 }}
      >
        <div style={{ textAlign: "center" }}>
          <img width="20%" src={orderImg} alt="" />
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
            variant="contained"
            onClick={() => history.push(`/admin/settings`)}
          >
            Select Plan
          </Button>
        </div>
      </Box>
    </div>
  );
}
