import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Typography from "@mui/material/Typography";
import React from "react";
import DatePickerWidget from "./DatePickerWidget";

export default function SelectSalesChanell() {
  return (
    <div>
      <Divider sx={{ my: 2 }} />
      <Typography sx={{ mt: 2 }}>This product is available on</Typography>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Online store"
        />
        <DatePickerWidget />
        <Divider sx={{ my: 2 }} />
        <FormControlLabel disabled control={<Checkbox />} label="Instagram" />
        <FormControlLabel disabled control={<Checkbox />} label="Whatsapp" />
        <FormControlLabel disabled control={<Checkbox />} label="Jumia" />
        <FormControlLabel
          disabled
          control={<Checkbox />}
          label="Essy Marketplace"
        />
        <FormControlLabel disabled control={<Checkbox />} label="Glovo" />
        <FormControlLabel disabled control={<Checkbox />} label="Google" />
      </FormGroup>
    </div>
  );
}
