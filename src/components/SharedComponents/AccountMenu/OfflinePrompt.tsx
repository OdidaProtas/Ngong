import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export default function OfflinePrompt() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button
        color="secondary"
        size="small"
        sx={{ textTransform: "none" }}
        onClick={() => window.location.reload()}
      >
        Reload
      </Button>
      {/* <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton> */}
    </React.Fragment>
  );

  return (
    <div>
      <Snackbar
        open={!navigator.onLine}
        autoHideDuration={6000}
        onClose={handleClose}
        color="error"
        message="You are offline. Could not connect to the server"
        action={action}
      />
    </div>
  );
}
