import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import React from "react";
import CollectionsSelect from "./CollectionsSelect";

const tagOptions = [
  {
    label: "Product title",
    value: "title",
  },
  {
    label: "Product tag",
    value: "tag",
  },
  {
    label: "Product vendor",
    value: "vendor",
  },
  {
    label: "Product price",
    value: "price",
  },
  {
    label: "Compare at price",
    value: "comparePrice",
  },
  {
    label: "Weight",
    value: "weight",
  },
  {
    label: "Inventory stock",
    value: "Variants title",
  },
];

const equatorOptions = [
  {
    label: "is greater than",
    value: "isGreaterThan",
  },
  {
    label: "is not equal to",
    value: "isNotEqualTo",
  },
  {
    label: "is less than",
    value: "isLessThan",
  },
  {
    label: "starts With",
    value: "startsWith",
  },
  {
    label: "ends with",
    value: "endsWith",
  },
  {
    label: "contains",
    value: "contains",
  },
  {
    label: "does not contain",
    value: "doesNotContain",
  },
  {
    label: "is not empty",
    value: "isNotEmpty",
  },
  {
    label: "is empty",
    value: "isEmpty",
  },
];

export default function CollectionConditionsItem() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs>
          <CollectionsSelect options={tagOptions} label="Product Tag" />
        </Grid>
        <Grid item xs>
          <CollectionsSelect options={equatorOptions} label="Is equal to" />
        </Grid>
        <Grid item xs>
          <TextField size="small" />
          {/* <CollectionsSelect /> */}
        </Grid>
      </Grid>
    </div>
  );
}
