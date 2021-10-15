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
        <Typography sx={{marginTop:"50px"}} variant="h6" color="secondary">
          Selling online or in person? stay tuned
        </Typography>
      </div>
    </div>
  );
}
