import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box/Box";
import React from "react";
import { useHistory, useRouteMatch } from "react-router";

import DiscountIllustration from "../../../assets/images/discount.jpg";

export default function EmptyDiscounts() {
  const { url } = useRouteMatch();
  const history = useHistory();
  return (
    <div>
      <Box
        sx={{
          bgcolor: "background.paper",
          textAlign: "center",
          mt: 2,
          borderRadius: "4px",
        }}
      >
        <img width="20%" src={DiscountIllustration} alt="" />
        <Typography sx={{ mt: 3 }} variant="h6">
          Manage discounts and promotions
        </Typography>
        <Typography sx={{ m: 5 }}>
          Create discount codes and automatic discounts that apply at checkout.
          You can also combine discounts with compare at prices.
        </Typography>
        <Button
          disableElevation
          variant="contained"
          color="secondary"
          sx={{ textTransform: "none", mb: 3 }}
          onClick={() => history.push(`${url}/new`)}
        >
          Create discount code
        </Button>
      </Box>
    </div>
  );
}
