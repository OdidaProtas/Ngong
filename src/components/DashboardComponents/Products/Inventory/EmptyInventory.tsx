import Box from "@mui/material/Box/Box";
import Button from "@mui/material/Button/Button";
import Typography from "@mui/material/Typography/Typography";

import productAdd from "../../../../assets/images/product_add.png";

import { useHistory, useParams, useRouteMatch } from "react-router";
import SwitchMode from "../ProductLists/SwitchMode";

export default function EmptyInventory() {
  const { url, path } = useRouteMatch();
  const history = useHistory();
  const { id }: any = useParams();

  return (
    <div>
      <SwitchMode option={"Inventory"} />
      <Box
        sx={{ bgcolor: "background.paper", p: 3, borderRadius: "9px", mt: 3 }}
      >
        <div style={{ textAlign: "center" }}>
          <Box sx={{ display: { lg: "block", xs: "none", md: "block" } }}>
            <img width="50%" src={productAdd} alt="" />
          </Box>
          <Box sx={{ display: { lg: "none", xs: "block", md: "none", mb: 4 } }}>
            <img style={{ height: 144 }} width="100%" src={productAdd} alt="" />
          </Box>
          <Box sx={{ mt: 5 }}>
            <Typography sx={{ mt: 5 }} variant="h5">
              Keep track of your inventory
            </Typography>
            <Typography sx={{ mt: 3 }}>
              When you enable inventory tracking on your products, you can view
              and adjust their inventory counts here.
            </Typography>
            <Box>
              <Button
                disableElevation
                variant="contained"
                color="secondary"
                sx={{ textTransform: "none", mt: 5, mb: 5 }}
                onClick={() => history.push(`/admin/${id}/products`)}
              >
                Go to products
              </Button>
            </Box>
          </Box>
        </div>
      </Box>
    </div>
  );
}
