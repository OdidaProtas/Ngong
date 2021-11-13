import Checkbox from "@mui/material/Checkbox/Checkbox";
import Divider from "@mui/material/Divider/Divider";
import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel";
import Grid from "@mui/material/Grid/Grid";
import TextField from "@mui/material/TextField/TextField";
import React from "react";

export default function Inventoryform({ values, handleChange }: any) {
  return (
    <div>
      <Grid container spacing={2} mt={2} mb={3}>
        <Grid item xs={6}>
          <TextField
            size="small"
            onChange={handleChange}
            value={values.sku}
            name="sku"
            label="Stock keeping unit (SKU)"
            fullWidth
          ></TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            size="small"
            onChange={handleChange}
            value={values.barcode}
            name="barcode"
            label="Barcode"
            fullWidth
          ></TextField>
        </Grid>
      </Grid>
      <FormControlLabel
        control={
          <Checkbox
            value={values.trackQuantity}
            name="trackQuantity"
            size="small"
            onChange={handleChange}
            color="secondary"
            defaultChecked={values.trackQuantity}
          />
        }
        label="Track quantity"
      />
      <br />
      {values.trackQuantity && (
        <FormControlLabel
          control={
            <Checkbox
              name="sellOutOfStock"
              size="small"
              color="secondary"
              value={values.sellOutOfStock}
              onChange={handleChange}
              defaultChecked={values.sellOutOfStock}
            />
          }
          label="Continue selling when out of stock"
        />
      )}
      <Divider sx={{ mt: 1, mb: 2 }} />
      {values.trackQuantity && (
        <div> 
          <TextField
            type="number"
            placeholder={"0"}
            sx={{ mt: 2, mb:1 }}
            label="Available Quantiry"
            size="small"
            name="quantity"
            onChange={handleChange}
            value={values.quantity}
          ></TextField>
        </div>
      )}
    </div>
  );
}
