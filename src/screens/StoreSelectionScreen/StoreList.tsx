import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import React from "react";

export default function StoreList() {
  return (
    <div>
      <Typography sx={{ mt: 5, mb: 2 }} variant="h5">
        Stores
      </Typography>
      <div>
        <Button
          disableElevation
          color="secondary"
          sx={{ mt: 5, ml: 40, textTransform: "none" }}
          variant="contained"
          size="small"
        >
          Create a Store
        </Button>
      </div>
      <Divider />
    </div>
  );
}
