import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import React from "react";

export default function SupplierForm({ toggle }) {
  return (
    <div>
      <TextField
        fullWidth
        sx={{ my: 1 }}
        label="Supplier name"
        size="small"
      ></TextField>
      <TextField
        fullWidth
        sx={{ my: 1 }}
        label="Address"
        size="small"
      ></TextField>
      <TextField
        fullWidth
        sx={{ my: 1 }}
        label="Apartment, suite, etc"
        size="small"
      ></TextField>
      <TextField
        fullWidth
        sx={{ my: 1 }}
        label="City"
        size="small"
      ></TextField>

      <Grid container spacing={2}>
        <Grid item xs>
          <TextField label="Country" fullWidth size="small"></TextField>
        </Grid>
        <Grid item xs>
          <TextField label="Postal code" fullWidth size="small"></TextField>
        </Grid>
      </Grid>
      <TextField label="Contact name" sx={{mt:2}} fullWidth size="small"></TextField>
      <Grid container spacing={2} my={1}>
        <Grid item xs>
          <TextField fullWidth label="Email" size="small"></TextField>
        </Grid>
        <Grid item xs>
          <TextField fullWidth label="Phone number" size="small"></TextField>
        </Grid>
      </Grid>
      <Divider sx={{ mb: 2 }} />
      <Button
        variant="outlined"
        disableElevation
        sx={{ textTransform: "none" }}
        color="inherit"
        onClick={toggle}
      >
        Cancel
      </Button>
      <Button
        onClick={toggle}
        disableElevation
        sx={{ ml: 2 }}
        color="secondary"
        variant="contained"
      >
        Save
      </Button>
    </div>
  );
}
