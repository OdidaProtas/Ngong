import Box from "@mui/material/Box/Box";
import Button from "@mui/material/Button/Button";
import Typography from "@mui/material/Typography/Typography";
import { useHistory, useParams, useRouteMatch } from "react-router";

import orderImg from "../../../../assets/images/draft.jpg";
import Nav from "../Nav";

export default function EmptyDrafts() {
  const history = useHistory();
  const { path } = useRouteMatch();
  const { id }: any = useParams();
  return (
    <div>
      <Nav option="Draft orders" />
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
          <Typography variant="h5">
            Manually create orders and invoices
          </Typography>
          <Typography sx={{ m: 3 }}>
            Use draft orders to take orders over the phone, email invoices to
            customers, and collect payments.
          </Typography>
          <Button
            color="secondary"
            disableElevation
            sx={{ textTransform: "none", mt: 3 }}
            variant="contained"
            onClick={() => history.push(`/admin/${id}/orders/drafts/new`)}
          >
            Create draft order
          </Button>
        </div>
      </Box>
    </div>
  );
}
