import Button from "@mui/material/Button";
import React from "react";
import { useHistory, useParams } from "react-router";
import SwitchMode from "../ProductLists/SwitchMode";
import CollectionsTabs from "./CollectionTabs";

export default function CollectionsList() {
  const { push } = useHistory();
  const { id }: any = useParams();
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <SwitchMode option={"Collections"} />
        <div>
          <Button
            onClick={() => push(`/admin/${id}/products/collections/new`)}
            color="secondary"
            size="small"
            sx={{ textTransform: "none" }}
          >
            Create Collection
          </Button>
        </div>
      </div>
      <CollectionsTabs />
    </div>
  );
}
