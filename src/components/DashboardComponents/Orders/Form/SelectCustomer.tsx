import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import useMyCustomers from "../../../../hooks/stores/useMyCustomers";
import { StateContext } from "../../../../state/appstate";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Add from "@mui/icons-material/Add";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function SelectCustomer({ setFieldValue, customer }) {
  useMyCustomers();
  const { customers } = React.useContext(StateContext);
  return (
    <div>
      <div style={{ display: "flex" }}>
        <Autocomplete
          disablePortal
          fullWidth
          id="combo-box-demo"
          options={customers || []}
          getOptionLabel={(o: any) => o.firstName}
          size="small"
          onChange={(e, v) => setFieldValue("customer", v)}
          renderInput={(params) => (
            <TextField
              required
              color="secondary"
              size="small"
              placeholder="Search Customer"
              {...params}
              label="Customers"
            />
          )}
        />
        <Tooltip title="Add customer">
          <IconButton disabled>
            <Add />
          </IconButton>
        </Tooltip>
      </div>

      {Boolean(customer) && (
        <div style={{ marginTop: 30 }}>
          <Typography sx={{ mt: 2 }}>{customer.firstName}</Typography>
          <Typography variant="caption">0 orders</Typography>
          {/* <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography sx={{ mt: 1 }}>Contact Information</Typography>
            <div>
              <Button
                disabled
                color="secondary"
                sx={{ textTransform: "none" }}
                size="small"
              >
                Edit
              </Button>
            </div>
          </div>
          <Divider />
          Shipping Information
          <Divider/>
          Payment Information
          <Divider/> */}
        </div>
      )}
    </div>
  );
}
