import Checkbox from "@mui/material/Checkbox/Checkbox";
import Divider from "@mui/material/Divider/Divider";
import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel";
import Grid from "@mui/material/Grid/Grid";
import TextField from "@mui/material/TextField/TextField";
import Typography from "@mui/material/Typography/Typography";
import React from "react";

export default function ShippingForm() {
  return (
    <div>
      <FormControlLabel
        control={<Checkbox defaultChecked />}
        label="This is a physical product"
      />
      <Divider sx={{ mt: 3, mb: 3 }} />
      Weight
      <br />
      <Typography variant="caption">
        Used to calculate shipping rates at checkout and label prices during
        fulfillment.
      </Typography>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={6}>
          <TextField placeholder="Ksh. 0.0" label="Price" fullWidth></TextField>
        </Grid>
        <Grid item xs={6}>
            KG
          {/* <TextField
            placeholder="Ksh. 0.0"
            label="Compare at Price"
            fullWidth
          ></TextField> */}
        </Grid>
      </Grid>
      <Divider sx={{ mt: 3, mb: 3 }} />
      <FormControlLabel
        control={<Checkbox defaultChecked />}
        label="This product has multiple options, like different sizes or colors"
      />
    </div>
  );
}
