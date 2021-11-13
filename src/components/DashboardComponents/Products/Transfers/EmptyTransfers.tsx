import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import React from "react";

import SwitchMode from "../ProductLists/SwitchMode";

import productsAdd from "../../../../assets/images/product_add.png";
import { useHistory, useParams } from "react-router";

export default function EmptyTransfers() {
  const { id }: any = useParams();
  const { push } = useHistory();

  return (
    <div>
      <SwitchMode option="Transfers" />
      <Box
        sx={{ bgcolor: "background.paper", borderRadius: "4px", p: 3, pb: 12 }}
      >
      <Box sx={{ textAlign: "center" }}>
          <Box sx={{ display: { lg: "block", xs: "none", md: "block" } }}>
            <img width="50%" src={productsAdd} alt="" />
          </Box>
          <Box sx={{ display: { lg: "none", xs: "block", md: "none", mb: 4 } }}>
            <img
              style={{ height: 144 }}
              width="100%"
              src={productsAdd}
              alt=""
            />
          </Box>
          <Typography variant="h5" sx={{ mt: 4 }}>
            Manage your incoming inventory
          </Typography>
          <Typography sx={{ mt: 3 }}>
            You can track and receive incoming inventory from your suppliers and
            business locations.
          </Typography>
          <Button
            disableElevation
            variant="contained"
            sx={{ textTransform: "none", my: 3 }}
            color="secondary"
            onClick={() => push("transfers/new")}
          >
            Create Transfer
          </Button>
        </Box>
      </Box>
    </div>
  );
}
