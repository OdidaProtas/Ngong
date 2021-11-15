import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import React from "react";
import CollectionConditions from "./CollectionConditionsItem";

export default function Conditions() {
  return (
    <Box sx={{ my: 3 }}>
      <Typography sx={{ my: 2 }}>Conditions</Typography>
      <FormControl component="fieldset">
        <FormLabel component="legend">Procucts must match</FormLabel>
        <RadioGroup
          
          sx={{ mt: 1, mb: 3 }}
          aria-label="gender"
          defaultValue="female"
          row
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="female"
            control={<Radio disabled color="secondary" size="small" />}
            label="All conditions"
          />
          <FormControlLabel
            value="male"
            control={<Radio disabled color="secondary" size="small" />}
            label="Any conditions"
          />
        </RadioGroup>
      </FormControl>
      <CollectionConditions />
      <Button
      disabled
        color="inherit"
        disableElevation
        variant="outlined"
        sx={{ textTransform: "none", color: "text.secondary", my: 2 }}
      >
        Add another condition
      </Button>
    </Box>
  );
}
