import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Alert from "@mui/material/Alert";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

export default function ShippingForm({ toggle }) {
  return (
    <div>
      <Alert severity="info">
        If you're not seeing all your rates, add a customer with a complete
        shipping address.
      </Alert>
      <FormControl sx={{ mt: 2 }} component="fieldset">
        <RadioGroup
          aria-label="gender"
          defaultValue="custom"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="free"
            control={<Radio size="small" color="secondary" />}
            label="Free shipping"
          />
          <FormControlLabel
            value="custom"
            control={<Radio size="small" color="secondary" />}
            label="Custom"
          />
        </RadioGroup>
      </FormControl>
      <div>
        <Grid container mt={2} spacing={2}>
          <Grid item xs>
            <TextField
              color="secondary"
              label="Rate name"
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xs>
            <TextField
              color="secondary"
              label="Price"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">ksh.</InputAdornment>
                ),
              }}
              placeholder="0.0"
              size="small"
            />
          </Grid>
        </Grid>
      </div>
      <Divider sx={{ my: 2 }} />
      <div style={{ justifyContent: "flex-end", display: "flex" }}>
        <div>
          <Button
            disableElevation
            sx={{ textTransform: "none" }}
            color="inherit"
            variant="outlined"
            onClick={toggle}
          >
            Cancel
          </Button>
          <Button disabled size="small" sx={{ textTransform: "none" }}>
            Apply
          </Button>
        </div>
      </div>
    </div>
  );
}
