import React from "react";
import PropTypes from "prop-types";
import { Button, CircularProgress, Theme, withStyles } from "@mui/material";

export default function LoadingBtnComponent() {
  return (
    <div>
      <Button fullWidth size="small" variant="contained" disabled>
        <CircularProgress size={20} />
      </Button>
    </div>
  );
}
