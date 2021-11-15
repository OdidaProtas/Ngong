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
            backgroundSize: "cover",
            backgroundImage:
              "url(https://res.cloudinary.com/dreamnerd/image/upload/v1636780397/media/oa4uyq5dzcotureiprvf.jpg)",
          }}
        >
          <Box sx={{ textAlign: "center", bgcolor: "white", p: 6 }}>
            <Typography variant="h6">Make your brand visible</Typography>
            <Button
              disableElevation
              color="inherit"
              size="small"
              variant="contained"
              sx={{ textTransform: "none", mt: 3 }}
            >
              Shop all
            </Button>
          </Box>
        </div>
      </Paper>
    </div>
  );
}
