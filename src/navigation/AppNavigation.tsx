import { Button, Typography } from "@mui/material";
import React from "react";

import Logo from "../assets/images/logo.png";

export default function AppNavigation() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <img height={300} src={Logo} alt="Protus Logo" />
        <Typography variant="h4" color="secondary">
          Coming soon...
        </Typography>
        {/* <Button sx={{ marginTop: "18px", textTransform: "none" }}>
          Early access
        </Button> */}
      </div>
    </div>
  );
}
