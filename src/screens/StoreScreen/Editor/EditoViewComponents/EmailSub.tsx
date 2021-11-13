import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React from "react";

export default function EmailSub() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Box sx={{ my: 10, width: "500px" }}>
        <Typography sx={{ mb: 3 }} variant="h6">
          Subscribe for updates
        </Typography>
        <TextField color="secondary" placeholder="Email" size="small" fullWidth />
      </Box>
    </div>
  );
}
