import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box/Box";
import React from "react";
import { useHistory, useRouteMatch } from "react-router";

import DiscountIllustration from "../../../assets/images/discounts.png";
import SwitchMode from "./SwitchMode";

export default function EmptyAutomaticDiscounts() {
  const { url } = useRouteMatch();
  const history = useHistory();
  return (
    <div>
      <SwitchMode option="Automatic discounts"/>
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
          Create discounts that apply automatically
        </Typography>
        <Typography sx={{ m: 5 }}>
          Create and manage discounts that apply automatically to a customer’s
          cart.
        </Typography>
        <Button
          disableElevation
          variant="contained"
          color="secondary"
          sx={{ textTransform: "none", mb: 3 }}
          onClick={()=>history.push(`${url}/new`)}
        >
          Create automatic discount
        </Button>
      </Box>
    </div>
  );
}
