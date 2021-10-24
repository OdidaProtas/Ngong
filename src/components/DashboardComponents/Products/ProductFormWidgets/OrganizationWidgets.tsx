import Box from "@mui/material/Box/Box";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import React from "react";

export default function OrganizationWidgets() {
  return (
    <Box sx={{ mt: 3, p: 3, bgcolor: "background.paper", borderRadius: "4px" }}>
      ORGANIZATION
      <div>
        <Box sx={{ mt: 2 }}>
          <TextField
            placeholder="Example: Pembe"
            label="Vendor"
            size="small"
            fullWidth
          />
        </Box>
        <Divider sx={{mt:1, mb:1}}/>
      </div>
    </Box>
  );
}
