import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import useStyles from "./ConfirmationModalComponent.styles";
import { LogoComponent } from "..";
import { Button } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  p: 4,
};

interface ConfirmationModalComponentInterface {
  open: boolean;
  toggle: any;
  title: string;
}

export default function ConfirmationModalComponent({
  open,
  toggle,
  title,
}: ConfirmationModalComponentInterface) {
  const classes = useStyles();

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={toggle}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style} className={classes.root}>
            <div className={classes.logoContainer}>
              <LogoComponent />
            </div>
            <Typography
              id="transition-modal-title"
              variant="body1"
              component="h2"
            >
              Confirm action
            </Typography>
            <Typography variant="body2">{title}</Typography>
            <Button className={classes.btn} size="small">
              Cancel
            </Button>
            <Button
              className={classes.btn}
              size="small"
              variant="contained"
              color="error"
            >
              Continue
            </Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

const inputStyles = {
  height: "50px",
  width: "50px",
};
