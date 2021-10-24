import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React from "react";
import { useHistory, useRouteMatch } from "react-router";

import storeAdd from "../../assets/images/store_add.png";

export default function StoreEmpty() {
  const { path } = useRouteMatch();
  const history = useHistory();
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <img width={"20%"} src={storeAdd} alt="" />
        <div>
          <Typography sx={{ mt: 4 }} variant="h6">
            Create a store
          </Typography>
          <Typography sx={{ mt: 3 }}>
            Ready to make your brand stand out? Create a store today. You can
            create and customize different stores
          </Typography>
          <Button
            disableElevation
            variant="contained"
            color="error"
            sx={{ textTransform: "none", mt: 5 }}
            onClick={() => history.push(`${path}/new`)}
          >
            Create a store
          </Button>
        </div>
      </div>
    </div>
  );
}
