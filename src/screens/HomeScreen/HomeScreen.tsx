import Box from "@mui/material/Box/Box";
import Button from "@mui/material/Button/Button";
import TextField   from "@mui/material/TextField/TextField";
import Typography from "@mui/material/Typography/Typography";
import React from "react";

import Logo from "../../assets/images/logo_transparent.png";

export default function HomeScreen() {
  return (
    <Box sx={styles["root"]}>
      <div>
        <img width={144} src={Logo} alt="" />
        <Typography sx={styles["tagline"]} variant="h6">
          Your Potential. Our Passion
        </Typography>
        <TextField placeholder="Email address" fullWidth type="email" />
        <Button
          disableElevation
          color="secondary"
          variant="contained"
          sx={styles["btn"]}
        >
          Early access
        </Button>
      </div>
    </Box>
  );
}

const styles: any = {
  btn: {
    textTransform: "none",
    marginTop: "1pc",
  },
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    textAlign: "center",
    backgroundColor:"#e9ecef"
  },
  tagline: {
    marginBottom: "5pc",
  },
};
