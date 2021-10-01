import { Button, TextField, Typography } from "@mui/material";

import * as Yup from "yup";
import useStyles from "./BusinessFormScreen.styles";

const fields: any = [
  { name: "name", type: "text", label: "Business Name" },
  { name: "email", type: "email", label: "Business Email" },
  { name: "phone", type: "number", label: "Business Phone" },
  { name: "location", type: "text", label: "Location" },
  { name: "locationDetails", type: "text", label: "Location Details" },
  { name: "productType", type: "text", label: "Product Type" },
  { name: "description", type: "text", label: "Description" },

];

const validationSchema = Yup.object().shape({});

export default function BusinessFormScreen() {
  const classes = useStyles()
  return (
    <div>
      <Typography variant="h6">Setup a business</Typography>
      <div>
        {fields.map((field: any, index: number) => {
          const { label } = field;
          return (
            <div className={classes.inputContainer} key={index}>
              <TextField size="small"  fullWidth label={label} />
            </div>
          );
        })}
          <input type="file" id="myFile" name="filename"/>
        <div className={classes.button}>
          <Button variant="contained" fullWidth>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}
