import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React from "react";
import OrdersSwitch from "./OrdersSwitch";

export default function OrdersList() {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <OrdersSwitch option="Orders" />
        </div>
        <div>
          <Button
            sx={{ textTransform: "none" }}
            color="secondary"
            disableElevation
            variant="contained"
            size="small"
          >
            Draft order
          </Button>
        </div>
      </div>
    </div>
  );
}
