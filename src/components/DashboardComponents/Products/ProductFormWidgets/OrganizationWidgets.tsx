import Box from "@mui/material/Box/Box";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React from "react";
import ProductType from "../ProductType";

export default function OrganizationWidgets({ handleChange, values }) {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        p: { lg: 4, md: 1, xs: 1 },
        borderRadius: "4px",
        pt: { lg: 3, md: 3, xs: 3 },
        mt: 3,
      }}
    >
      <Typography sx={{ mt: 1 }}>ORGANIZATION</Typography>
      <div>
        <Box sx={{ mt: 2 }}>
          <TextField
            placeholder="Example: Pembe Foods"
            label="Vendor"
            size="small"
            fullWidth
            value={values.vendor}
            name="vendor"
            onChange={handleChange}
          />
        </Box>
        <Divider sx={{ mt: 2, mb: 1 }} />
        <Box sx={{ mt: 2 }}>
          <ProductType />
        </Box>
      </div>
    </Box>
  );
}
