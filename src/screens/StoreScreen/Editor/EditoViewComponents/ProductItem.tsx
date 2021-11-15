import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import React from "react";

export default function ProductItem() {
  return (
    <div>
      <Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            bgcolor: "lightgray",
            mt: 3,
            minHeight: "220px",
            p: 2,
          }}
        >
          <Typography>Product title</Typography>
        </Box>
        <Typography variant="caption" sx={{ mt: 1, color: "text.secondary" }}>
          VENDOR
        </Typography>
        <Typography sx={{ mt: 1 }}>Ksh. 18.00</Typography>
      </Box>
    </div>
  );
}
