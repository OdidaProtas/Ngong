import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Form, Formik } from "formik";
import React, { useContext, useState } from "react";
import { useParams } from "react-router";
import { axiosInstance } from "../../../../state";
import { StateContext } from "../../../../state/appstate";

export default function SupplierForm({ toggle }) {
  const { id }: any = useParams();
  const { stateDispatch, myStores }: any = useContext(StateContext);
  const [loading, setLoading] = useState(false);


  const handleSubmit = (values) => {
    setLoading(true);
    axiosInstance
      .post(`/suppliers/${id}`, { ...values })
      .then((res) => {
        stateDispatch({ type: "ADD_SUPPLIER", payload: res.data });
        setLoading(false);
        toggle();
      })
      .catch((e) => {
        setLoading(false);
        alert("An error occured");
      });
  };

  return (
    <div>
      <Formik
        onSubmit={handleSubmit}
        initialValues={{
          name: "",
        }}
      >
        {({ values, errors, touched, handleChange }) => {
          return (
            <Form>
              <TextField
                fullWidth
                sx={{ my: 1 }}
                value={values.name}
                label="Supplier name"
                size="small"
                name="name"
                required
                onChange={handleChange}
              ></TextField>
              <TextField
                fullWidth
                sx={{ my: 1 }}
                name="address"
                value={values.address}
                label="Address"
                size="small"
                onChange={handleChange}
              ></TextField>
              <TextField
                fullWidth
                sx={{ my: 1 }}
                label="Apartment, suite, etc"
                size="small"
                value={values.apartment}
                name="apartment"
                onChange={handleChange}
              ></TextField>
              <TextField
                fullWidth
                sx={{ my: 1 }}
                label="City"
                size="small"
                value={values.city}
                name="city"
                onChange={handleChange}
              ></TextField>

              <Grid container spacing={2}>
                <Grid item xs>
                  <TextField
                    onChange={handleChange}
                    name="country"
                    value={values.country}
                    label="Country"
                    fullWidth
                    size="small"
                  ></TextField>
                </Grid>
                <Grid item xs>
                  <TextField
                    value={values.postalCode}
                    label="Postal code"
                    fullWidth
                    name="postalCode"
                    onChange={handleChange}
                    size="small"
                  ></TextField>
                </Grid>
              </Grid>
              <TextField
                label="Contact name"
                sx={{ mt: 2 }}
                name="contactName"
                onChange={handleChange}
                value={values.contactName}
                fullWidth
                size="small"
              ></TextField>
              <Grid container spacing={2} my={1}>
                <Grid item xs>
                  <TextField
                    type="email"
                    onChange={handleChange}
                    name="email"
                    value={values.email}
                    fullWidth
                    label="Email"
                    size="small"
                  ></TextField>
                </Grid>
                <Grid item xs>
                  <TextField
                    fullWidth
                    name="phone"
                    onChange={handleChange}
                    value={values.phone}
                    label="Phone number"
                    size="small"
                  ></TextField>
                </Grid>
              </Grid>
              <Divider sx={{ mb: 2 }} />
              <Button
                variant="outlined"
                disableElevation
                sx={{ textTransform: "none" }}
                color="inherit"
                onClick={toggle}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disableElevation
                sx={{ ml: 2 }}
                color="secondary"
                variant="contained"
                disabled={loading}
              >
                {loading ? "Saving..." : "Save"}
              </Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
