import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";

export default function DiscountForm({ toggle }) {
  const [value, setValue] = useState("percentage");
  return (
    <div>
      <Grid container spacing={2} pt={1}>
        <Grid item xs>
          <FormControl size="small" fullWidth>
            < InputLabel id="demo-simple-select-label">Discount type</InputLabel>
            <Select
              color="secondary"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={value}
              label="Discount type"
              onChange={(e) => setValue(e.target.value)}
            >
              <MenuItem value={"percentage"}>Percentage</MenuItem>
              <MenuItem value={"amount"}>Amount</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs>
          <TextField
            color="secondary"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">ksh.</InputAdornment>
              ),
            }}
            placeholder="0.0"
            label="Discount value"
            type="number"
            fullWidth
            size="small"
          />
        </Grid>
      </Grid>
      <div>
        <TextField
          multiline
          color="secondary"
          sx={{ mt: 2 }}
          helperText="Your customers can see this reason"
          label="Reason"
          fullWidth
          size="small"
        />
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
