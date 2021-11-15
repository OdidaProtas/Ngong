import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React from "react";

export default function BottomCallToAction() {
  return (
    <Box
      sx={{
        minHeight: 120,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box>
        <Button
          disableElevation
          variant="contained"
          color="inherit"
          sx={{ textTransform: "none" }}
          disabled
        >
          Button label
        </Button>
      </Box>
    </Box>
  );
}
