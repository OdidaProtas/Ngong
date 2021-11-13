import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import React from "react";

export default function CustomerPopup({ toggle }) {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs>
          <TextField label="First name" size="small"></TextField>
        </Grid>
        <Grid item xs>
          <TextField label="Last name" size="small"></TextField>
        </Grid>
      </Grid>
      <Grid container spacing={2} my={2}>
        <Grid item xs>
          <TextField label="Email" size="small"></TextField>
        </Grid>
        <Grid item xs>
          <TextField label="Phone number" size="small"></TextField>
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
