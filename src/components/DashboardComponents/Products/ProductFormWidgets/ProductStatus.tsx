import Box from "@mui/material/Box/Box";
import Button from "@mui/material/Button/Button";
import Checkbox from "@mui/material/Checkbox/Checkbox";
import Divider from "@mui/material/Divider/Divider";
import FormControl from "@mui/material/FormControl/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel";
import InputLabel from "@mui/material/InputLabel/InputLabel";
import MenuItem from "@mui/material/MenuItem/MenuItem";
import Select from "@mui/material/Select/Select";
import Typography from "@mui/material/Typography/Typography";
import React, { useState } from "react";
import useModalControls from "../../../../hooks/modals/useModalControls";
import { ModalDialog } from "../../../SharedComponents";
import DatePickerWidget from "./DatePickerWidget";

export default function ProductStatus() {
  const [isActive, setIsActive] = useState("false");
  const { open, toggle } = useModalControls();

  const handleChange = (e: any) => {
    setIsActive(e.target.value);
  };
  return (
    <div>
      PRODUCT STATUS
      <ModalDialog toggle={toggle} open={open}>
        <Box sx={{ p: 2 }}>
          <Typography>Schedule product availability</Typography>
          <DatePickerWidget />
        </Box>
      </ModalDialog>
      <div>
        <FormControl sx={{ mt: 3 }} fullWidth>
          <InputLabel id="demo-simple-select-label">Set Status</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={isActive}
            label="Set Status"
            onChange={handleChange}
          >
            <MenuItem value={"true"}>Active</MenuItem>
            <MenuItem value={"false"}>Draft</MenuItem>
          </Select>
        </FormControl>
        <Typography variant="caption" sx={{ mt: 2 }}>
          {JSON.parse(isActive)
            ? "This product will be available to 1 sales channel."
            : "This product will be hidden from all sales channels."}
        </Typography>
        <Divider sx={{ mt: 3 }} />
        Sales channels and apps
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Marketplace"
        />
        <Button onClick={toggle} sx={{ textTransform: "none" }}>
          Schedule Availability
        </Button>
      </div>
    </div>
  );
}
