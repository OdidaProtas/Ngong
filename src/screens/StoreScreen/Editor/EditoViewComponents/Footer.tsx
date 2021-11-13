import Paper from "@mui/material/Paper";
import React from "react";

export default function Footer() {
  return (
    <Paper elevation={0} sx={{ mt: 3 }}>
      <div style={{ padding: "18px", textAlign: "center" }}>
        Powered by Tokea
      </div>
    </Paper>
  );
}
