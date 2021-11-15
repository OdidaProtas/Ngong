import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React from "react";
import { useHistory, useParams } from "react-router";
import SwitchMode from "../ProductLists/SwitchMode";
import TransferListDesktop from "./TransferListDesktop";

export default function TransferList() {
  const { push } = useHistory();
  const { id }:any = useParams();
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <SwitchMode option="Transfers" />
        <div>
          <Button
            onClick={() => push(`/admin/${id}/products/transfers/new`)}
            color="secondary"
            sx={{ textTransform: "none" }}
            size="small"
          >
            Create transfer
          </Button>
        </div>
      </div>

      <TransferListDesktop />
    </div>
  );
}
