


import  HelpIcon  from "@mui/icons-material/Help";
import Checkbox from "@mui/material/Checkbox/Checkbox";
import Divider from "@mui/material/Divider/Divider";
import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel";
import Grid from "@mui/material/Grid/Grid";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField/TextField";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import React from "react";

export default function Pricing({ handleChange, values }: any) {
  return (
    <div>
      <Grid container spacing={2} mt={1}>
        <Grid item xs={6}>
          <TextField
            size="small"
            name="price"
            value={values?.price}
            onChange={handleChange}
            label="Price"
            placeholder="0.0"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">ksh</InputAdornment>
              ),
            }}
          ></TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">ksh</InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <Tooltip title="To show a reduced price, move the product's original price into Compare at price. Enter a lower value into Price.">
                      <HelpIcon />
                  </Tooltip>
                </InputAdornment>
              ),
            }}
            size="small"
            name="compareAtPrice"
            value={values?.compareAtPrice}
            onChange={handleChange}
            placeholder="0.0"
            label="Compare at Price"
            fullWidth
          ></TextField>
        </Grid>
      </Grid>
      <Divider sx={{ mt: 3 }} />
      <Grid container spacing={1} mt={2}>
        <Grid item xs>
          <TextField
            size="small"
            placeholder="0.0"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">ksh</InputAdornment>
              ),
            }}
            label="Cost per item"
            value={values?.costPerItem}
            onChange={handleChange}
            name="costPerItem"
            helperText="Customers won't see this"
            fullWidth
          ></TextField>
        </Grid>
        <Grid item xs>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <div style={{ textAlign: "center" }}>
              <Typography>Profit</Typography>
              <Typography>
                {values.costPerItem && values.price
                  ? `${Math.floor(
                      ((values.price - values.costPerItem) / values.price) * 100
                    )}%`
                  : `-`}
              </Typography>
            </div>
            <div style={{ textAlign: "center" }}>
              <Typography>Margin</Typography>
              <Typography variant="body2">
                {values.costPerItem && values.price
                  ? `Ksh ${values.price - values.costPerItem}`
                  : `-`}
              </Typography>
            </div>
          </div>
        </Grid>
      </Grid>
      <Divider sx={{ mt: 3, mb: 2 }} />
      <FormControlLabel
        control={
          <Checkbox
            size="small"
            color="secondary"
            name="isTaxed"
            onChange={handleChange}
            value={values.isTaxed}
            defaultChecked={values.isTaxed}
          />
        }
        label="Charge tax on this product"
      />
    </div>
  );
}
