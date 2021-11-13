import Box from "@mui/material/Box/Box";
import Button from "@mui/material/Button/Button";
import Typography from "@mui/material/Typography/Typography";
import { useContext } from "react";
import { HoimeNavBar, HomeCreateStore } from "../../components/HomeComponents";

import Logo from "../../assets/images/logo_transparent.png";

import Automation from "../../assets/images/automation.png";
import useModalControls from "../../hooks/modals/useModalControls";
import { ModalDialog } from "../../components/SharedComponents";
import { AuthContext } from "../../state";
import { useHistory } from "react-router";

const ModalTitle = "Get started with Protus. Register a store";

export default function HomeScreen() {
  const { open, toggle } = useModalControls();
  const {
    authState: { isLoggedIn, user },
  }: any = useContext(AuthContext);
  const history = useHistory();

  return (
    <>
      <HoimeNavBar />
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
          {isLoggedIn ? (
            <Button
              size="small"
              disableElevation
              color="secondary"
              variant="contained"
              sx={styles["btn"]}
              onClick={() => history.push(`/store-login/${user?.id}`)}
            >
              My stores
            </Button>
          ) : (
            <Button
              size="small"
              disableElevation
              color="secondary"
              variant="contained"
              sx={styles["btn"]}
              onClick={() => history.push("/signin/new")}
            >
              Get Started
            </Button>
          )}
        </div>
      </Box>
    </>
  );
}

const styles: any = {
  btn: {
    textTransform: "none",
    mt: 1,
    mb: 1,
  },
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "#e9ecef",
    minHeight: "100vh",
  },
  tagline: {
    marginBottom: "1pc",
  },
};
