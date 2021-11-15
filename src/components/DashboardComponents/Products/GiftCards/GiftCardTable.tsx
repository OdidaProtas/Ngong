import Button from "@mui/material/Button";
import React from "react";
import { useHistory, useParams } from "react-router";
import SwitchMode from "../ProductLists/SwitchMode";
import GiftCardTabs from "./GiftCardTabs";

export default function GiftCardTable() {
  const { push } = useHistory();
  const { id }: any = useParams();
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <SwitchMode option="Gift cards"></SwitchMode>
        <div>
          <Button
            onClick={() => push(`/admin/${id}/products/gift-cards/new`)}
            sx={{ textTransform: "none" }}
            color="secondary"
          >
            Add gift card
          </Button>
          <Button
            onClick={() => push(`/admin/${id}/products/gift-cards/issue`)}
            disableElevation
            variant="contained"
            color="secondary"
            sx={{ textTransform: "none" }}
          >
            Issue gift card
          </Button>
        </div>
      </div>
      <GiftCardTabs />
    </div>
  );
}
