import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React, { useContext } from "react";
import { useHistory, useParams } from "react-router";
import { StateContext } from "../../../../state/appstate";
import Nav from "../Nav";
import OrdersTabs from "../OrdersTabs";

export default function Drafts() {
  const { push } = useHistory();
  const { orders } = useContext(StateContext);
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Nav option="Draft orders" />
        <div>
          <Button
            disableElevation
            variant="contained"
            color="secondary"
            size="small"
            onClick={() => push(`drafts/new`)}
            sx={{ textTransform: "none" }}
          >
            Draft order
          </Button>
        </div>
      </div>
      <div>
        <Paper elevation={0}>
          <OrdersTabs />
        </Paper>
      </div>
    </div>
  );
}
