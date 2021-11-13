import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Typography from "@mui/material/Typography";

import React from "react";

// import { CSVLink, CSVDownload } from "react-csv";
import CsvDownloader from "react-csv-downloader";

export default function Export({ toggle }: any) {
  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const datas = [
    {
      cell1: "row 1 - cell 1",
      cell2: "row 1 - cell 2",
    },
    {
      cell1: "row 2 - cell 1",
      cell2: "row 2 - cell 2",
    },
  ];
  const columns = [
    {
      id: "cell1",
      displayName: "Cell 1",
    },
    {
      id: "cell2",
      displayName: "Cell 2",
    },
  ];

  return (
    <div>
      <Typography>
        This CSV file can update all product information. To update just
        inventory quantities use the{" "}
        <span style={{ color: "blue" }}>CSV file for inventory.</span>
      </Typography>
      <FormControl sx={{ mt: 2 }} component="fieldset">
        <FormLabel component="legend">Export</FormLabel>
        <RadioGroup
          aria-label="gender"
          name="gender1"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            value="femle"
            control={<Radio />}
            label="Current Page"
          />
          <FormControlLabel
            value="mle"
            control={<Radio />}
            label="All Products"
          />
          <FormControlLabel
            value="oher"
            disabled
            control={<Radio />}
            label="Selected"
          />
          <FormControlLabel
            value="disabled"
            disabled
            control={<Radio />}
            label="Search results"
          />
        </RadioGroup>
      </FormControl>
      <FormControl sx={{ mt: 2 }} component="fieldset">
        <FormLabel component="legend">Export as</FormLabel>
        <RadioGroup
          aria-label="gender"
          name="gender1"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            value="female"
            control={<Radio />}
            label="CSV for Excel, Numbers, or other spreadsheet programs"
          />
          <FormControlLabel
            value="male"
            control={<Radio />}
            label="Plain CSV file"
          />
        </RadioGroup>
      </FormControl>
      <Divider sx={{ my: 2 }} />
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <div>
          <Button
            disableElevation
            sx={{ mr: 2 }}
            variant="outlined"
            color="inherit"
            onClick={toggle}
          >
            Cancel
          </Button>
        </div>
        <div>
          <CsvDownloader filename="Products" columns={columns} datas={datas}>
            <Button color="secondary" disableElevation variant="contained">
              Export
            </Button>
          </CsvDownloader>
        </div>
      </div>
    </div>
  );
}
