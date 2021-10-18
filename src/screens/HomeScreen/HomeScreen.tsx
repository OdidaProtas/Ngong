import Box from "@mui/material/Box/Box";
import Button from "@mui/material/Button/Button";
import TextField from "@mui/material/TextField/TextField";
import Typography from "@mui/material/Typography/Typography";
import React from "react";
import { HoimeNavBar, HomeCreateStore } from "../../components/HomeComponents";

import Logo from "../../assets/images/logo_transparent.png";
import Toolbar from "@mui/material/Toolbar/Toolbar";

import Automation from "../../assets/images/automation.png";
import useModalControls from "../../hooks/modals/useModalControls";
import { ModalDialog } from "../../components/SharedComponents";

const ModalTitle = "Get started with Protus. Register a store";

export default function HomeScreen() {
  const { open, toggle } = useModalControls();
  return (
    <>
      {/* <HoimeNavBar /> */}
      {/* <Toolbar> */}
      <div style={{textAlign:"right", padding:"6px"}}>
          <Button sx={{textTransform:"none"}} size="small">Login</Button>
        </div>
      {/* </Toolbar> */}
      <Box sx={styles["root"]}>
        <ModalDialog title={ModalTitle} toggle={toggle} open={open}>
          <HomeCreateStore />
        </ModalDialog>
        <div>
          <img width={144} src={Logo} alt="" />
          <img
            style={{ display: "block", marginBottom: "18px" }}
            width={360}
            src={Automation}
            alt=""
          />
          <Typography color="secondary" sx={styles["tagline"]} variant="h5">
            Your Potential. Our Passion
          </Typography>
          <Typography variant="h6" sx={{ marginBottom: "9px" }}>
            Don’t stop living in the rest.
          </Typography>
          <Typography
            variant="h6"
            sx={{ marginBottom: "20px", marginTop: "18px" }}
          >
            In-line with online retail.
          </Typography>
          <Typography
            variant="h6"
            sx={{ marginBottom: "20px", marginTop: "18px" }}
          >
            Think bigger.
          </Typography>
          {/* <TextField placeholder="Email address" fullWidth type="email" /> */}
          <Button
            size="small"
            disableElevation
            color="secondary"
            variant="contained"
            sx={styles["btn"]}
            onClick={toggle}
          >
            Early access
          </Button>
        </div>
      </Box>
    </>
  );
}

const styles: any = {
  btn: {
    textTransform: "none",
    marginTop: "1pc",
    marginBottom: "15pc",
  },
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "#e9ecef",
  },
  tagline: {
    marginBottom: "1pc",
  },
};
