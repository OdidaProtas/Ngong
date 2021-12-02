import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { StateContext } from "../../../../state/appstate";
import useMyProducts from "../../../../hooks/stores/useMyProducts";
import Box from "@mui/system/Box";
import ItemQuantityWidget from "./ItemQuantityWidget";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useRouteMatch } from "react-router";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function ProductSelect({ values, setFieldValue, context }) {
  useMyProducts();
  const { myProducts }: any = React.useContext(StateContext);
  const { path } = useRouteMatch();
  const isOrder = path.includes("order");
  return (
    <div>
      <Autocomplete
        multiple
        noOptionsText="You do not have active products"
        id="checkboxes-tags-demo"
        options={myProducts?.filter((p) => p.status === "active") || []}
        disableCloseOnSelect
        getOptionLabel={(option: any) => option.title}
        onChange={(e, value) => setFieldValue("products", value)}
        renderOption={(props, option, { selected }) => (
          <li {...props}>
            <Checkbox
              color="secondary"
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
            />
            {option.title}
          </li>
        )}
        fullWidth
        renderInput={(params) => (
          <TextField
            {...params}
            size="small"
            color="secondary"
            fullWidth
            label="Products"
            placeholder="Search Products"
          />
        )}
      />
      <div>
        {values.products?.length > 0 ? (
          <Box>
            <div>
              <Grid container pt={3}>
                <Grid item xs>
                  <Typography sx={{ fontWeight: "bold" }}>Product</Typography>
                </Grid>
                <Grid item xs>
                  <Typography sx={{ fontWeight: "bold" }}>Quantity</Typography>
                </Grid>
                {isOrder && (
                  <Grid item xs>
                    <Typography sx={{ fontWeight: "bold", textAlign: "right" }}>
                      Total
                    </Typography>
                  </Grid>
                )}
              </Grid>
              <Divider />
            </div>
            {values.products.map((p, i) => (
              <ItemQuantityWidget key={i} product={p} />
            ))}
          </Box>
        ) : null}
      </div>
    </div>
  );
}
