import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";

export default function CustomerBuys() {
  const [age, setAge] = useState();

  const handleChange = () => {};
  return (
    <div>
      <FormControl component="fieldset">
        <FormLabel component="legend">Customer buys</FormLabel>
        <RadioGroup
          aria-label="gender"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="female"
            control={<Radio />}
            label="Minimum quantity of items"
          />
          <FormControlLabel
            value="male"
            control={<Radio />}
            label="Minimum purchase amount"
          />
        </RadioGroup>
      </FormControl>
      <Grid container spacing={1}>
        <Grid xs={4} mt={2} pr={2}>
          <TextField size="small" placeholder="0" label="Quantity" fullWidth />
        </Grid>
        <Grid xs mt={2}>
          <FormControl size="small" fullWidth>
            <InputLabel id="demo-simple-select-label">
              Any items from
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Any items from"
              onChange={handleChange}
            >
              <MenuItem value={10}>Specific Products</MenuItem>
              <MenuItem value={30}>Specific Collections</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={9}>
          <TextField
            size="small"
            sx={{ mt: 3 }}
            placeholder="Specific products"
            label="Search Products"
            fullWidth
          />
        </Grid>

        <Grid item mt={3}>
          <Button variant="outlined">Browse</Button>
        </Grid>
      </Grid>
      <Divider sx={{ mt: 2, mb: 2 }} />
      Customer gets
      <Typography sx={{ mt: 2, mb: 2 }}>
        Customers must add the quantity of items specified below to their cart.
      </Typography>
      <Grid container spacing={1}>
        <Grid xs={4} mt={2} pr={2}>
          <TextField size="small" placeholder="0" label="Quantity" fullWidth />
        </Grid>
        <Grid xs mt={2}>
          <FormControl size="small" fullWidth>
            <InputLabel id="demo-simple-select-label">
              Any items from
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Any items from"
              onChange={handleChange}
            >
              <MenuItem value={10}>Specific Products</MenuItem>
              <MenuItem value={30}>Specific Collections</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={9}>
          <TextField
            size="small"
            sx={{ mt: 3 }}
            placeholder="Specific products"
            label="Search Products"
            fullWidth
          />
        </Grid>

        <Grid item mt={3}>
          <Button variant="outlined">Browse</Button>
        </Grid>
      </Grid>
      <div>
        <FormControl sx={{ mt: 3 }} component="fieldset">
          <FormLabel component="legend">At a discounted value</FormLabel>
          <RadioGroup
            aria-label="gender"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Percentage"
            />
            <FormControlLabel value="male" control={<Radio />} label="Free" />
          </RadioGroup>
        </FormControl>
        <br />  
        <TextField sx={{mt:2}} size="small" label="Discount percentage" placeholder="0%" />
      </div>
    </div>
  );
}
