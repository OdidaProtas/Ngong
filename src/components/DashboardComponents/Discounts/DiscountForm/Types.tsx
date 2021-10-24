import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function Types() {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Type</FormLabel>
      <RadioGroup
        aria-label="gender"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Percentage" />
        <FormControlLabel value="male" control={<Radio />} label="Fixed amount" />
        <FormControlLabel value="other" control={<Radio />} label="Free shipping" />
        <FormControlLabel value="xy" control={<Radio />} label="Buy X get Y" />
      </RadioGroup>
    </FormControl>
  );
}
