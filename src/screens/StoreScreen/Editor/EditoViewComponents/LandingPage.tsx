import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import React from "react";

export default function LandingPage() {
  return (
    <div>
      <Paper elevation={0}>
        <div
          style={{
            height: "400px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <img width="100%" src={landing} alt="" /> */}
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h6">Make your brand visible</Typography>
            <Button
              disableElevation
              color="inherit"
              size="small"
              variant="contained"
              sx={{ textTransform: "none", mt: 3 }}
            >
              View our catalog
            </Button>
          </Box>
        </div>
      </Paper>
    </div>
  );
}
