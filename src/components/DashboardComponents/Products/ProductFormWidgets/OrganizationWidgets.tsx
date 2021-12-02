import Add from "@mui/icons-material/Add";
import Box from "@mui/material/Box/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import useModalControls from "../../../../hooks/modals/useModalControls";
import useMyVendors from "../../../../hooks/stores/useMyVendors";
import { axiosInstance } from "../../../../state";
import { StateContext } from "../../../../state/appstate";
import { ModalDialog } from "../../../SharedComponents";
import ProductType from "../ProductType";
import Autocomplete from "@mui/material/Autocomplete";

const VendorForm = ({ toggleModal, setFieldValue }) => {
  const [vendorName, setVendorName] = useState(null);
  const { open, toggle } = useModalControls();
  const { stateDispatch }: any = useContext(StateContext);
  const { id }: any = useParams();
  const handleSubmit = () => {
    toggle();
    if (vendorName === "") {
      alert("Cannot be empty");
      toggle();
      return;
    }
    axiosInstance
      .post(`/vendors`, { name: vendorName, store: id })
      .then(({ data }) => {
        toggle();
        stateDispatch({
          type: "ADD_VENDOR",
          payload: data,
        });
        setFieldValue("vendor", data);
        toggleModal();
      })
      .catch((e) => {
        toggle();
        alert("An error occured");
      });
  };

  useEffect(() => {
    if (open) setVendorName("");
  }, [open]);

  return (
    <div>
      <Typography>Create a new vendor</Typography>
      <TextField
        color="secondary"
        placeholder="Name"
        sx={{ my: 2 }}
        value={vendorName}
        onChange={(e) => setVendorName(e.target.value)}
        fullWidth
        size="small"
      />
      <Button
        disabled={open}
        onClick={handleSubmit}
        color="inherit"
        sx={{ textTransform: "none" }}
        size="small"
        variant="outlined"
      >
        Save
      </Button>
    </div>
  );
};

export default function OrganizationWidgets({
  setFieldValue,
  handleChange,
  values,
}) {
  const { toggle, open } = useModalControls();
  useMyVendors();
  const { vendors } = useContext(StateContext);
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
        <VendorForm setFieldValue={setFieldValue} toggleModal={toggle} />
      </ModalDialog>
      <Typography sx={{ mt: 1 }}>ORGANIZATION</Typography>
      <div>
        <Box sx={{ mt: 2, display: "flex" }}>
          <Autocomplete
            disablePortal
            fullWidth
            value={values.vendors}
            id="combo-box-demo"
            options={vendors || []}
            size="small"
            onChange={(e, v) => setFieldValue("vendor", v)}
            getOptionLabel={(o: any) => o.name}
            renderInput={(params) => <TextField {...params} label="Vendor" />}
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
