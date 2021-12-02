import Box from "@mui/material/Box/Box";
import Button from "@mui/material/Button/Button";
import Typography from "@mui/material/Typography/Typography";

import orderImg from "../../../../assets/images/abandonedcart.jpg";
import Nav from "../Nav";

export default function AbandonedCheckouts() {
  return (
    <div>
      <Nav option="Abandoned checkouts" />
      <Box
        sx={{ p: 4, bgcolor: "background.paper", borderRadius: "4px", mt: 3, pb:12 }}
      >
        <div style={{ textAlign: "center" }}>
          <Box sx={{ display: { lg: "none", xs: "block" } }}>
            <img width="70%" src={orderImg} alt="" />
          </Box>
          <Box sx={{ display: { lg: "block", xs: "none" } }}>
            <img width="20%" src={orderImg} alt="" />
          </Box>
          <br />
          <Typography variant="h5">
            Abandoned checkouts will show here
          </Typography>
          <Typography sx={{ m: 3 }}>
            See when customers put an item in their cart but don’t check out.
            You can also email customers a link to their cart.
          </Typography>
          {/* <Button
            color="secondary"
            disableElevation
            sx={{ textTransform: "none", mt: 3 }}
            variant="contained"
          >
            Create free order
          </Button> */}
        </div>
      </Box>
    </div>
  );
}
