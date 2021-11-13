import Checkbox from "@mui/material/Checkbox/Checkbox";
import Divider from "@mui/material/Divider/Divider";
import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel";
import Grid from "@mui/material/Grid/Grid";
import TextField from "@mui/material/TextField/TextField";
import Typography from "@mui/material/Typography/Typography";
import React from "react";
import UnitPicker from "./ProductFormWidgets/UnitPicker";

export default function ShippingForm({ handleChange, values }: any) {
  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            size="small"
            color="secondary"
            name={"isPhysical"}
            value={values.isPhysical}
            onChange={handleChange}
            defaultChecked={values.isPhysical}
          />
        }
        label="This is a physical product"
      />
      {values.isPhysical ? (
        <div>
          <Divider sx={{ mt: 1, mb: 1 }} />
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={7} mb={2}>
              <TextField
                size="small"
                helperText="Used to calculate shipping rates at checkout and label prices during
              fulfillment."
                placeholder="0.0"
                label="Weight"
                name="weight"
                onChange={handleChange}
                value={values.weight}
                fullWidth
                type="number"
              ></TextField>
            </Grid>
            <Grid item xs={4}>
              <UnitPicker values={values} handleChange={handleChange} />
            </Grid>
          </Grid>
        </div>
      ) : null}
    </div>
  );
}
