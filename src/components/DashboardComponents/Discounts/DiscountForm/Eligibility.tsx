import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function Eligibility() {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Customer Eligibility</FormLabel>
      <RadioGroup
        aria-label="gender"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Everyone" />
        <FormControlLabel value="male" control={<Radio />} label="Specific groups of customers" />
        <FormControlLabel value="other" control={<Radio />} label="Specific customers" />
      </RadioGroup>
    </FormControl>
  );
}
