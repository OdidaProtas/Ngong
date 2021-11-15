import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React from "react";

export default function StoreDesc() {
  return (
    <div>
      <Box sx={{ my: 2, textAlign: "center" }}>
        <Typography variant="h4" sx={{ mt: 5, mb: 3 }}>
          Talk about your brand
        </Typography>
        <Typography sx={{ mx: 4 }}>
          Share information about your brand with your customers. Describe a
          product, make announcements, or welcome customers to your store.
        </Typography>
        <Button
          disabled
          color="inherit"
          disableElevation
          variant="contained"
          size="small"
          sx={{ mt: 4, textTransform: "none" }}
        >
          Button Label
        </Button>
      </Box>
    </div>
  );
}
