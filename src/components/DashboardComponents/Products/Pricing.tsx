import Checkbox from "@mui/material/Checkbox/Checkbox";
import Divider from "@mui/material/Divider/Divider";
import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel";
import Grid from "@mui/material/Grid/Grid";
import TextField from "@mui/material/TextField/TextField";
import React from "react";

export default function Pricing() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField placeholder="Ksh. 0.0" label="Price" fullWidth></TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            placeholder="Ksh. 0.0"
            label="Compare at Price"
            fullWidth
          ></TextField>
        </Grid>
      </Grid>
      <Divider sx={{ mt: 3, mb: 3 }} />
      <TextField
        sx={{ mb: 2, mt: 2 }}
        placeholder="Ksh. 0.0"
        label="Cost per item"
        fullWidth
      ></TextField>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Charge tax on this product" />
    </div>
  );
}
