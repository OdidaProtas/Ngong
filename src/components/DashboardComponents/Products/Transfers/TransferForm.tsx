import Add from "@mui/icons-material/Add";
import ArrowBackIosNew from "@mui/icons-material/ArrowBackIosNew";
import Search from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import NativeSelect from "@mui/material/NativeSelect";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import React, { useContext, useState } from "react";
import { useHistory, useParams } from "react-router";
import useModalControls from "../../../../hooks/modals/useModalControls";
import useMySuppliers from "../../../../hooks/stores/useMySuppliers";
import { StateContext } from "../../../../state/appstate";
import {
  ButtonWithLoaderComponent,
  ModalDialog,
} from "../../../SharedComponents";
import SupplierForm from "./SupplierForm";
import TagsWidget from "./TagsWidget";

import Autocomplete from "@mui/material/Autocomplete";
import TbFallBack from "../../../../screens/StoreSelectionScreen/TbFallBack";
import TablesSkeleton from "../../../SharedComponents/TablesSkeleton/TablesSkeleton";
import { AuthContext, axiosInstance } from "../../../../state";
import { Form, Formik } from "formik";

export default function TransferForm() {
  const { goBack, push } = useHistory();
  const { toggle, open } = useModalControls();

  const { id }: any = useParams();

  const [loading, setLoading] = useState(false);

  const { suppliers, stateDispatch, myStores, myProducts }: any =
    useContext(StateContext);

  useMySuppliers();

  if (suppliers === null || myProducts === null) return <TablesSkeleton />;

  const handleSubmit = (v) => {
    setLoading(true);
    const data = v;
    if (!v.products) {
      alert("Select atleast one item");
      return;
    }
    data["supplier"] = v.supplier.id;
    data["products"] = v.products.map((p) => p.id);
    data["store"] = id;

    axiosInstance
      .post("/transfer", data)
      .then((res) => {
        setLoading(false);
        stateDispatch({
          type: "ADD_TRANSFER",
          payload: res.data,
        });
        push(`/admin/${id}/products/transfers`);
      })
      .catch((e) => {
        setLoading(false);
      });
  };

  return (
    <div>
      <ModalDialog toggle={toggle} title="Add supplier" open={open}>
        <SupplierForm toggle={toggle} />
      </ModalDialog>
      <Button
        sx={{ textTransform: "none" }}
        color="secondary"
        onClick={() => goBack()}
        startIcon={<ArrowBackIosNew />}
        size="small"
      >
        Create inventory transfer
      </Button>

      <Formik
        onSubmit={handleSubmit}
        initialValues={{
          supplier: "",
          destination: "",
          ref: "",
          url: "",
        }}
      >
        {({ values, handleChange, errors, touched, setFieldValue }) => {
          return (
            <Form>
              <Box>
                <Grid container spacing={1}>
                  <Grid item xs={12} lg={6}>
                    <Box sx={{ bgcolor: "background.paper", p: 3 }}>
                      <div style={{ display: "flex" }}>
                        <Autocomplete
                          color="secondary"
                          fullWidth
                          size="small"
                          // disablePortal
                          id="combo-box-demo"
                          options={suppliers}
                          getOptionLabel={(o: any) => o.name}
                          onChange={(e, v) => {
                            setFieldValue("supplier", v);
                          }}
                          renderInput={(params) => (
                            <TextField
                              label="Supplier"
                              color="secondary"
                              name="supplier"
                              placeholder="Search suppliers..."
                              sx={{ mt: 2 }}
                              {...params}
                            ></TextField>
                          )}
                        />
                        <Tooltip sx={{ mt: 2 }} title="Add supplier">
                          <IconButton onClick={toggle}>
                            <Add />
                          </IconButton>
                        </Tooltip>
                      </div>
                    </Box>
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <Box sx={{ bgcolor: "background.paper", p: 3 }}>
                      <Autocomplete
                        fullWidth
                        size="small"
                        color="secondary"
                        // disablePortal
                        id="combo-box-demo"
                        options={["Current Location", "Other"]}
                        getOptionLabel={(o: any) => o}
                        onChange={(e, v) => {
                          setFieldValue("destination", v);
                        }}
                        renderInput={(params) => (
                          <TextField
                            required
                            label="Destination"
                            color="secondary"
                            name="destination"
                            placeholder="Search destination..."
                            sx={{ mt: 2 }}
                            {...params}
                          ></TextField>
                        )}
                      />
                    </Box>
                  </Grid>
                </Grid>
              </Box>
              <Box sx={{ bgcolor: "background.paper", my: 2, p: 3 }}>
                <div>
                  <Autocomplete
                    multiple
                    size="small"
                    limitTags={2}
                    id="multiple-limit-tags"
                    options={myProducts}
                    getOptionLabel={(option: any) => option.title}
                    onChange={(e, v) => {
                      setFieldValue("products", v);
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Products"
                        name="products"
                        color="secondary"
                        placeholder="Search Products"
                      />
                    )}
                  />
                  {/* <Tooltip title="Add Product">
                    <IconButton
                      onClick={() => push(`/admin/${id}/products/new`)}
                      sx={{ mt: 1 }}
                    >
                      <Add />
                    </IconButton>
                  </Tooltip> */}
                </div>
              </Box>
              <Box>
                <Grid mt={2} container spacing={2}>
                  <Grid item xs>
                    <Box sx={{ bgcolor: "background.paper", p: 3 }}>
                      <Typography>Shipment Details</Typography>
                      <TextField
                        id="date"
                        name="arrival"
                        onChange={handleChange}
                        fullWidth
                        size="small"
                        label="Estimated arrival"
                        type="date"
                        defaultValue="2022-01-01"
                        sx={{ mt: 2 }}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                      <TextField
                        fullWidth
                        sx={{ my: 2 }}
                        size="small"
                        color="secondary"
                        name="trackingNumber"
                        onChange={handleChange}
                        label="Tracking number"
                      ></TextField>
                      <div style={{ display: "flex" }}>
                        <Autocomplete
                          color="secondary"
                          fullWidth
                          size="small"
                          // disablePortal
                          id="combo-box-demo"
                          options={["Other"]}
                          disabled
                          renderInput={(params) => (
                            <TextField
                              color="secondary"
                              label="Shipping carrier"
                              placeholder="Search Carrier"
                              {...params}
                              disabled
                            ></TextField>
                          )}
                        />
                        <Tooltip title="Add carrier">
                          <IconButton disabled>
                            <Add />
                          </IconButton>
                        </Tooltip>
                      </div>
                      <TextField
                        sx={{ my: 2 }}
                        label="Tracking URL"
                        fullWidth
                        name="url"
                        value={values.url}
                        onChange={handleChange}
                        size="small"
                        color="secondary"
                      />
                    </Box>
                  </Grid>
                  <Grid item xs>
                    <Box sx={{ bgcolor: "background.paper", p: 3 }}>
                      <Typography>Additional details</Typography>
                      <TextField
                        sx={{ my: 2 }}
                        label="Reference number"
                        fullWidth
                        name="ref"
                        onChange={handleChange}
                        value={values.ref}
                        size="small"
                        color="secondary"
                      />
                    </Box>
                    <Box sx={{ my: 2, bgcolor: "background.paper" }}>
                      <div style={{ display: "flex" }}>
                        <TagsWidget />
                        <IconButton disabled>
                          <Add />
                        </IconButton>
                      </div>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 5 }}>
                <ButtonWithLoaderComponent
                  title="Submit"
                  loading={loading}
                ></ButtonWithLoaderComponent>
              </Box>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
