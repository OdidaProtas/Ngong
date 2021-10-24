import Box from "@mui/material/Box/Box";
import Button from "@mui/material/Button/Button";
import Typography from "@mui/material/Typography/Typography";
import React from "react";

import productAdd from "../../../assets/images/product_add.png";

import { useHistory, useRouteMatch } from "react-router";

export default function EmptyProduct() {
  const { url, path } = useRouteMatch();
  const history = useHistory();

  return (
    <div>
      <React.Fragment>PRODUCTS</React.Fragment>
      <Box
        sx={{ bgcolor: "background.paper", p: 8, borderRadius: "9px", mt: 3 }}
      >
        <div style={{ textAlign: "center" }}>
          <img width="50%" src={productAdd} alt="" />
          <Typography sx={{ mt: 3 }} variant="h5">
            Add and manage your products
          </Typography>
          <Typography sx={{ mt: 3 }}>
            This is where you’ll add products and manage your pricing. You can
            also import and export your product inventory.
          </Typography>
          <Box>
            <Button
              disableElevation
              variant="contained"
              color="secondary"
              sx={{ textTransform: "none", mt: 5, mr: { lg: 3, md: 3 } }}
              onClick={() => history.push(`${path}/new`)}
            >
              Add product
            </Button>
            <Button
              disableElevation
              variant="outlined"
              color="secondary"
              sx={{ textTransform: "none", mt: 5 }}
            >
              Find Products
            </Button>
          </Box>
        </div>
      </Box>
    </div>
  );
}
