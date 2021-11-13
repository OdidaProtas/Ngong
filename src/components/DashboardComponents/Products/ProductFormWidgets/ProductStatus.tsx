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

export default function ProductStatus({
  handleChange,
  error,
  touched,
  value,
}: any) {
  const [isActive, setIsActive] = useState("false");
  const { open, toggle } = useModalControls();

  return (
    <div>
      <Typography sx={{ mb: 2 }}>PRODUCT STATUS</Typography>
      <ModalDialog toggle={toggle} open={open}>
        <Box sx={{ mt: 1 }}>
          <Typography>Schedule product availability</Typography>
          <DatePickerWidget values={value} handleChange={handleChange} />
        </Box>
      </ModalDialog>
      <div>
        <FormControl size="small" sx={{ mt: 1 }} fullWidth>
          <InputLabel id="demo-simple-select-label">Set Status</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={value.status}
            label="Set Status"
            error={Boolean(error) && Boolean(touched)}
            name="status"
            onChange={handleChange}
          >
            <MenuItem value={"draft"}>Draft</MenuItem>
            <MenuItem value={"active"}>Active</MenuItem>
            <MenuItem value={"archived"}>Archived</MenuItem>
          </Select>
        </FormControl>
        <Typography variant="caption" sx={{ mt: 2 }}>
          {JSON.parse(isActive)
            ? "This product will be available to 1 sales channel."
            : "This product will be hidden from all sales channels."}
        </Typography>
        <Divider sx={{ my: 1 }} />
        <Button
          color="secondary"
          size="small"
          onClick={toggle}
          sx={{ textTransform: "none" }}
        >
          Schedule Availability
        </Button>
        <Typography sx={{ mt: 1 }}>{value.availability}</Typography>
      </div>
    </div>
  );
}
