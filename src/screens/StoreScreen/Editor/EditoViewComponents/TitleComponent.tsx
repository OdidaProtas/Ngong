import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";

export default function TitleComponent() {
  return (
    <div>
      <Box>
        <Typography variant="h5" sx={{ mx: 3, mt:6 }}>Featured Products</Typography>
      </Box>
    </div>
  );
}
