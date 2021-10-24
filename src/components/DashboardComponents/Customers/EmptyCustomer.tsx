import Box from "@mui/material/Box/Box";
import Button from "@mui/material/Button/Button";
import Typography from "@mui/material/Typography/Typography";
import React from "react";

import customerAdd from "../../../assets/images/customer_add.png";

import { useHistory, useRouteMatch } from "react-router";

export default function EmptyCustomer() {
  const history = useHistory();

  const { path } = useRouteMatch();

  return (
    <div>
      <div style={{ marginTop: "18px", marginBottom: "36px" }}>CUSTOMERS</div>
      <Box
        sx={{
          bgcolor: "background.paper",
          borderRadius: "9px",
          minHeight: 480,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <img height="144" src={customerAdd} alt="" />
          <Typography variant="h6">Manage customer details</Typography>
          <Typography sx={{ mt: 2 }}>
            This is where you can manage your customer information and view
            their purchase history.
          </Typography>
          <Button
            onClick={() => history.push(`${path}/new`)}
            sx={{ textTransform: "none", mt: 3 }}
            color="secondary"
            variant="contained"
            disableElevation
          >
            Add customer
          </Button>
        </div>
      </Box>
    </div>
  );
}
