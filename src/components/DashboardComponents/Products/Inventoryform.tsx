import Checkbox from "@mui/material/Checkbox/Checkbox";
import Divider from "@mui/material/Divider/Divider";
import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel";
import Grid from "@mui/material/Grid/Grid";
import TextField from "@mui/material/TextField/TextField";
import React from "react";

export default function Inventoryform() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField  label="Stock keeping unit (SKU)" fullWidth></TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Barcode"
            fullWidth
          ></TextField>
        </Grid>
      </Grid>
      <Divider sx={{ mt: 3, mb: 3 }} />
      <FormControlLabel control={<Checkbox defaultChecked />} label="Track quantity" />
    </div>
  );
}
