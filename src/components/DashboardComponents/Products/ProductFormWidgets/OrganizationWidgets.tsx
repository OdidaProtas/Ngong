import Add from "@mui/icons-material/Add";
import Box from "@mui/material/Box/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React from "react";
import useModalControls from "../../../../hooks/modals/useModalControls";
import { ModalDialog } from "../../../SharedComponents";
import ProductType from "../ProductType";

const VendorForm = () => {  
  return <div>
    <Typography>Create a new vendor</Typography>
  </div>;
};

export default function OrganizationWidgets({ handleChange, values }) {
  const { toggle, open } = useModalControls();
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        p: { lg: 4, md: 1, xs: 1 },
        borderRadius: "4px",
        pt: { lg: 3, md: 3, xs: 3 },
        mt: 3,
      }}
    >
      <ModalDialog toggle={toggle} open={open}>
        <VendorForm />
      </ModalDialog>
      <Typography sx={{ mt: 1 }}>ORGANIZATION</Typography>
      <div>
        <Box sx={{ mt: 2, display: "flex" }}>
          <TextField
            placeholder="Example: Pembe Foods"
            label="Vendor"
            size="small"
            fullWidth
            value={values.vendor}
            name="vendor"
            onChange={handleChange}
          />
          <IconButton onClick={toggle}>
            <Add />
          </IconButton>
        </Box>
        <Divider sx={{ mt: 2, mb: 1 }} />
        <Box sx={{ mt: 2 }}>
          <ProductType />
        </Box>
      </div>
    </Box>
  );
}
