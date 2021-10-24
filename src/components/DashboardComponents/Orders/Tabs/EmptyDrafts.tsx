import Box from "@mui/material/Box/Box";
import Button from "@mui/material/Button/Button";
import Typography from "@mui/material/Typography/Typography";
import { useHistory, useRouteMatch } from "react-router";

import orderImg from "../../../../assets/images/draft.jpg";

export default function EmptyDrafts() {
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
            onClick={() => history.push(`${path}/new`)}
          >
            Create draft order
          </Button>
        </div>
      </Box>
    </div>
  );
}
